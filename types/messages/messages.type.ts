import { MessageSchema } from "@/schemas/brands/brand.schema";
import { InferInput } from "valibot";
import { MessageStatus } from "@/lib/constants/messageStatus";

export type MessageType = InferInput<typeof MessageSchema>;

export type MessageStatusType = typeof MessageStatus[keyof typeof MessageStatus] | "ALL";

export interface CardData {
  color: string;
  border: string;
  title: string;
  count: number;
  status: MessageStatusType | "ALL";
}
