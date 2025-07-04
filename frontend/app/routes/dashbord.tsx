import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { Separator } from "~/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { NavigationMenuList } from "~/components/ui/navigation-menu";
import { Button } from "~/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  BellIcon,
  BarChart3,
  Calendar,
  DollarSign,
  FolderOpen,
  Home,
  LogOutIcon,
  MessageCircleIcon,
  Settings,
  Users,
  UserIcon,
} from "lucide-react";

// ナビゲーションメニューのデータ
const menus = [
  {
    name: "Products Div.",
    to: "/products",
    items: [
      {
        name: "Categories",
        description: "See categories",
        to: "/products/categories",
      },
      {
        name: "Search",
        description: "Search for a product",
        to: "/products/search",
      },
      {
        name: "Assignments",
        description: "assign tasks to your team",
        to: "/products/assignments",
      },
    ],
  },
];

// サイドバーメニューのデータ
const sidebarMenus = [
  {
    name: "Dashboard",
    to: "/home/dashbord",
    icon: Home,
  },
  {
    name: "Projects",
    to: "/projects",
    icon: FolderOpen,
  },
  {
    name: "Tasks",
    to: "/tasks",
    icon: Calendar,
  },
  {
    name: "Team",
    to: "/team",
    icon: Users,
  },
  {
    name: "Analytics",
    to: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    to: "/settings",
    icon: Settings,
  },
];

export default function  Dashbord({
  isLogin,
  hasNotification,
  hasMessage,
}: {
  isLogin: boolean;
  hasNotification: boolean;
  hasMessage: boolean;
}) {
  return (
    <div>
      <div className="min-h-screen bg-background">
        <Header isLogin={isLogin} hasNotification={hasNotification} hasMessage={hasMessage} />
        
        <div className="flex pt-16">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Main Dashboard Content */}
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
            {/* Dashboard Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back! Here's what's happening with your projects today.
              </p>
            </div>

            {/* Dashboard Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Stats Cards */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="tracking-tight text-sm font-medium">Total Revenue</h3>
                  <svg
                    className=" h-4 w-4 text-muted-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div className="p-6 pt-0">
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="tracking-tight text-sm font-medium">Tasks</h3>
                  <svg
                    className=" h-4 w-4 text-muted-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <div className="p-6 pt-0">
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="tracking-tight text-sm font-medium">Sales</h3>
                  <svg
                    className=" h-4 w-4 text-muted-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </div>
                <div className="p-6 pt-0">
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="tracking-tight text-sm font-medium">Active Now</h3>
                  <svg
                    className=" h-4 w-4 text-muted-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="p-6 pt-0">
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 mt-6">
              <div className="col-span-4">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold leading-none tracking-tight">Recent Activity</h3>
                    <p className="text-sm text-muted-foreground">
                      You have 3 new notifications today.
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src="/avatars/01.png" alt="Avatar" />
                          <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Olivia Martin</p>
                          <p className="text-sm text-muted-foreground">
                            Sent you a message
                          </p>
                        </div>
                        <div className="ml-auto font-medium">+$1,999.00</div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src="/avatars/02.png" alt="Avatar" />
                          <AvatarFallback>JL</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Jackson Lee</p>
                          <p className="text-sm text-muted-foreground">
                            Sent you a message
                          </p>
                        </div>
                        <div className="ml-auto font-medium">+$39.00</div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src="/avatars/03.png" alt="Avatar" />
                          <AvatarFallback>IN</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
                          <p className="text-sm text-muted-foreground">
                            Sent you a message
                          </p>
                        </div>
                        <div className="ml-auto font-medium">+$299.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="col-span-3">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold leading-none tracking-tight">Quick Actions</h3>
                    <p className="text-sm text-muted-foreground">
                      Common tasks and shortcuts
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="space-y-4">
                      <button className="w-full flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90">
                        Create New Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export function  Footer() {
  return (
    <footer className="flex px-10 h-17 items-center justify-between backdrop-blur fixed bottom-0 left-0 right-0 z-10 bg-green-700/30">
      <div className="flex items-center space-x-6">
        <Link 
          to="/" 
          className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 group"
        >
          <span className="tracking-tighter text-lg font-bold group-hover:text-white/90">
            Home
          </span>
        </Link>
        <div className="h-6 w-px bg-white/30"></div>
        <Link 
          to="/about" 
          className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-white/80 hover:text-white"
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-white/80 hover:text-white"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
}

export function  Header({
  isLogin,
  hasNotification,
  hasMessage,
}: {
  isLogin: boolean;
  hasNotification: boolean;
  hasMessage: boolean;
}) {
  return (
    <nav className="flex px-10 h-17 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-10 bg-green-700/30">
      <div className="flex items-center">
        <Link to="/" className="tracking-tighter text-lg font-bold">
          Home
        </Link>
        <Separator orientation="vertical" className="h-7 mx-3 bg-white" />
        {/* ナビゲーションメニュー */}  
        <NavigationMenu>
          {/* ナビゲーションメニューのリスト */}
          <NavigationMenuList>
            {menus.map((menu) => (
              // ナビゲーションメニューのアイテム 
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    <Link to={menu.to} prefetch="intent">
                      <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] font-bold gap-2 p-4 grid-cols-2">
                        {menu.items?.map((item) => (
                          <NavigationMenuItem
                            key={item.name}
                            className={cn([
                              "select-none rounded-md",
                              item.to === "/products/categories" &&
                                "bg-accent"
                            ])}
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                className="p-3 block no-underline outline-none leading-none"
                                to={item.to}
                              >
                                <span className="text-sm font-bold">
                                  {item.name}
                                </span>
                                <p className="text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* ログインしている場合 */}
      {isLogin ? (
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link to="/private/notifications">
              <BellIcon className="w-4 h-4 " />
              {hasNotification && (
                <div className="absolute right-0 top-0 w-2 h-2 bg-red-300 rounded-full" />
              )}
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link to="/private/messages">
              <MessageCircleIcon className="w-4 h-4 relative" />
              {hasMessage && (
                <div className="absolute right-0 top-0 bg-red-300 w-2 h-2 rounded-full" />
              )}
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-55">
              <DropdownMenuLabel className="flex flex-col gap-1">
                <span className="text-sm font-bold">shadcn kun</span>
                <span className="text-xs text-muted-foreground">
                  shadcn@gmail.com
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link to="/private/profile">
                  <UserIcon className="w-4 h-4 mr-2" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link to="/authentication/logout">
                  <LogOutIcon className="w-4 h-4 mr-2" />
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        // ログインしていない場合
        <div className="flex items-center gap-3">
          <Button asChild variant="outline">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Signup</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}

// サイドバーコンポーネント
export function Sidebar() {
  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen">
      <div className="p-6">
        <div className="space-y-2">
          {sidebarMenus.map((menu) => {
            const IconComponent = menu.icon;
            return (
              <Link
                key={menu.name}
                to={menu.to}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  menu.to === "/home/dashbord" 
                    ? "bg-accent text-accent-foreground" 
                    : "text-muted-foreground"
                )}
              >
                <IconComponent className="h-4 w-4" />
                <span>{menu.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}