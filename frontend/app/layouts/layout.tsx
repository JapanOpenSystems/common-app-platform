import { Outlet } from "react-router";
import { Header } from "~/components/header";
import type { HeaderLayoutProps } from "~/components/header";


const HeaderLayout: HeaderLayoutProps = {
  title: "タイトル",
  department: "組織",
  section: "組織２",
  userName: "苗字　氏名",
};

export default function Layout() {
  return (
    <div>
      <Header title={HeaderLayout.title} department={HeaderLayout.department} section={HeaderLayout.section} userName={HeaderLayout.userName} />
      <Outlet />
    </div>
  );
}
