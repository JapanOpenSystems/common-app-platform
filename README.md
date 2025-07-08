## 🛠️ 初期構築手順

### 前提条件
以下のソフトウェアがインストールされていることを確認してください：
- WSL2 (Windows Subsystem for Linux 2)
- Docker Desktop

### 1. リポジトリのダウンロード
- ローカル環境にリポジトリをダウンロードしてください  
※リポジトリのクローンは行わないでください

### 2. Docker環境の起動
```bash
docker-compose up --build
```

### 3. 開発サーバーの確認
-  http://localhost:5173 をブラウザで開いてください

## 🚀 開発時のDocker起動手順

### 1. Docker環境の起動
```bash
docker-compose up
```

### 2. 開発サーバーの確認
- http://localhost:5173 をブラウザで開いてください

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

### コンテナ内での操作
```bash
# コンテナ内でシェルを開く
docker-compose exec frontend bash

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 🌟 技術スタック

| 名称 | バージョン | 説明 |
|------|-----------|------|
| React | 19.1.0 | javascriptのFW |
| React Router | 7.5.3 | Reactにルーティング等多彩な機能を追加したFW |
|TypeScript | 5.8.3 | 言語 |
| Vite | 6.3.3 | ビルドツール |
| Tailwind CSS | 4.1.4 | CSSフレームワーク |

## 🎨 デザインシステム

### デザイン庁のデザインシステム
このプロジェクトは[デザイン庁のデザインシステム](https://www.digital.go.jp/policies/servicedesign/designsystem/)に準拠しています。

#### コンポーネントの作成について
デザイン庁のサンプルコンポーネントを参考に、プロジェクト専用のコンポーネントを独自に作成する必要があります。
> **注意：** サンプルコンポーネントをそのまま使用するとエラーが発生するため、必ずプロジェクト用にカスタマイズしてください。

**参考リソース：**
- [Reactサンプルコンポーネント](https://digital-go-jp.github.io/design-system-example-components/?path=/story/getting-started-introduction--introduction)
- [サンプルコンポーネントリポジトリ](https://github.com/digital-go-jp/design-system-example-components)

## 📚 参考資料
- [React 19 Documentation](https://react.dev/)
- [React Router v7 Documentation](https://reactrouter.com/home)
- [React Router v7 日本語公式ドキュメント](https://react-router-docs-ja.techtalk.jp/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [デザイン庁 デザインシステム](https://www.digital.go.jp/policies/servicedesign/designsystem/)

## 📦 プロジェクト構成
※主要なもののみ記載しています

```
common-app-platform/
├── frontend/                   
│   ├── app/                    
│   │    ├── components/        # コンポーネント群
│   │    │   └── design/        # デザイン庁を参考に作成したコンポーネント群
│   │    ├── layouts/           # レイアウト
│   │    ├── lib/               # ユーティリティ
│   │    ├── routes/            # ルーティング設定後の参照ファイル
│   │    ├── public/            # 静的ファイル（画像など）
│   │    ├── app.css            # CSS
│   │    ├── root.tsx           # エラーなどの基本的なハンドリング
│   │    └── routes.ts          # ルーティング
│   ├── Dockerfile              
│   └── package.json          
├── docker-compose.yml         
└── README.md                   
```

## 🐛 よくある問題

#### 依存関係の問題
```bash
# node_modulesを削除して再インストール
docker-compose exec frontend rm -rf node_modules package-lock.json
docker-compose exec frontend npm install
```