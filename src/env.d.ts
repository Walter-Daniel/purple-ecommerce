/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_API_KEY: string
    VITE_AUTH_DOMAIN: string
    VITE_PROJECT_ID: string
    VITE_STORAGE_BUCKET: string
    VITE_MESSAGING_SENDER_ID: string
    VITE_APP_ID: string
    VITE_REACT_APP_BASE_URL: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }