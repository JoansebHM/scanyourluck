"use client";

import { toastConfig } from "@/config/toast";
import { MessageStatus } from "@/lib/constants/messageStatus";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { useGetMessages } from "@/lib/hooks/useGetMessages";
import { MessageType } from "@/types/messages/messages.type";
import { MoreHorizontal, Eye, Pencil, Trash2 } from "lucide-react";
import { showToast } from "nextjs-toast-notify";
import React, { useState, useRef, useEffect } from "react";

function MessagesTable() {
  const { messages } = useGetMessages();
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdownId(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (messageId: string): void => {
    setOpenDropdownId(openDropdownId === messageId ? null : messageId);
  };

  const handlePreview = (message: MessageType): void => {
    console.log("Preview:", message);
    setOpenDropdownId(null);
    // Tu lógica aquí
  };

  const handleEdit = (message: MessageType): void => {
    console.log("Edit:", message);
    setOpenDropdownId(null);
    // Tu lógica aquí
  };

  const handleDelete = (message: MessageType): void => {
    console.log("Delete:", message);
    setOpenDropdownId(null);
    // Tu lógica aquí
    showToast.success("Mensaje eliminado", toastConfig);
  };

  return (
    <div className="rounded-lg border border-border overflow-visible">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="text-left p-4 text-sm font-medium text-muted-foreground">
              Contenido
            </th>
            <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden md:table-cell">
              Estado
            </th>
            <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden lg:table-cell">
              Fecha
            </th>
            <th className="text-right p-4 text-sm font-medium text-muted-foreground">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {messages?.brand_messages.map((message) => {
            return (
              <tr
                key={message.id}
                className="border-b border-border hover:bg-muted/30 transition-colors"
              >
                <td className="p-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium text-foreground text-sm leading-tight max-w-sm line-clamp-3">
                      {message.message}
                    </span>
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      message.status === MessageStatus.active
                        ? "bg-green-500 text-white"
                        : message.status === MessageStatus.draft
                          ? "bg-yellow-500 text-white"
                          : "bg-gray-500 text-white"
                    }`}
                  >
                    {message.status === MessageStatus.active
                      ? "Activo"
                      : message.status === MessageStatus.draft
                        ? "Borrador"
                        : "Archivado"}
                  </span>
                </td>
                <td className="p-4 hidden lg:table-cell">
                  <span className="text-xs text-muted-foreground">
                    {new Date(message.created_at).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div
                    className="relative inline-block text-left"
                    ref={dropdownRef}
                  >
                    <button
                      onClick={() => toggleDropdown(message.id)}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      type="button"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Abrir menu</span>
                    </button>
                    <div
                      className={`${
                        openDropdownId === message.id ? "block" : "hidden"
                      } absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-popover border border-border z-10`}
                    >
                      <div className="py-1">
                        <button
                          onClick={() => handlePreview(message)}
                          className="w-full text-left px-4 py-2 text-sm text-popover-foreground hover:bg-muted/50 hover:text-foreground flex items-center"
                          type="button"
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          Ver preview
                        </button>
                        <button
                          onClick={() => handleEdit(message)}
                          className="w-full text-left px-4 py-2 text-sm text-popover-foreground hover:bg-muted/50 hover:text-foreground flex items-center"
                          type="button"
                        >
                          <Pencil className="mr-2 h-4 w-4" />
                          Editar
                        </button>
                        <hr className="my-1 border-border" />
                        <button
                          onClick={() => handleDelete(message)}
                          className="w-full text-left px-4 py-2 text-sm text-destructive-foreground hover:bg-destructive/10 hover:text-destructive-foreground flex items-center"
                          type="button"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MessagesTable;
