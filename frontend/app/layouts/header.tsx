import * as React from "react";
import { Link } from "react-router";
import { Button } from "../components/design";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Separator } from "../components/ui/separator";

interface HeaderProps {
  className?: string;
}

export const Header = React.memo<HeaderProps>(({ className = "" }) => {

  return (
    <header className={`bg-white border-b border-gray-200 shadow-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* タイトル */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">警務課-人事係</span>
            </Link>
          </div>

          {/* ユーザー情報 */}
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold text-gray-900">操作者</span>
            <span className="text-xl font-bold text-gray-900">所属：人事</span>
            <span className="text-xl font-bold text-gray-900">課・係：情企補</span>
            <span className="text-xl font-bold text-gray-900">指名：山田太郎</span>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";
