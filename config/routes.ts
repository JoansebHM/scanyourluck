export const ROUTES = {
  public: {
    home: "/",
    scan: {
      root: "/scan",
      byCode: (code: string) => `/scan/${code}`,
    },
  },
  auth: {
    login: "/login",
    register: "/register",
  },
  dashboard: {
    root: "/dashboard/qr",
    messages: "/dashboard/messages",
    qr: "/dashboard/qr",
    profile: "/dashboard/profile",
  },
};
