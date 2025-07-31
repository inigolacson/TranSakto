import prisma from "@/lib/db";
import { StoreType } from "@prisma/client";

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
