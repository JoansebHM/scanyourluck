"use client";

import { useEffect, useState } from "react";
import { getMessagesByBrandId } from "../api/messages";
import { BrandType } from "@/types/brands/brand.type";
import { useCurrentUser } from "./useCurrentUser";

export function useGetMessages() {
  const { user, loading } = useCurrentUser();
  const [messages, setMessages] = useState<BrandType | null>(null);

  useEffect(() => {
    getMessagesByBrandId(user?.id || "").then(setMessages);
  }, [user?.id]);

  return { messages, loading };
}
