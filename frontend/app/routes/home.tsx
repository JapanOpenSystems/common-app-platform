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
    { id: "data-registration", to: "/", label: "メニュー１" },
    { id: "profile-update", to: "/", label: "メニュー２" },
    { id: "data-search", to: "/", label: "メニュー３" },
    { id: "code-management", to: "/", label: "メニュー４" },
    { id: "report-output", to: "/", label: "メニュー５" },
    { id: "", to: "", label: "", is_hidden: true},
    { id: "batch-update", to: "/", label: "メニュー６" },
    { id: "exit", to: "/", label: "メニュー７" },
  ];

// サブタイトル
const subtitleData = {
  title: "サブタイトル",
}

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <Subtitle subTitle={subtitleData.title} />
      <MenuList items={menuListItems} columns={2} />
    </div> 
  );
}
