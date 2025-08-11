import { PrismaClient, Prisma } from "@/generated/prisma"
import Decimal from "decimal.js"


const prisma = new PrismaClient();

(Prisma.Decimal.prototype.toJSON as any) = function (this: Prisma.Decimal) {
	return parseFloat(this.toString())
}

export default prisma