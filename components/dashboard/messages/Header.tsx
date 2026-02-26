import { MessageSquare, Plus } from "lucide-react";

function Header() {
  return (
    <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between w-full">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
          <MessageSquare className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-foreground font-sans">
            Mensajes
          </h1>
          <p className="text-sm text-muted-foreground">
            Administra y gestiona tus mensajes
          </p>
        </div>
      </div>
      <button
        // onClick={handleCreate}
        className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors"
      >
        <Plus className="h-4 w-4" />
        Nuevo mensaje
      </button>
    </section>
  );
}

export default Header;
