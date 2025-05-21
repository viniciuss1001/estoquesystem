# 📦 Sistema de Gerenciamento de Estoque

Este é um sistema completo de gerenciamento de estoque, desenvolvido com **Next.js**, **Prisma**, **PostgreSQL**, **React Query**, **TailwindCSS**, **shadcn/ui** e **NextAuth**. Ele permite o controle de produtos, movimentações de estoque, usuários e dashboards com gráficos históricos.

---

## ✨ Funcionalidades

- Autenticação com JWT via NextAuth
- Gerenciamento de usuários (admin e gestor)
- Cadastro, edição e remoção de produtos
- Movimentações de estoque (entrada, saída, transferência)
- Histórico de movimentações
- Dashboards com indicadores e gráficos interativos
- Interface moderna e responsiva com shadcn/ui

---

## 🧰 Tecnologias Utilizadas

- **Next.js 14 (App Router)**
- **TypeScript**
- **TailwindCSS + shadcn/ui**
- **Prisma ORM**
- **PostgreSQL**
- **NextAuth**
- **Zod + React Hook Form**
- **Axios + React Query**
- **Recharts (gráficos)**

---

## 🚀 Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/viniciuss1001/estoquesys.git
cd nome-do-repo
```
 2. **Instale as Dependências**
  ``` bash
  pnpm install
  ```

3. **Configure o banco de Dados**
```.env 
DATABASE_URL="postgresql://user:password@localhost:5432/estoque"
NEXTAUTH_SECRET="sua-chave-secreta"
NEXTAUTH_URL="http://localhost:3000"
```

4. **Execute as Migrations**
```bash
pnpm prisma migrate dev
```

## Dashboard
**O dashboard exibe:**

- Total de produtos
- Total de movimentações
- Produtos com baixo estoque
- Entregas próximas
- Gráficos históricos (movimentações e produtos por mês)