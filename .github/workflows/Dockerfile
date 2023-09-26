# Install dependencies only when needed
FROM node:18.14-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN \
	if [ -f package-lock.json ]; then npm ci --verbose --force --legacy-peer-deps; \
	elif [ -f yarn.lock ]; then yarn install --verbose --force --legacy-peer-deps; \
	else echo "Lockfile not found." && exit 1; \
	fi

# Rebuild the source code only when needed
FROM node:18.14-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run next
FROM node:18.14-alpine AS runner
WORKDIR /app

# Set the NODE_ENV to production to run next in production mode
ENV NODE_ENV production

# Telemetry is disabled. Uncomment the following line to enable it.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
# Add 'ezport' user(1001) to the 'nodejs' group(1001). This is the user that will run the application.
# We use 'ezport' user to not run the application as root.
RUN adduser --system --uid 1001 ezportfe

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size 
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=ezportfe:nodejs /app/.next/standalone ./
COPY --from=builder --chown=ezportfe:nodejs /app/.next/static ./.next/static

USER ezportfe

EXPOSE 8080

ENV PORT 8080

CMD ["npm", "start"]
