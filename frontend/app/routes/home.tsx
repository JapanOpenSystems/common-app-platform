import type { Route } from "./+types/home";
import { MenuList } from "~/components/menu";
import { Subtitle } from "~/components/subtitle";

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
    { id: "", to: "", label: "", is_hidden: true},
    { id: "batch-update", to: "/", label: "一括更新" },
    { id: "exit", to: "/", label: "終了" },
  ];

// サブタイトル
const subtitleData = {
  title: "総合職員情報管理業務選択",
}

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <Subtitle subTitle={subtitleData.title} />
      <MenuList items={menuListItems} columns={2} />
    </div> 
  );
}
