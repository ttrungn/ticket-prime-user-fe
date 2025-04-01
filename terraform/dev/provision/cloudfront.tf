resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = "Access S3 bucket securely from CloudFront"
}

resource "aws_cloudfront_distribution" "fe_cdn" {
  enabled = true

  origin {
    domain_name = aws_s3_bucket.fe_bucket.bucket_regional_domain_name
    origin_id   = "reactS3Origin"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
    }
  }

  default_root_object = "index.html"

  default_cache_behavior {
    target_origin_id = "reactS3Origin"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate_validation.cert.certificate_arn
    ssl_support_method  = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  aliases = [var.domain_name]

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}
