# Etapa 1: Dependências
FROM node:20-alpine AS deps
WORKDIR /app

# Instala pnpm
RUN npm install -g pnpm

# Copia arquivos de dependências
COPY package.json pnpm-lock.yaml* ./

# Instala dependências (produção e dev, necessárias pro build)
RUN pnpm install --frozen-lockfile

# Etapa 2: Build
FROM node:20-alpine AS builder
WORKDIR /app

RUN npm install -g pnpm

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Gera cliente Prisma
RUN npx prisma generate

# Build da aplicação
RUN pnpm run build

# Etapa 3: Runtime
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN npm install -g pnpm

# Copia apenas o necessário
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

# Roda migrations e inicia o Next.js
CMD sh -c "npx prisma migrate deploy && pnpm start"
