import { Outlet, useLoaderData } from "react-router";
import { Header } from "~/components/header";
import type { HeaderLayoutProps } from "~/components/header";
import type { LoaderFunctionArgs } from "react-router";
import { fetchUserInfo } from "~/lib/api";

export async function loader({}: LoaderFunctionArgs) {
  
  // APIからユーザー情報を取得
  const userInfo = await fetchUserInfo();
  
  const HeaderLayout: HeaderLayoutProps = {
    title: "タイトル",
    department: userInfo.department,
    section: userInfo.section,
    userName: userInfo.userName,
  };

  return {
    HeaderLayout,
  };
}

export default function Layout() {
  const { HeaderLayout } = useLoaderData<typeof loader>();
  
  return (
    <div>
      <Header title={HeaderLayout.title} department={HeaderLayout.department} section={HeaderLayout.section} userName={HeaderLayout.userName} />
      <Outlet />
    </div>
  );
}
