import { NextRequest } from "next/server";
import { storeController } from "@/controller/storeController";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  return storeController.getStore(req, params.id);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  return storeController.updateStore(req, params.id);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  return storeController.deleteStore(req, params.id);
}
