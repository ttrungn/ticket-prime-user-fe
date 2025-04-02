data "aws_s3_bucket" "state_bucket" {
  bucket = var.state_bucket_name
}

resource "aws_s3_bucket_lifecycle_configuration" "state_bucket_lifecycle_config" {
  bucket = aws_s3_bucket.state_bucket.id

  rule {
    id     = "move-to-intelligent-tiering"
    status = "Enabled"
    transition {
      days          = 0
      storage_class = "INTELLIGENT_TIERING"
    }
    filter {
      prefix = "${var.bucket_name}"
    }
  }
}

resource "aws_s3_bucket_policy" "deny_state_file_deletion" {
  bucket = data.aws_s3_bucket.state_bucket.bucket

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "DenyDeleteStateFile"
        Effect    = "Deny"
        Principal = "*"
        Action    = "s3:DeleteObject"
        Resource  = "arn:aws:s3:::${data.aws_s3_bucket.state_bucket.bucket}/${var.bucket_name}/terraform.tfstate"
      }
    ]
  })
}
