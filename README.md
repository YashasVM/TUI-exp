# My TUI Portfolio

A beautiful CLI portfolio built with React and Ink.

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build and run locally:
   ```bash
   npm run build
   npx .
   ```

## Development

3. Build for production:
   ```bash
   npm run build
   ```

4. Run production build:
   ```bash
   npm start
   ```

## Customization

Edit `source/ui.tsx` to change the content (Name, About, Skills, Links).

## Publishing to NPM

To make your portfolio available via `npx <your-username>`, follow these steps:

1. Create an account on [npmjs.com](https://www.npmjs.com/).
2. Login to npm in your terminal:
   ```bash
   npm login
   ```
3. Update `package.json`:
   - Change `"name"` to something unique (e.g., your username or `yourname-card`).
   - update `"version"` if needed.
4. Publish:
   ```bash
   npm publish --access public
   ```

Now anyone can run:
```bash
npx <your-package-name>
```
