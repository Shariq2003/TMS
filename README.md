# ✅ Task Management System

A responsive, component-driven Task Management System built using **Angular**, **Kendo UI**, **RxJS**, and **NGXS** to streamline task workflows with clean architecture, real-time search, and reusable UI patterns.

## 📦 Tech Stack

- ⚙️ Angular
- 🎨 Kendo UI
- ⚡ RxJS
- 🧠 NGXS
- 🎯 TypeScript
- 🧵 SCSS

## 💡 Key Features & Angular Concepts

| 🔑 Feature                                | 🧩 Implementation Detail                                                                 |
|------------------------------------------|-------------------------------------------------------------------------------------------|
| 🗂️ UI Grid / List                        | Kendo UI Grid & ListView – responsive, paginated task list                               |
| 🧱 Reusable UI Components                | Kendo Grid, DropDown, Labels, Inputs – modular & reusable                                |
| 🔍 Real-time Search                      | RxJS async pipelining + `async` pipe for optimized search                                |
| 🧪 Status-based Filtering                | `TaskFilterPipe` – dynamically filters tasks by status                                   |
| 🎨 Dynamic Styling                       | `StatusColorDirective` – applies conditional styling on status field                    |
| 📝 Form Validation                       | Reactive Forms in `TaskAddComponent` & `TaskEditComponent`                               |
| ⏳ Global Loader                         | `LoaderInterceptor` – displays loader on all HTTP requests                               |
| 🧭 Routing & Navigation                  | Angular Router: `/`, `/add`, `/view/:id`, `/edit/:id`                                   |
| 🧠 State Management                      | NGXS – centralized state with selectors & actions                                        |
| 📱 Responsive Design                     | SCSS with Kendo UI – mobile-friendly, responsive layout                                  |

## 🚀 Live Demo

👉 [Live Site](https://tms-flame.vercel.app/)

## 📁 GitHub Repository

👉 [GitHub Repo](https://github.com/Shariq2003/TMS)

## 🙌 Acknowledgements

- 👩‍💻 **Yashi** – For collaborating across modules and features
- 👨‍🏫 **Guddu Sir** – For mentoring and reviewing the project architecture
- 👩‍💼 **Vijeta Ma’am** – For project supervision and strategic feedback

## 📚 Lessons Learned

This project taught us how to:
- Design modular, maintainable Angular applications
- Use Kendo UI effectively with custom components
- Apply NGXS for clean and scalable state management
- Optimize user experience with loaders, interceptors, and dynamic filters

---

> Built with ❤️ by Shariq and team.

## 🛠️ Setup Instructions

To run this project locally, follow these steps:

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

4. **Visit the app in your browser**
```
http://localhost:4200
```

> Make sure you have Angular CLI installed globally. If not, run: `npm install -g @angular/cli`

---

Happy coding! ✨
