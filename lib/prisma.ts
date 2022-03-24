//Instantiating Prisma Clinet within nextJS

import { PrismaClient } from "@prisma/client";

declare global {
  // Global Declarations of Prisma Client
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
