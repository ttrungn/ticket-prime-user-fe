resource "aws_route53_record" "cloudfront_alias" {
  zone_id = var.hosted_zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.fe_cdn.domain_name
    zone_id                = aws_cloudfront_distribution.fe_cdn.hosted_zone_id
    evaluate_target_health = false
  }
}
