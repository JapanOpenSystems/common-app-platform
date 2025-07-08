
export interface UserInfo {
  department: string;
  section: string;
  userName: string;
}

// ユーザー情報を取得するAPI関数
export async function fetchUserInfo(): Promise<UserInfo> {
  try {
    // 実際のAPIエンドポイントに置き換えてください
    const response = await fetch('/api/user/info');
    const data = await response.json();
    return {
      department: data.department,
      section: data.section,
      userName: data.userName,
    };
  } catch (error) {
    console.error('Error :', error);
    // エラー時のフォールバック値
    return {
      department: "組織",
      section: "組織２",
      userName: "苗字　氏名",
    };
  }
} 