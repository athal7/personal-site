npm run prod && \
aws s3 sync app/assets/images s3://athal7com/images && \
aws s3 sync public s3://athal7com
