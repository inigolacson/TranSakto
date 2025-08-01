import { NextRequest } from "next/server";
import { storeController } from "@/controller/storeController";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  return storeController.getStore(req, context.params.id);
}

export async function PUT(
  req: NextRequest,
  context: { params: { id: string } }
) {
  return storeController.updateStore(req, context.params.id);
}

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  return storeController.deleteStore(req, context.params.id);
}
