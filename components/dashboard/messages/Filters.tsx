"use client";

import { useFilter } from "@/context/MessageCountFilter";
import { Search } from "lucide-react";

function Filters() {
  const { filter, setFilter } = useFilter();

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          placeholder="Buscar mensajes..."
          //   value={search}
          //   onChange={(e) => setSearch(e.target.value)}
          className="pl-9 py-2 rounded-md bg-card border-border text-foreground placeholder:text-muted-foreground w-full border"
        />
      </div>
      {/* <select className="w-full sm:w-44 bg-card border border-border text-foreground px-3 py-2 rounded-md">
        <option value="all">Todos los tipos</option>
        <option value="notification">Notificacion</option>
        <option value="alert">Alerta</option>
        <option value="promotion">Promocion</option>
        <option value="update">Actualizacion</option>
        <option value="reminder">Recordatorio</option>
      </select> */}
    </div>
  );
}

export default Filters;
