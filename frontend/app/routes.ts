import { 
    type RouteConfig, 
    index,
    prefix,
    route,
    layout
} from "@react-router/dev/routes";
import { Layout } from "./root";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  route("dashbord", "routes/dashbord.tsx"),
] satisfies RouteConfig;