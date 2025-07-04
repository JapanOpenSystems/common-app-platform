import React, { useState } from "react";

const mockUsers = [
  { email: "user1@example.com", password: "password123" },
  { email: "user2@example.com", password: "pass456" },
];

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // JSONユーザ情報と照合
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      console.log("ログイン成功", user);
      // ここにログイン成功後の処理（画面遷移など）を書く
    } else {
      setError("メールアドレスまたはパスワードが正しくありません。");
    }
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-100">
        <h2 className="text-2xl font-bold text-green-800">
          ログイン成功！ようこそ、{email}さん
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">ログイン</h2>
        {error && (
          <div className="mb-4 text-red-600 text-center font-semibold">{error}</div>
        )}
        <label className="block mb-4">
          <span className="text-gray-700">メールアドレス</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="example@example.com"
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-700">パスワード</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="********"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          ログイン
        </button>
      </form>
    </div>
  );
};

export default Login;
