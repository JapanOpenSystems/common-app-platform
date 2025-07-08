import { 
    type RouteConfig, 
    index,
    prefix,
    route,
    layout
} from "@react-router/dev/routes";

export default [
  route("login", "routes/login.tsx"),

  layout("layouts/layout.tsx", [
    index("routes/home.tsx"),
  ]),
] satisfies RouteConfig;