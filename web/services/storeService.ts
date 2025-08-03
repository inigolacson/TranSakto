import { StoreType } from "@prisma/client";
import prisma from "@/lib/db";
import type { StorePayLoad } from "@/types/stores.ts";

function isValidStoreType(value: any): value is StoreType {
  return Object.values(StoreType).includes(value);
}

export const storeService = {
  async createStore(data: StorePayLoad, userId: string) {
    const {
      name,
      address,
      number,
      logoUrl,
      tagline,
      regTin,
      permitNumber,
      storeType,
    } = data;

    const storeTypeEnum = isValidStoreType(storeType) ? storeType : undefined;

    return await prisma.store.create({
      data: {
        name,
        userId,
        address,
        number,
        logoUrl,
        tagline,
        regTin,
        permitNumber,
        storeType: storeTypeEnum,
      },
    });
  },
  async updateStore(data: StorePayLoad, id: string, userId: string) {
    const existingStore = await prisma.store.findFirst({
      where: { id, userId },
    });

    const { storeType, ...rest } = data;

    return await prisma.store.update({
      where: { id },
      data: {
        ...rest,
        storeType: isValidStoreType(storeType) ? storeType : undefined,
      },
    });
  },

  async getStore(id: string, userId: string) {
    const store = await prisma.store.findFirst({
      where: { id, userId },
    });

    return store;
  },

  async getStores(userId: string) {
    const stores = await prisma.store.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
    return stores;
  },

  async deleteStore(id: string, userId: string) {
    const store = await prisma.store.findFirst({
      where: { id, userId },
    });

    if (!store) {
      throw new Error("Store not found or unauthorized");
    }

    const deletedStore = await prisma.store.delete({
      where: { id },
    });

    return deletedStore;
  },
};
