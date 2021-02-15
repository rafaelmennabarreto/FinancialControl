declare module 'metro4' {
  interface NotifyOptions {
    keepOpen?: boolean;
    cls?: string;
    width?: number;
    onShow?(): void;
    onClose?(): void;
  }

  interface Notify {
    create(message: string, title?: string, options?: NotifyOptions): void;
  }

  export const notify: Notify;
}
