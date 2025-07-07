import { 
    type RouteConfig, 
    index,
    prefix,
    route,
    layout
} from "@react-router/dev/routes";

export default [
  route("login", "routes/login.tsx"),

  layout("layouts/header.tsx", [
    index("routes/home.tsx"),
    route("dashbord", "routes/dashbord.tsx"),
  ]),
] satisfies RouteConfig;