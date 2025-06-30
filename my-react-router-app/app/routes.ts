import { 
    type RouteConfig, 
    index,
    prefix,
    route
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  ...prefix("home",[
    route("dashbord", "routes/dashbord.tsx")
  ])
] satisfies RouteConfig;