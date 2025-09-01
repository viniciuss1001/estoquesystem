# ===== STAGE 1: Build =====
FROM node:20-alpine AS builder

WORKDIR /app

# Copia package.json e pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Instala pnpm e dependências
RUN npm install -g pnpm
RUN pnpm install

# Copia todo o código
COPY . .

# Build do Next.js standalone
RUN pnpm build

# ===== STAGE 2: Production =====
FROM node:20-alpine

WORKDIR /app

# Instala dependências de runtime necessárias + SQLite
RUN apk add --no-cache libc6-compat bash sqlite sqlite-dev

# Cria pasta para SQLite
RUN mkdir -p /app/data
RUN chmod -R 777 /app/data

# Copia build standalone e dependências do builder
COPY --from=builder /app/web-dist/standalone ./
COPY --from=builder /app/web-dist/static ./.next/static
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Variável de ambiente do Prisma (SQLite)
ENV DATABASE_URL="file:/app/data/dev.db"

# Expõe porta do Next.js
EXPOSE 3000

# Comando para rodar o servidor standalone
CMD ["node", "server.js"]
