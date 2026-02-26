import CountCard from "@/components/dashboard/messages/CountCard";
import Filters from "@/components/dashboard/messages/Filters";
import Header from "@/components/dashboard/messages/Header";
import MessagesTable from "@/components/dashboard/messages/MessagesTable";
import { FilterProvider } from "@/context/MessageCountFilter";

function page() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-7">
      <FilterProvider>
        <Header />
        <CountCard />
        <Filters />
        <MessagesTable />
      </FilterProvider>
    </section>
  );
}

export default page;
