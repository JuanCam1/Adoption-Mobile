/// <reference types="vite/client" />

interface ViteTypeOptions {
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_URL_DEV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}