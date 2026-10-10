<div align="center">

# ✅ Task Management System

**A responsive, component-driven task manager built with Angular, Kendo UI, RxJS and NGXS — clean architecture, real-time search and reusable UI patterns.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-tms--flame.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://tms-flame.vercel.app/)

![Angular](https://img.shields.io/badge/Angular_18-DD0031?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=flat-square&logo=reactivex&logoColor=white)
![NGXS](https://img.shields.io/badge/NGXS-3F51B5?style=flat-square)
![Kendo UI](https://img.shields.io/badge/Kendo_UI-FF6358?style=flat-square&logo=progress&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)
![GitHub last commit](https://img.shields.io/github/last-commit/Shariq2003/TMS?style=flat-square)

[Features](#-key-features--angular-concepts) · [Architecture](#%EF%B8%8F-architecture) · [Setup](#%EF%B8%8F-setup-instructions) · [Structure](#-project-structure) · [Lessons](#-lessons-learned)

</div>

---

## 📦 Tech Stack

- ⚙️ **Angular 18** — modular architecture with feature modules
- 🎨 **Kendo UI for Angular** — Grid, ListView, DropDowns, Inputs, Notifications, Loader
- ⚡ **RxJS** — async pipelines for search and HTTP
- 🧠 **NGXS** — centralized state (with storage, logger & devtools plugins)
- 🎯 **TypeScript** · 🧵 **SCSS**

## 💡 Key Features & Angular Concepts

| 🔑 Feature | 🧩 Implementation Detail |
|---|---|
| 🗂️ UI Grid / List | Kendo UI Grid & ListView – responsive, paginated task list |
| 🧱 Reusable UI Components | Kendo Grid, DropDown, Labels, Inputs, Card, DateRange, TextArea – wrapped as shared widgets |
| 🔍 Real-time Search | RxJS async pipelining + `async` pipe for optimized search |
| 🧪 Status-based Filtering | `TaskFilterPipe` – dynamically filters tasks by status |
| 🎨 Dynamic Styling | `StatusColorDirective` – applies conditional styling on the status field |
| 📝 Form Validation | Reactive Forms in `TaskAddComponent` & `TaskEditComponent` |
| ⏳ Global Loader | `LoaderInterceptor` – displays a loader on all HTTP requests |
| 🧭 Routing & Navigation | Angular Router: `/`, `/add`, `/view/:id`, `/edit/:id` |
| 🧠 State Management | NGXS – centralized state with selectors & actions, persisted via the storage plugin |
| 📱 Responsive Design | SCSS with Kendo UI – mobile-friendly, responsive layout |

## 🏗️ Architecture

```mermaid
flowchart LR
    C["Components<br/>list · add · edit · view"] -- "dispatch actions" --> S["NGXS Store<br/>TasksState"]
    S -- "selectors (Observables)" --> C
    S -- "calls" --> SV["TasksService<br/>HttpClient"]
    SV -- "REST" --> API[("Mock REST API<br/>mockapi.io")]
    I["LoaderInterceptor"] -. "wraps every request" .- SV
    S -. "storage plugin" .-> LS[("localStorage")]
```

<details>
<summary><b>🔁 What happens when you add a task</b></summary>

<br/>

```mermaid
sequenceDiagram
    participant F as TaskAddComponent (Reactive Form)
    participant St as NGXS Store
    participant Sv as TasksService
    participant L as LoaderInterceptor
    F->>St: dispatch(CreateTask)
    St->>Sv: createTask(task)
    Sv->>L: HTTP POST
    L-->>L: show global loader
    L->>Sv: response
    L-->>L: hide loader
    Sv-->>St: created task
    St-->>F: state updated → grid re-renders via selector
```

</details>

## 🛠️ Setup Instructions

> Make sure you have the Angular CLI installed globally. If not, run `npm install -g @angular/cli`.

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shariq2003/TMS.git
   cd TMS
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   ng serve
   ```
4. **Visit the app** at `http://localhost:4200`

## 📁 Project Structure

<details>
<summary><b>Expand tree</b></summary>

```text
src/app/
├── interceptors/                 # LoaderInterceptor
├── shared/widgets/               # Kendo wrappers: button, card, daterange, dropdown,
│                                 # error, grid, input, label, loader, textarea
└── tasks/
    ├── components/               # task-list · task-add · task-edit · task-view
    ├── directives/               # StatusColorDirective
    ├── pipes/                    # TaskFilterPipe
    ├── services/                 # tasks · loader · notification
    └── store/                    # NGXS actions · models · states
```

</details>

## 🙌 Acknowledgements

- 👩‍💻 **Yashi** – for collaborating across modules and features
- 👨‍🏫 **Guddu Sir** – for mentoring and reviewing the project architecture
- 👩‍💼 **Vijeta Ma'am** – for project supervision and strategic feedback

## 📚 Lessons Learned

This project taught us how to:

- Design modular, maintainable Angular applications
- Use Kendo UI effectively with custom components
- Apply NGXS for clean and scalable state management
- Optimize user experience with loaders, interceptors, and dynamic filters

---

<div align="center">

Built with ❤️ by **[Shariq](https://github.com/Shariq2003)** and team · [LinkedIn](https://www.linkedin.com/in/shariq-sd)

⭐ If you like this project, consider giving it a star!

</div>
