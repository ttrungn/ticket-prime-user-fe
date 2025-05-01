provider "aws" {
  region = var.aws_region
}

provider "aws" {
  alias  = "cloudfront_acm_region"
  region = var.cloudfront_acm_region
}