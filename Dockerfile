# Etapa 1: Dependências
FROM node:20-alpine AS deps
WORKDIR /app

# Copia package.json e lock
COPY package*.json ./

# Instala dependências de produção e dev (necessário pro build do Next)
RUN npm install

# Etapa 2: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Copia node_modules e arquivos da aplicação
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Gera cliente Prisma
RUN npx prisma generate

# Faz o build do Next
RUN npm run build

# Etapa 3: Runtime
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copia apenas o necessário pro runtime
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]
