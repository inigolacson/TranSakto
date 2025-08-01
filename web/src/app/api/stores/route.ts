import { NextRequest } from "next/server";
import { storeController } from "@/controller/storeController";

//Create Store
export async function POST(req: NextRequest) {
  return storeController.createStore(req);
}

//Get Store
export async function GET(req: NextRequest) {
  return storeController.getStores(req);
}
