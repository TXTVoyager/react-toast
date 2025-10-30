type ToastManagerProps = {
    drainQueue?: () => void;
};
declare const ToastManager: ({ drainQueue }: ToastManagerProps) => JSX.Element;
export default ToastManager;
