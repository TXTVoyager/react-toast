# 🌟 React Toast | @txtvoyager/react-toast

![npm](https://img.shields.io/npm/v/@txtvoyager/react-toast)
![downloads](https://img.shields.io/npm/dt/@txtvoyager/react-toast)
![license](https://img.shields.io/npm/l/@txtvoyager/react-toast)

**🔔 Extremely beautiful & lightweight toasts and notifications for React and React Native applications.**

A **tiny, modern toast notification library for React**.  
No providers, no boilerplate — just import and call `toast.show()`, `toast.success()`, or `toast.error()`.

---

## 🎬 Demo

### GIF Demo
![Demo](./demo.gif?raw=true)

---

## ⚡ Features

- ✅ Super lightweight
- ✅ Singleton pattern — usable anywhere
- ✅ Beautiful
- ✅ Modern ES6 API
- ✅ Minimal styling but customizable
- 🎨 Extremely easy to use
- ⏱ Auto-dismiss after 3 seconds

---

## 🏷 Installation

```bash
npm install @txtvoyager/react-toast
# or
yarn add @txtvoyager/react-toast
````

---

## 🚀 Usage

```jsx
import React from "react";
import { toast } from "@txtvoyager/react-toast";

export default function App() {
  return (
    <div>
      <button onClick={() => toast.show("Hello World! 🎉")}>
        Show Beautiful Toast
      </button>
      <button onClick={() => toast.success("Saved successfully ✅")}>
        Show Success Toast
      </button>
      <button onClick={() => toast.error("Something went wrong ❌")}>
        Show Error Toast
      </button>
    </div>
  );
}
```

> The toast container is **auto-injected**, no `<Provider>` needed.

---

## 🎨 Custom Styling

You can override styles by targeting the CSS classes:

```css
/* Override toast colors */
.rht-info { background-color: #1e90ff; !important }
.rht-success { background-color: #00c851; !importandt}
.rht-error { background-color: #ff3547; !important}

/* Change position */
.rht-container {
  top: 50px;
  right: 50px;
}
```

---

## 🔧 API

| Method                   | Description                                                                      |
| ------------------------ | -------------------------------------------------------------------------------- |
| `toast.show(message)`    | Show a toast. Type can be `"info"`, `"success"`, or `"error"`. Defaults to info. |
| `toast.success(message)` | Show a success toast.                                                            |
| `toast.error(message)`   | Show an error toast.                                                             |

---

## 📦 Example

```jsx
import { toast } from "@txtvoyager/react-toast";

const handleDownload = () => {
  toast.show("Starting download... 📥");
  fetch("/file.zip")
    .then(() => toast.success("Download complete ✅"))
    .catch(() => toast.error("Download failed ❌"));
};
```

---

## 🎯 Why `@txtvoyager/react-toast`?

* No boilerplate
* Works anywhere in your React app
* Modern, ES6-friendly API
* Tiny footprint, easy to customize

---

## 🌐 Browser Support

* Modern browsers (Chrome, Firefox, Edge, Safari)
* React 17+ compatible

---

## 🛠 Development

```bash
git clone <repo>
cd react-toast
npm install
npm run build
```

---

## 📜 License

MIT License © 2025 TXTVoyager

---

Made with ❤️ for React Developers
