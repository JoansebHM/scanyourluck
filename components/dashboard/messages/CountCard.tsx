"use client";

import { toastConfig } from "@/config/toast";
import { useFilter } from "@/context/MessageCountFilter";
import { MessageStatus } from "@/lib/constants/messageStatus";
import { useGetMessages } from "@/lib/hooks/useGetMessages";
import { CardData } from "@/types/messages/messages.type";
import { showToast } from "nextjs-toast-notify";

function CountCard() {
  const { messages } = useGetMessages();

  const { filter, setFilter } = useFilter();

  const CARDS: CardData[] = [
    {
      color: "text-green-400",
      border: "border-green-200/50",
      title: "Total de mensajes",
      count: messages?.brand_messages.length || 0,
      status: "ALL" as const,
    },
    {
      color: "text-green-300",
      border: "border-green-200/50",
      title: "Activos",
      count:
        messages?.brand_messages.filter(
          (m) => m.status === MessageStatus.active,
        ).length || 0,
      status: MessageStatus.active,
    },

    {
      color: "text-pink-400",
      border: "border-pink-200/50",
      title: "Borradores",
      count:
        messages?.brand_messages.filter((m) => m.status === MessageStatus.draft)
          .length || 0,
      status: MessageStatus.draft,
    },
    {
      color: "text-red-400",
      border: "border-red-200/50",
      title: "Archivados",
      count:
        messages?.brand_messages.filter(
          (m) => m.status === MessageStatus.deleted,
        ).length || 0,
      status: MessageStatus.deleted,
    },
  ];

  return (
    <section className="flex flex-wrap gap-4">
      {CARDS.map((card, index) => (
        <div
          key={index}
          className={`cursor-pointer flex-1 border min-w-40 rounded-lg p-4 bg-secondary/20 text-white ${filter === card.status ? card.border : ""}`}
          onClick={() => {
            setFilter(card.status);
            showToast.success(`Filtrando por: ${card.title}`, toastConfig);
          }}
        >
          <h3 className="text-sm font-medium">{card.title}</h3>
          <p className={`text-2xl font-bold ${card.color}`}>{card.count}</p>
        </div>
      ))}
    </section>
  );
}

export default CountCard;
