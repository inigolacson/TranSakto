import { getUserId } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { storeService } from "services/storeService";

export const storeController = {
  async createStore(req: NextRequest) {
    try {
      const userId = await getUserId(req);
      const body = await req.json();
      if (!body.name) {
        return NextResponse.json(
          { error: "Missing Required Fields: name" },
          { status: 400 }
        );
      }
      const newStore = await storeService.createStore(body, userId);

      return NextResponse.json(newStore, { status: 201 });
    } catch (error) {
      console.error("Store Creation Failed:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  },

  async updateStore(req: NextRequest, id: string) {
    try {
      const userId = await getUserId(req);
      if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const data = await req.json();

      const updated = await storeService.updateStore(data, id, userId);
      return NextResponse.json(updated);
    } catch (err: any) {
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  },

  async getStore(req: NextRequest, id: string) {
    try {
      const userId = await getUserId(req);
      const store = await storeService.getStore(id, userId);

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
  },

  async getStores(req: NextRequest) {
    try {
      const userId = await getUserId(req);
      const stores = await storeService.getStores(userId);
      return NextResponse.json(stores, { status: 200 });
    } catch (error) {
      console.error("Failed to fetch stores:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  },

  async deleteStore(req: NextRequest, id: string) {
    try {
      const userId = await getUserId(req);
      const deleted = await storeService.deleteStore(id, userId);

      return NextResponse.json(deleted, { status: 200 });
    } catch (error) {
      console.error("Failed to delete store:", error);
      return NextResponse.json(
        { error: "Failed to delete store" },
        { status: 500 }
      );
    }
  },
};
