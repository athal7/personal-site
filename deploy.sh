npm run prod && \
aws s3 --profile home sync app/assets/images s3://www.athal7.com/images && \
aws s3 --profile home sync public s3://www.athal7.com
