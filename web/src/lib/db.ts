import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Resolve TS issues
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

// Create prisma instance
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
export default prisma;

// Only use singleton in dev
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
