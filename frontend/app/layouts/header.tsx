import * as React from "react";
import { Link, Outlet } from "react-router";

interface HeaderLayoutProps {
  title?: string;
  department?: string;
  section?: string;
  userName?: string;
}

export default function HeaderLayout({ title = "", department = "", section = "", userName = "" }: HeaderLayoutProps) {
  return (
    <div>
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* タイトル */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold text-gray-900">
                  {title}
                </span>
              </Link>
            </div>

            {/* ユーザー情報 */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-6 text-sm">
                <span className="text-gray-600 font-medium">操作者</span>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">
                    所属：<span className="text-gray-800 font-semibold">{department}</span>
                  </span>
                  <span className="text-gray-600">
                    課・係：<span className="text-gray-800 font-semibold">{section}</span>
                  </span>
                  <span className="text-gray-600">
                    氏名：<span className="text-gray-800 font-semibold">{userName}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
