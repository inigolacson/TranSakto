import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { auth } from "@/lib/auth";
import { createStore } from "@/controller/shopController";

export async function POST(req: NextRequest) {
  try {
    const sessionData = await auth.api.getSession(req);

    if (!sessionData || !sessionData.session.userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = sessionData.session.userId;

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
