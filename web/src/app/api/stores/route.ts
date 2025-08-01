import { NextRequest, NextResponse } from "next/server";
import { getUserId } from "@/lib/auth";
import { createStore, getStores } from "@/controller/shopController";

export async function POST(req: NextRequest) {
  try {
    const userId = await getUserId(req);
    const body = await req.json();
    if (!body.name) {
      return NextResponse.json(
        { error: "Missing Required Fields: name" },
        { status: 400 }
      );
    }
    const newStore = await createStore(body, userId);

    return NextResponse.json(newStore, { status: 201 });
  } catch (error) {
    console.error("Store Creation Failed:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const userId = await getUserId(req);
    const stores = await getStores(userId);
    return NextResponse.json(stores, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch stores:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
