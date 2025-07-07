import { Outlet } from "react-router";
import { Header } from "~/components/header";
import type { HeaderLayoutProps } from "~/components/header";


const HeaderLayout: HeaderLayoutProps = {
  title: "警務課-人事係",
  department: "地 企",
  section: "情企補",
  userName: "田中　太郎",
};

export default function Layout() {
  return (
    <div>
      <Header title={HeaderLayout.title} department={HeaderLayout.department} section={HeaderLayout.section} userName={HeaderLayout.userName} />
      <Outlet />
    </div>
  );
}
