FROM node:lts as dependencies
WORKDIR /graves
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /graves
COPY . .
COPY --from=dependencies /graves/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /graves
ENV NODE_ENV production

COPY --from=builder /graves/public ./public
COPY --from=builder /graves/package.json ./package.json
COPY --from=builder /graves/.next ./.next
COPY --from=builder /graves/node_modules ./node_modules

# Next 3 copies for dev start
COPY --from=builder /graves/next.config.js ./next.config.js
COPY --from=builder /graves/pages ./pages
COPY --from=builder /graves/styles ./styles

EXPOSE 3000
CMD ["yarn", "start"]