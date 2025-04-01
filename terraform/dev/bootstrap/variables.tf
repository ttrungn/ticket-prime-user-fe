variable "aws_region" {
  description = "The AWS region to deploy the resources"
  type = string
}

variable "state_bucket_name" {
  description = "The name of the S3 bucket to store the terraform state"
  type = string
}