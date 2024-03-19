<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">TYPEROBOT</h1>
</p>
<p align="center">
    <em>Unleash creativity, code with boundless possibilities.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/typerobot/typerobot?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/typerobot/typerobot?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/typerobot/typerobot?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/typerobot/typerobot?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)
</details>
<hr>

##  Overview

TypingRobot is an open-source project that centralizes theme management and UI consistency in Next.js applications. It offers dynamic theming through CSS variables, ensuring a seamless customization experience. Leveraging a variety of components such as navigation structures, animated text effects, and interactive UI elements, TypingRobot enhances user engagement and visual appeal. By encapsulating key functionalities within a structured codebase, this project simplifies the process of maintaining consistent theming and styling across web pages, thereby optimizing the overall user experience.

---

##  Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | Next.js with TypeScript for frontend architecture, utilizing CSS-in-JS. Uses a centralized theme management approach. |
| 🔩 | **Code Quality**  | Maintains high code quality with strict TypeScript type checking and linting rules. Follows Prettier formatting standards. |
| 📄 | **Documentation** | Well-documented codebase with detailed comments and explanations for components, config files, and utility functions. |
| 🔌 | **Integrations**  | Utilizes Radix UI for scroll area, dropdown menus, and dialog components. Incorporates Framer Motion for animations. |
| 🧩 | **Modularity**    | Components are highly modular, promoting reusability and maintainability. Uses utility functions for styling and class merging. |
| 🧪 | **Testing**       | Testing frameworks and tools are not explicitly mentioned in the repository contents. |
| ⚡️  | **Performance**   | Efficient resource usage with optimized Next.js configuration and PostCSS for styling. |
| 🛡️ | **Security**      | No specific security measures mentioned in the repository contents. |
| 📦 | **Dependencies**  | Key dependencies include React, Next.js, Tailwind CSS, and various utility libraries for development and styling. |
| 🚀 | **Scalability**   | Designed for scalability with Next.js and TypeScript, supporting increased traffic and content expansion. |

The detailed analysis of the repository contents including config files, components, and utility functions highlights the structured and well-organized nature of the codebase, emphasizing modularity, theming capabilities, and consistent user experience.

---

##  Repository Structure

