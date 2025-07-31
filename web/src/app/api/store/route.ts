import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { auth, getUserId } from "@/lib/auth";
import { createStore } from "@/controller/shopController";

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
