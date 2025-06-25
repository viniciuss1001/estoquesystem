import { PrismaClient, Prisma } from "@/generated/prisma"
import Decimal from "decimal.js"


const prisma = new PrismaClient();

(Decimal.prototype.toJSON as any) = function () {
	return parseFloat(this.toString())
}

export default prisma