import * as React from "react";
import { Link } from "react-router";
import { Button } from "./design";

interface MenuListProps {
    items: MenuItem[];
    columns?: number;
    className?: string;
}

interface MenuItem {
  id: string;
  to: string;
  label: string;
}

export const MenuList = React.memo<MenuListProps>(({ 
  items, 
  columns = 2, 
}) => {
  return (
    <div className={`grid grid-cols-${columns} gap-x-4 gap-y-2 w-full`}>
      {items.map((item) => (
        <Button key={item.id} variant='outline' size='md'>
          <Link to={item.to}>{item.label}</Link>
        </Button>
      ))}
    </div>
  );
});

MenuList.displayName = "MenuList";
