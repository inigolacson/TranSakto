import prisma from "@/lib/db";
import { StoreType } from "@prisma/client";
import { Store } from "better-auth";

type StorePayLoad = {
  name: string;
  address?: string;
  number?: string;
  logoUrl?: string;
  tagline?: string;
  regTin?: string;
  permitNumber?: string;
  storeType?: string;
};

function isValidStoreType(value: any): value is StoreType {
  return Object.values(StoreType).includes(value);
}

export async function createStore(data: StorePayLoad, userId: string) {
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
}

export async function updateStore(
  data: StorePayLoad,
  id: string,
  userId: string
) {
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
}

export async function getStore(id: string, userId: string) {
  const store = await prisma.store.findFirst({
    where: { id, userId },
  });

  return store;
}

export async function getStores(userId: string) {
  const stores = await prisma.store.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return stores;
}
