"use client";

import { MessageStatusType } from "@/types/messages/messages.type";
import { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextType {
  filter: MessageStatusType;
  setFilter: (filter: MessageStatusType) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter debe usarse dentro de FilterProvider");
  }
  return context;
};

interface FilterProviderProps {
  children: ReactNode;
}

export function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useState<MessageStatusType>("ALL");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
