"use client";

import { useEffect, useState } from "react";
import { getCurrentUser } from "@/lib/api/user";

export function useCurrentUser() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .finally(() => setLoading(false));
  }, []);

  return { user, loading };
}
