output "cloudfront_url" {
  value = aws_cloudfront_distribution.fe_cdn.domain_name
}

output "s3_bucket_name" {
  value = aws_s3_bucket.fe_bucket.bucket
}