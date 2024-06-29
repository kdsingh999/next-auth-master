import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient; // This must be a `var` and not a `let / const`
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV == "production") {
  globalThis.prisma = db;
}
