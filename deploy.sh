npm run prod && \
aws s3 sync app/assets/images s3://www.athal7.com/images && \
aws s3 sync public s3://www.athal7.com
