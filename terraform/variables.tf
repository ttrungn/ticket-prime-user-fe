variable "aws_region" {
  description = "The AWS region to deploy the resources"
  type = string
}

variable "cloudfront_acm_region" {
  description = "The AWS region for ACM certificate"
  type        = string
}

variable "domain_name" {
  description = "Domain name to host the app"
  type = string
}

variable "bucket_name" {
  description = "The name of the S3 bucket to store the React app"
  type = string
}

variable "hosted_zone_id" {
  description = "The ID of the Route 53 hosted zone"
  type = string
}
