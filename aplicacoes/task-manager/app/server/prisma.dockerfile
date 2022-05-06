FROM node:12-alpine

WORKDIR /app

COPY package.json .
COPY prisma/ .
COPY .env .
COPY src/entities/schema.prisma ./src/entities/schema.prisma


RUN yarn
CMD echo "yes" > yarn prisma migrate dev  --schema src/entities/schema.prisma -n dockerfile-setup
# CMD tail -f /dev/null