import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { auth, getUserId } from "@/lib/auth";
import { getStore, deleteStore } from "@/controller/shopController";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = await getUserId(req);
    const storeId = params.id;

    const store = await getStore(storeId, userId);

    if (!store) {
      return NextResponse.json({ error: "Store not found" }, { status: 404 });
    }

    return NextResponse.json(store, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch store", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = await getUserId(req);
    const { id } = params;

    const deleted = await deleteStore(id, userId);
    return NextResponse.json(deleted, { status: 200 });
  } catch (error) {
    console.error("Failed to delete store:", error);
    return NextResponse.json(
      { error: "Failed to delete store" },
      { status: 500 }
    );
  }
}
