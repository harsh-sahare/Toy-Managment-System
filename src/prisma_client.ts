import { PrismaClient } from "@prisma/client";

const prisma_client = new PrismaClient(); // So that only one request is send by one user

export default prisma_client;
