type ToastProps = {
    message: string;
    type: "success" | "error" | "info" | "default" | string;
};
declare const Toast: ({ message, type }: ToastProps) => import("react/jsx-runtime").JSX.Element;
export default Toast;
