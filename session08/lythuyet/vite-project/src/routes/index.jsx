import { createBrowserRouter } from "react-router-dom";
import userRouters from "./user.routes";
import adminRouters from "./admin.routes";
import NotFound from "../pages/NotFound";

const mergeRoutes = [
  ...userRouters,
  ...adminRouters,
  {
    path: "*",
    element: <NotFound />,
  },
];
const routers = createBrowserRouter(mergeRoutes);

export default routers;
