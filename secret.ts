import * as AWS from 'aws-sdk';

// Set your AWS credentials
const awsConfig: AWS.Config = {
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'YOUR_AWS_REGION', // Specify the AWS region you're working in
};

// Create an S3 client with your AWS credentials
const s3 = new AWS.S3(awsConfig);

// Example: List all S3 buckets
s3.listBuckets((err, data) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('S3 Buckets:', data.Buckets);
  }
});