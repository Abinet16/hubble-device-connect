---

# 📱 Device Management System

A modern **multi-tenant device management system** built with **Vite, TypeScript, React, Tailwind CSS, and shadcn-ui**.
The system enables organizations to efficiently manage devices such as **cash registers, fiscal printers, and other hardware assets** with role-based access, intuitive dashboards, and real-time updates.

---

## 🚀 Features

* **Multi-tenant architecture** – Manage devices across different clients/organizations
* **Device registration & categorization** – Add, edit, and delete devices with metadata
* **Real-time monitoring** – Track device status and activity (via WebSocket or API)
* **Search & filtering** – Quickly locate devices with advanced search
* **Role-based access control (RBAC)** – Secure permissions for admins, managers, and users
* **Responsive design** – Optimized for desktop, tablet, and mobile
* **Modern UI/UX** – Powered by **shadcn-ui** components and **Tailwind CSS**

---

## 🛠️ Tech Stack

* **[Vite](https://vitejs.dev/)** – Fast bundler and development server
* **[TypeScript](https://www.typescriptlang.org/)** – Type safety and maintainable codebase
* **[React](https://reactjs.org/)** – Frontend framework for dynamic UIs
* **[shadcn-ui](https://ui.shadcn.com/)** – Accessible, customizable UI components
* **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first styling

---

## 📂 Project Structure

```bash
device-management-system/
├── src/
│   ├── components/     # Shared UI components
│   ├── pages/          # Page-level components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and helpers
│   ├── types/          # TypeScript interfaces & types
│   ├── App.tsx         # Main app entry
│   └── main.tsx        # Vite entry point
├── public/             # Static assets
├── index.html          # HTML entry
├── tailwind.config.ts  # Tailwind CSS config
├── tsconfig.json       # TypeScript config
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

---

## ⚡ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/device-management-system.git
cd device-management-system
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
```

App will be running at **[http://localhost:5173/](http://localhost:5173/)**

### 4. Build for production

```bash
npm run build
```

---

## 🎨 UI Preview

The project uses **shadcn-ui** for reusable components and **Tailwind CSS** for styling.
Example components include:

* Navigation bar
* Sidebar with collapsible menus
* Device cards & tables
* Modal dialogs for device creation/editing

---

## 🧑‍💻 Contributing

1. Fork the repo
2. Create a new branch (`feature/your-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.

---

