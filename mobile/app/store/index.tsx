import React, { useEffect } from "react";
import { router } from "expo-router";

export default function StoreRedirection() {
  useEffect(() => {
    router.replace("/store/code-login" as any);
  }, []);

  return null;
}
