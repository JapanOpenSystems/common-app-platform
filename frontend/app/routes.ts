import { 
    type RouteConfig, 
    index,
    prefix,
    route,
    layout
} from "@react-router/dev/routes";
import { Layout } from "./root";

export default [
  layout("layouts/header.tsx", [
    index("routes/home.tsx"),
    route("login", "routes/login.tsx"),
    route("dashbord", "routes/dashbord.tsx"),
  ]),
] satisfies RouteConfig;