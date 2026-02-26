import { client } from "../supabase/client";

export function logout() {
  client.auth.signOut();
  window.location.href = "/";
}
