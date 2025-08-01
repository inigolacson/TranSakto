import { NextRequest, NextResponse } from "next/server";
import { getUserId } from "@/lib/auth";
import { storeController } from "@/controller/storeController";

//Create Store
export async function POST(req: NextRequest) {
  return storeController.create(req);
}

//Update Store
export async function PATCH(req: NextRequest) {
  return storeController.update(req);
}

//Get Store
export async function GET(req: NextRequest) {
  return storeController.getStores(req);
}
