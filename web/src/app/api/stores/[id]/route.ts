import { NextRequest } from "next/server";
import { storeController } from "@/controller/storeController";

interface RouteContext {
  params: {
    id: string;
  };
}

export async function GET(req: NextRequest, context: RouteContext) {
  return storeController.getStore(req, context.params.id);
}

export async function PUT(req: NextRequest, context: RouteContext) {
  return storeController.updateStore(req, context.params.id);
}

export async function DELETE(req: NextRequest, context: RouteContext) {
  return storeController.deleteStore(req, context.params.id);
}
