import { MessageStatus } from "@/lib/constants/messageStatus";
import { array, enum_, object, string } from "valibot";

export const MessageSchema = object({
  id: string(),
  message: string(),
  status: enum_(MessageStatus),
  created_at: string(),
});

export const BrandSchema = object({
  id: string(),
  name: string(),
  logo_url: string(),
  brand_messages: array(MessageSchema),
});
