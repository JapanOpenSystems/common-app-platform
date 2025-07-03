import type { Route } from "./+types/home";
import { MenuList } from "~/components/menu";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "home" },
   ];
}

  // メニューアイテム
  const menuListItems = [
    { id: "data-registration", to: "/", label: "データ・登録紹介" },
    { id: "profile-update", to: "/", label: "各所属身上移動更新" },
    { id: "data-search", to: "/", label: "データ検索" },
    { id: "code-management", to: "/", label: "コード管理" },
    { id: "report-output", to: "/", label: "帳票出力" },
    { id: "hidden-by-permission", to: "/", label: "権限で見えないもの" },
    { id: "batch-update", to: "/", label: "一括更新" },
    { id: "exit", to: "/", label: "終了" },
  ];

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto p-6">      
      {/* デジタル庁プラグインのテスト */}
      <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded">
        <h2 className="text-lg font-bold mb-2">デジタル庁プラグイン テスト</h2>
        <p className="text-16B-100">このテキストは text-16B-100 クラスを使用</p>
        <p className="bg-solid-gray-300 p-2 mt-2">この背景は bg-solid-gray-300 クラスを使用</p>
        <p className="text-solid-gray-900 mt-2">このテキストは text-solid-gray-900 クラスを使用</p>
      </div>
      
      <MenuList items={menuListItems} columns={2} />
    </div>
  );
}
