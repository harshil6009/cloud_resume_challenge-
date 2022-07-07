terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"

    }
  }
  backend "s3" {
    bucket = "harshilvaghela.com"
    key    = "terraform_record.tfstate"
    region = "ap-southeast-2"
  }
  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "ap-southeast-2"
}

resource "aws_instance" "app_server" {
  ami           = "ami-07620139298af599e"
  instance_type = "t2.micro"
  subnet_id     = "subnet-0882c00d94e1af5f7"

  tags = {
    Name = "ExampleAppServerInstance"
  }
}
