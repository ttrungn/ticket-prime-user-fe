# S3 bucket to store Terraform state
resource "aws_s3_bucket" "state_bucket" {
  bucket = var.state_bucket_name
}

# Enable versioning (recommended for rollback and safety)
resource "aws_s3_bucket_versioning" "state_bucket_versioning" {
  bucket = aws_s3_bucket.state_bucket.id

  versioning_configuration {
    status = "Enabled"
  }
}

# Block all public access (required for sensitive infra)
resource "aws_s3_bucket_public_access_block" "state_bucket_block" {
  bucket = aws_s3_bucket.state_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}