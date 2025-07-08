import type { Route } from "./+types/home";
import { MenuList } from "~/components/menu";
import { Subtitle } from "~/components/subtitle";
import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "home" },
   ];
}

export async function loader({}: LoaderFunctionArgs) {
  // メニューアイテム
  const menuListItems = [
    { id: "data-registration", to: "/", label: "メニュー1" },
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
  };

  return {
    menuListItems,
    subtitleData,
  };
}

export default function Home() {
  const { menuListItems, subtitleData } = useLoaderData<typeof loader>();
  
  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <Subtitle subTitle={subtitleData.title} />
      <MenuList items={menuListItems} columns={2} />
    </div> 
  );
}
