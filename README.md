# Servercn

> **Backend component registry for Node.js & Typescript**

!\[License]\(https\://img.shields.io/badge/license-MIT-blue.svg null)
!\[TypeScript]\(https\://img.shields.io/badge/TypeScript-007ACC?logo=typescript\&logoColor=white null)
!\[Node.js]\(https\://img.shields.io/badge/Node.js-339933?logo=node.js\&logoColor=white null)

**Servercn** is a backend component registry for Node.js & TypeScript. It provides a robust collection of pre-configured components, boilerplates, and utilities for **Node.js** and **TypeScript**, enabling developers to scaffold production-ready code in seconds.

> Shadcn ecosystem for nodejs backend

***

!\[Servercn Components]\(./apps/web/public/og-image.png null)

[Visit website](https://servercn.vercel.app/docs/cli)

[Join discord](https://discord.gg/2fXqnTXF8d)

## 🛠️ Usage

### 1. Initialize a Project

Start a new project with a recommended, production-ready structure.

```bash
npx servercn-cli init
```

### 2. Add Components

Add specific modules to your existing project. This allows for incremental adoption.

```bash
npx servercn-cli add [component-name]
```

Examples:

```C++
npx servercn-cli add logger
```

```bash
npx servercn-cli add oauth
```

## Components

- <br />
  ### API Error Handler

```bash
npx servercn-cli add error-handler
```

- <br />
  ### API Response Formatter

```bash
npx servercn-cli add response-formatter
```

- <br />
  ### Async Handler

```bash
npx servercn-cli add async-handler
```

- <br />
  ### File Upload provider

```bash
npx servercn-cli add file-upload
```

- <br />
  ### JWT Utils

```bash
npx servercn-cli add jwt-utils
```

- <br />
  ### Logger

```bash
npx servercn-cli add logger
```

- <br />
  ### Rate Limiter

```bash
npx servercn-cli add rate-limiter
```

- <br />
  ### OAuth Provider

```bash
npx servercn-cli add oauth
```

- <br />
  ### Health Check

```bash
npx servercn-cli add health-check
```

### And more

### 3. CLI Commands

[Visit for more](https://Servercn.vercel.app/docs/cli)

- List all available registry item.
  ```bash
  npx servercn-cli ls --all
  ```
- List all available registry item in JSON structure.
  ```bash
  npx servercn-cli ls --all --json
  ```
- List all available registry commands.
  ```bash
  npx servercn-cli list
  ```
- List all available registry commands in JSON structure.
  ```bash
  npx servercn-cli ls --json
  ```
- List available components.
  ```bash
  npx servercn-cli ls cp
  ```
- List available all foundation.
  ```bash
  npx servercn-cli ls fd
  ```
- List available schema.
  ```bash
  npx servercn-cli ls sc
  ```
- List available blueprint.
  ```bash
  npx servercn-cli ls bp
  ```
- List available tooling.
  ```bash
  npx servercn-cli ls tl
  ```

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

[Contributing guides](https://Servercn.vercel.app/contributing)

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## Stargazers over time

[!\[RepoStars\](https://repostars.dev/api/embed?repo=AkkalDhami%2Fservercn\&theme=dark null)](https://repostars.dev/?repos=AkkalDhami%2Fservercn\&theme=dark)

***

<p align="center">
  Built with 🪓 by <a target="_blank" href="https://github.com/akkaldhami">Akkal Dhami</a> and the <a target="_blank" href="https://Servercn.vercel.app/contributors">servercn contributors</a>
</p>
