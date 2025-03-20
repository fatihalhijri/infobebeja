export {};

declare global {
  interface Window {
    gtag: (type: string, id: string, params?: Record<string, any>) => void;
  }
}
