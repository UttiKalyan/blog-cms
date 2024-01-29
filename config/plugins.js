module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          s3Options: {
            accessKeyId: env('AKIAX26QFU6AQNIMPAKJ'),
            secretAccessKey: env('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'),
            region: env('ap-south-1'),
            params: {
              Bucket: env('strapi-cms'),
            },
          }
        },
        // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
        actionOptions: {
          upload: {
            ACL: null
          },
          uploadStream: {
            ACL: null
          },
        }
      },
    }
  });