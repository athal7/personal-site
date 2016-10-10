npm run prod && \
aws s3 --profile home sync app/assets/images s3://athal7com/images && \
aws s3 --profile home sync public s3://athal7com
