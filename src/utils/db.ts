

// this code  are true and good  but  not  handle  the fast refresh/hot-reloading

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default prisma



//  so we will use this from prisma orm and copy it from docs not type  it  to  handle fast refresh/hot-reloading

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma =
    globalForPrisma.prisma || new PrismaClient();

export default prisma
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;