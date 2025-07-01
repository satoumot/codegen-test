import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './schema.graphql', // フロントエンドとバックエンドで同じスキーマを共有します
  ignoreNoDocuments: true,

  generates: {
    // --- 既存のフロントエンド向け設定 (TypeScript + React Apollo) ---
    './generated/graphql.ts': {
      documents: './generated-queries/**/*.gql', // フロントエンドのクエリファイル
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ],
      presetConfig: {
        apolloClientVersion: 3,
      },
      config: {
        withHooks: true
      }
    },

    
    './generated/resolver.ts': {
      plugins: [
        'typescript',
        'typescript-resolvers'
      ]
    }
  },
};

export default config;