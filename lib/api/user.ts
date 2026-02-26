import { client } from "../supabase/client";

export async function getCurrentUser() {
  try {
    const { data, error } = await client.auth.getUser();
    if (error) {
      throw error;
    }
    return data.user;
  } catch {
    return null;
  }
}
