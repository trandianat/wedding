# wedding
## Dependencies
1. `webpack`: bundles into minified files that are quick to serve
2. `webpack-cli`: enables running Webpack from the command line
3. `webpack-dev-server`: development server that automatically reruns Webpack when files are changed
4. `path`: for using paths in `webpack.config.js`
5. `html-webpack-plugin`: injects JS bundle into HTML
6. `@babel/core`: compiles ES6 and above to ES5
7. `@babel/preset-env`
    - Default Babel preset used to transform ES6+ into ES5
    - Determines which transformations or plugins to use and polyfills based on the browser matrix you want to support
        - Polyfilling provides modern functionality on older browsers that do not natively support it
8. `@babel/preset-react`: compiles React code into valid JavaScript or ES5
9. `babel-loader`: Webpack helper that transforms or transpiles JavaScript dependencies with Babel, i.e., transforms `import` statements into `require`
10. `style-loader`: adds styles to the DOM by injecting a style tag inside the bundles HTML file
11. `css-loader`: enables CSS imports
12. ~~`sass-loader`: enables SCSS imports~~
13. ~~`node-sass`: compiles SCSS into CSS~~
14. ~~`image-webpack-loader`: enables images~~
15. ~~`file-loader`: enables imports of various files~~
16. `@babel/plugin-proposal-class-properties`: enables object-oriented programming, e.g., classes
17. `typescript`: strongly typed programming language built on JavaScript
18. `@types/react`: contains type definitions for React
19. `@types/react-dom`: contains type definitions for React DOM
20. `@babel/preset-typescript`: compiles TypeScript code into target specified in `tsconfig.json`
21. `ts-loader`: enables TS imports
22. `prettier`: formatting
23. `eslint`: static code analysis
24. `@typescript-eslint/eslint-plugin`: provides ESLint rules for TypeScript code
25. `@typescript-eslint/parser`: allows ESLint to understand TypeScript syntax
26. `@svgr/webpack`: use SVGR to import SVGs as React components
27. `aws-amplify`: configures AWS credentials and calls API
28. `@emotion/react`: enables CSS in JS via `css` prop
29. ~~`facepaint`: enables media query configuration via arrays~~
30. `react`: enables React
31. `react-dom`: renders the entry file
32. `react-router-dom`: routing

## Webpack
- Automatically outputs to `dist` unless specified otherwise
- `webpack.config.js`
    - `entry`: what to compile and from where
	- `output`: where the compiled version should be outputted
		- `publicPath` specifies the base path for all assets
	- `mode`: mode of output, e.g., development, production, etc.
	- `resolve`
		- `modules`: enables importing from `src` via relative paths rather than absolute, same for `node_modules` if specified
		- `extensions`: resolves extensions in the order specified in the array and enables omitting the extension from importing, e.g., `import File from '../path/to/file';`
	- `devServer`: tells server what files to serve
		- `historyApiFallback` redirects 404s to `/index.html`
	- `plugins`: `html-webpack-plugin` tells server that `index.bundle.js` should be injected into the bundled `index.html`
	- `devtool` set as a type of source map
		- When Webpack bundles source files into bundle files, it is difficult to track errors from the browser console
		- Source maps connect the bundle files to their corresponding source files to provide more descriptive errors in development and less descriptive errors in production
- Babel instructs Webpack how to compile React/TypeScript code via `.babelrc`
- `publicPath` and `historyApiFallback` prevent [`"Cannot GET /"` errors](https://ui.dev/react-router-cannot-get-url-refresh)
    - Upon rebuild, `react-router-dom` does not exist yet unless redirected to `/` first

## TypeScript
- [`tsconfig.json`](https://www.typescriptlang.org/tsconfig)
	- `target`: compiles ES6 or above code into specified target, e.g., ES5, so that it is compatible with browsers
	- `include`: specifies that only files within src should be included
	- `sourceMap`: generates corresponding .map that can be used in production code for debugging
	- `strict`: enables a wide range of type-checking behavior that results in stronger guarantees of correctness
	- `allowJS`: allows JavaScript files to be imported inside the project instead of just from `.ts` and `.tsx` files
- Components
	- `JSX.Element` is `ReactElement`
    - `ReactNode` is type returned by class component render

## CSS
- Path should start with `/` when referenced in HTML
	- Otherwise, "Cannot GET" or "Refused to apply style because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled"
- Scale resolution based on screen size
    - `<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0">`