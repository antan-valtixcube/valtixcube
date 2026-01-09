# ----------------------------
# 1️⃣ Builder Stage
# ----------------------------
FROM node:20-alpine AS builder

WORKDIR /usr/src/valtixcube

# Copy dependency files first
COPY package.json package-lock.json ./

# Install dependencies (deterministic)
RUN npm ci

# Copy source code
COPY . .

# Build Next.js app
RUN npm run build


# ----------------------------
# 2️⃣ Runner Stage
# ----------------------------
FROM node:20-alpine AS runner

WORKDIR /usr/src/valtixcube

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy only required runtime files
COPY --from=builder /usr/src/valtixcube/package.json ./
COPY --from=builder /usr/src/valtixcube/package-lock.json ./
COPY --from=builder /usr/src/valtixcube/node_modules ./node_modules
COPY --from=builder /usr/src/valtixcube/.next ./.next
COPY --from=builder /usr/src/valtixcube/public ./public
COPY --from=builder /usr/src/valtixcube/next.config.ts ./next.config.ts

# Expose Next.js port
EXPOSE 3000

# Start Next.js
CMD ["npm", "run", "start"]
