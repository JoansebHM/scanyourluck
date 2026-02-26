function DashboardNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-semibold">404</h1>
      <p className="mt-2 text-muted-foreground">
        Esta página no existe en el dashboard
      </p>
    </div>
  );
}

export default DashboardNotFound;
