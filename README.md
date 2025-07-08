## 🛠️ 初期構築手順

### 前提条件
以下がインストールされている
- WSL2 (Windows Subsystem for Linux 2)
- Docker Desktop

### 1. リポジトリコピー
- ローカル環境にリポジトリをDL
※リポジトリのクローンは行わない事

### 2. Docker環境の起動
```bash
docker-compose up --build
```
### 3. 開発サーバーの確認
- Vite Dev Server: http://localhost:5173
- header付きのメニューが表示されていればOK

## 🚀 開発時のDocker起動手順

### 1. Docker環境の起動
```bash
docker-compose up
```

### 2. 開発サーバーの確認
- Vite Dev Server: http://localhost:5173
- header付きのメニューが表示されていればOK

### よく使うDockerコマンド
```bash
# コンテナ内でシェルを開く
docker-compose exec frontend bash

# コンテナの起動（バックグラウンド）
docker-compose up -d

# コンテナの停止
docker-compose down

# ログの確認
docker-compose logs frontend

# コンテナの状態確認
docker-compose ps

# コンテナの再ビルド（依存関係変更時）
docker-compose up --build
```
### コンテナ内
```bash
# コンテナ内でシェルを開く
docker-compose exec frontend bash

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 🌟 技術スタック
### フロントエンド
- **React 19** - 最新のReactフレームワーク
- **React Router v7** - サーバーサイドレンダリング対応のルーティング
- **Vite** - 高速なビルドツール
- **TypeScript** - 型安全な開発
- **Tailwind CSS** - CSSフレームワーク

### UI/UX
### デザインシステム
- **デザイン庁のデザインシステム** - 日本のデジタルサービス標準
- **@digital-go-jp/design-system-example-components** - 公式サンプルコンポーネント

## 📦 プロジェクト構成

```
common-app-platform/
├── frontend/                   
│   ├── app/                    # アプリケーション
│   │    ├── components/        # コンポーネント
│   │    ├── layouts/           # レイアウト
│   │    ├── lib/               # ユーティリティ
│   │    ├── routes/            # ルート
│   │    ├── public/            # 静的ファイル(画像等)
│   │    ├── app.css            # css
│   │    ├── root.tsx           # エラー等の基本的なハンドリング
│   │    └── routes.ts          # ルーティング
│   ├── Dockerfile　　　　　　　
│   └── package.json          
├── docker-compose.yml         
└── README.md                   
```

## 🎨 デザインシステム統合

### デザイン庁のデザインシステム
このプロジェクトは[デザイン庁のデザインシステム](https://www.digital.go.jp/policies/servicedesign/designsystem/)に準拠しています。

#### コンポーネントの書き換え
デザイン庁のサンプルコンポーネントは、プロジェクトの要件に合わせて書き換える必要があります：

## 🐛 よくある問題

#### 依存関係の問題
```bash
# node_modulesを削除して再インストール
docker-compose exec frontend rm -rf node_modules package-lock.json
docker-compose exec frontend npm install
```

## 📚 参考資料

- [React 19 Documentation](https://react.dev/)
- [React Router v7 Documentation](https://reactrouter.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [デザイン庁 デザインシステム](https://www.digital.go.jp/policies/servicedesign/designsystem/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