```sh
└── typerobot/
    ├── README.md
    ├── app
    │   ├── layout.tsx
    │   └── page.tsx
    ├── bun.lockb
    ├── components
    │   ├── icons.tsx
    │   ├── main-nav.tsx
    │   ├── mobile-nav.tsx
    │   ├── mode-toggle.tsx
    │   ├── site-footer.tsx
    │   ├── site-header.tsx
    │   ├── theme-provider.tsx
    │   └── ui
    ├── components.json
    ├── config
    │   └── site.ts
    ├── lib
    │   ├── fonts.ts
    │   └── utils.ts
    ├── next-env.d.ts
    ├── next.config.mjs
    ├── package.json
    ├── postcss.config.js
    ├── prettier.config.js
    ├── public
    │   ├── apple-touch-icon.png
    │   ├── browserconfig.xml
    │   ├── favicon-114x114.png
    │   ├── favicon-120x120.png
    │   ├── favicon-144x144.png
    │   ├── favicon-150x150.png
    │   ├── favicon-152x152.png
    │   ├── favicon-16x16.png
    │   ├── favicon-180x180.png
    │   ├── favicon-192x192.png
    │   ├── favicon-310x310.png
    │   ├── favicon-32x32.png
    │   ├── favicon-57x57.png
    │   ├── favicon-60x60.png
    │   ├── favicon-70x70.png
    │   ├── favicon-72x72.png
    │   ├── favicon-76x76.png
    │   ├── favicon-96x96.png
    │   └── favicon.ico
    ├── reset.d.ts
    ├── styles
    │   └── globals.css
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── tsconfig.tsbuildinfo
    └── types
        └── nav.ts
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---                                                                                             | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [tailwind.config.js](https://github.com/typerobot/typerobot/blob/master/tailwind.config.js)     | Defines Tailwind CSS theme with custom colors, fonts, and animations for the repositorys app and components. Allows dynamic theming through CSS variables, optimizing UI consistency and flexibility.                                                                                                                                                                                                                                                                                                                                                            |
| [next.config.mjs](https://github.com/typerobot/typerobot/blob/master/next.config.mjs)           | Defines Next.js configuration object for the repository. Centralizes Next.js settings and optimizations for the projects frontend architecture.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [tsconfig.tsbuildinfo](https://github.com/typerobot/typerobot/blob/master/tsconfig.tsbuildinfo) | Theme-provider.tsx`The `theme-provider.tsx` file in the `components` folder of the `typerobot` repository serves as a crucial component for managing the theme settings and styles across the application. It abstracts the logic related to theming, providing a centralized approach for handling themes in the user interface. This component plays a significant role in ensuring consistent theming behavior throughout the applications various sections and enhances the overall user experience by allowing easy customization and management of themes. |
| [next-env.d.ts](https://github.com/typerobot/typerobot/blob/master/next-env.d.ts)               | Defines TypeScript references for Next.js and Next.js image types. Enhances TypeScript type support for the project. Supports TypeScript configuration in the repository.                                                                                                                                                                                                                                                                                                                                                                                        |
| [prettier.config.js](https://github.com/typerobot/typerobot/blob/master/prettier.config.js)     | Defines import order rules for Prettier, organizing imports for better code readability in the projects TypeScript and JSX files. Prioritizes built-in modules and project-specific imports over third-party dependencies.                                                                                                                                                                                                                                                                                                                                       |
| [package.json](https://github.com/typerobot/typerobot/blob/master/package.json)                 | Manages project dependencies and scripts for development, building, and deployment. Includes key libraries for UI components and animations, alongside tools for linting and code formatting. Supports a seamless development workflow in the Next.js environment.                                                                                                                                                                                                                                                                                               |
| [components.json](https://github.com/typerobot/typerobot/blob/master/components.json)           | Defines component styles, Tailwind config, and aliases. Establishes global CSS path and color variables. Facilitates easy navigation and centralized management of utility functions and components across the repository.                                                                                                                                                                                                                                                                                                                                       |
| [tsconfig.json](https://github.com/typerobot/typerobot/blob/master/tsconfig.json)               | Defines TypeScript compiler settings for the repository, ensuring strict type checking, JSX preservation, and module resolution. Enables support for JSX syntax, paths mapping, and Next.js plugins while excluding node modules during compilation.                                                                                                                                                                                                                                                                                                             |
| [postcss.config.js](https://github.com/typerobot/typerobot/blob/master/postcss.config.js)       | Configures PostCSS plugin with Tailwind CSS and Autoprefixer for styling in the Typerobot repository.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [reset.d.ts](https://github.com/typerobot/typerobot/blob/master/reset.d.ts)                     | Implements TypeScript reset functionality to enhance type definitions in the `typerobot` repository for improved code quality and maintainability.                                                                                                                                                                                                                                                                                                                                                                                                               |

</details>

<details closed><summary>types</summary>

| File                                                                      | Summary                                                                                                                                                                                                                                                                   |
| ---                                                                       | ---                                                                                                                                                                                                                                                                       |
| [nav.ts](https://github.com/typerobot/typerobot/blob/master/types/nav.ts) | Defines interfaces for navigation items with titles, links, icons, and labels. Specifies MainNavItem and SidebarNavItem structures, the latter including child items. Encapsulates navigation item configurations for use throughout the repositorys frontend components. |

</details>

<details closed><summary>app</summary>

| File                                                                            | Summary                                                                                                                                                                                                                                              |
| ---                                                                             | ---                                                                                                                                                                                                                                                  |
| [layout.tsx](https://github.com/typerobot/typerobot/blob/master/app/layout.tsx) | Enables consistent layout and theming for web pages. Integrates site metadata and viewport settings, ensuring a cohesive user experience. Orchestrates the arrangement of header, main content, and footer components within a responsive container. |
| [page.tsx](https://github.com/typerobot/typerobot/blob/master/app/page.tsx)     | Illustrates AI solutions through text animation for the homepage. Calls `TextGenerateEffect` component to dynamically display content promoting advanced business transformation services.                                                           |

</details>

<details closed><summary>config</summary>

| File                                                                         | Summary                                                                                                                                                                                                                                                                   |
| ---                                                                          | ---                                                                                                                                                                                                                                                                       |
| [site.ts](https://github.com/typerobot/typerobot/blob/master/config/site.ts) | Defines `siteConfig` object specifying key details about the TypeRobot site. It includes name, description, main navigation items, and social media links. This config file organizes essential information to maintain consistency and easy access to site-related data. |

</details>

<details closed><summary>styles</summary>

| File                                                                                 | Summary                                                                                                              |
| ---                                                                                  | ---                                                                                                                  |
| [globals.css](https://github.com/typerobot/typerobot/blob/master/styles/globals.css) | Defines color variables and base styles for the repositorys global CSS stylesheet, supporting light and dark themes. |

</details>

<details closed><summary>components</summary>

| File                                                                                                   | Summary                                                                                                                                                                                                                                          |
| ---                                                                                                    | ---                                                                                                                                                                                                                                              |
| [theme-provider.tsx](https://github.com/typerobot/typerobot/blob/master/components/theme-provider.tsx) | Enables theme management for components, maintaining consistent look and feel across the app. Integrates Next.js theme provider for seamless theming customization.                                                                              |
| [site-header.tsx](https://github.com/typerobot/typerobot/blob/master/components/site-header.tsx)       | Showcases dynamic site header with main and mobile navigation, GitHub and Twitter links, and a theme toggle button. Integrates siteConfig data for links and navigation items. High modularity for reusability.                                  |
| [site-footer.tsx](https://github.com/typerobot/typerobot/blob/master/components/site-footer.tsx)       | Implements a dynamic site footer displaying site information and copyright details. Integrates site configuration to fetch links and texts, enhancing the footers flexibility.                                                                   |
| [icons.tsx](https://github.com/typerobot/typerobot/blob/master/components/icons.tsx)                   | Defines custom icons for the app, leveraging Lucide library. Icons include Sun, Moon, Twitter, and a custom logo and GitHub icon. Enhances UI experience by providing visually appealing and contextually relevant icons for various components. |
| [mode-toggle.tsx](https://github.com/typerobot/typerobot/blob/master/components/mode-toggle.tsx)       | Implements ModeToggle component for toggling themes via DropdownMenu. Uses SunIcon and MoonIcon for light and dark themes. Enables theme switching to light, dark, or system-wide. Leverages useTheme for theme management.                      |
| [mobile-nav.tsx](https://github.com/typerobot/typerobot/blob/master/components/mobile-nav.tsx)         | Implements mobile navigation functionality with a collapsible menu triggered by a button. Displays site logo and main navigation links with smooth scrolling. Enables navigation between pages while updating the open state of the menu.        |
| [main-nav.tsx](https://github.com/typerobot/typerobot/blob/master/components/main-nav.tsx)             | Defines and renders main navigation links based on current page path. Handles navigation styling, link activation, and disabled states. Integrates with site configuration for logo display.                                                     |

</details>

<details closed><summary>components.ui</summary>

| File                                                                                                                  | Summary                                                                                                                                                                                                                                                                                                       |
| ---                                                                                                                   | ---                                                                                                                                                                                                                                                                                                           |
| [sheet.tsx](https://github.com/typerobot/typerobot/blob/master/components/ui/sheet.tsx)                               | Enables dynamic sheet components with triggers, overlays, content, headers, footers, titles, and descriptions in various positions. Facilitates smooth animations and customizable styles for interactive user experiences within the UI framework.                                                           |
| [scroll-area.tsx](https://github.com/typerobot/typerobot/blob/master/components/ui/scroll-area.tsx)                   | Defines and exports customizable scroll area components using React and Radix UI. Enhances user experience by providing vertical and horizontal scroll bars with smooth animations. Integrated with classnames utility for easy styling modifications.                                                        |
| [text-generate-effect.tsx](https://github.com/typerobot/typerobot/blob/master/components/ui/text-generate-effect.tsx) | Implements animated text generation effect for specified words using framer-motion library, enhancing visual appeal and user engagement.                                                                                                                                                                      |
| [button.tsx](https://github.com/typerobot/typerobot/blob/master/components/ui/button.tsx)                             | Defines button variants and styling for different sizes and styles to enable dynamic rendering of buttons based on passed props. Integrates with Radix UI for slot handling. This component abstracts button creation, enhancing reusability and maintainability across the projects UI components.           |
| [dropdown-menu.tsx](https://github.com/typerobot/typerobot/blob/master/components/ui/dropdown-menu.tsx)               | Implements dropdown menu components for interactive user interfaces, facilitating navigation and content selection within the web application. The code enhances user experience by providing a customizable and accessible dropdown menu structure, including triggers, items, separators, labels, and more. |

</details>

<details closed><summary>lib</summary>

| File                                                                        | Summary                                                                                                                                                                                                      |
| ---                                                                         | ---                                                                                                                                                                                                          |
| [fonts.ts](https://github.com/typerobot/typerobot/blob/master/lib/fonts.ts) | Implements font configurations for JetBrains Mono and Outfit in Typerobots repository. Provides font subsets and CSS variables for Sans and Mono fonts, enhancing typography consistency across the project. |
| [utils.ts](https://github.com/typerobot/typerobot/blob/master/lib/utils.ts) | Combining CSS classes using `cn` function for enhanced styling in components. Leveraging `clsx` and `tailwind-merge` libraries for seamless class merging.                                                   |

</details>

---

##  Getting Started

**System Requirements:**

* **TypeScript**: `version x.y.z`

###  Installation

<h4>From <code>source</code></h4>

> 1. Clone the typerobot repository:
>
> ```console
> $ git clone https://github.com/typerobot/typerobot
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd typerobot
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```

###  Usage

<h4>From <code>source</code></h4>

> Run typerobot using the command below:
> ```console
> $ npm run build && node dist/main.js
> ```

###  Tests

> Run the test suite using the command below:
> ```console
> $ npm test
> ```

---

##  Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/typerobot/typerobot/issues)**: Submit bugs found or log feature requests for the `typerobot` project.
- **[Submit Pull Requests](https://github.com/typerobot/typerobot/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/typerobot/typerobot/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/typerobot/typerobot
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://github.com{/typerobot/typerobot/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=typerobot/typerobot">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-overview)

---
