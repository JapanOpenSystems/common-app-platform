import type { Route } from "./+types/home";
import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "~/components/ui/navigation-menu"
import { cn } from "~/lib/utils";

type Item = {
  to: string;
  name: string;
  description: string;
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ダッシュボード" },
    { name: "description", content: "ダッシュボードです" },
  ];
}

export default function Dashbord() {
  const item = { to: "/", name: "Home", description: "説明" };
    return (
<NavigationMenu
 className={"bg-background"}
>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Home</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>
          <Link to={item.to}>{item.name}</Link>
        </NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
  );
}
