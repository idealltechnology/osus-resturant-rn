# React Starter Documentation

In this documentation, you will see step-by-step how the structure of react projects in Ideall company is created.

You will get an application which has;

1. TypeScript
2. Sass
3. Linting
4. Formatting
5. Testing
6. CI/CD
7. Storybook

## Steps

1. Initializing project
2. Configure TypeScript for strict
3. Installing Prettier for formatting
4. Installing ESLint
5. Installing Sass
6. Installing stylelint
7. Setting up test environment
8. Enabling hot reloading
9. Organizing Folder Structure
10. Install StoryBook
11. Install Router
12. Enable code splitting
13. Adding CircleCI config
14. Auto-deploy to Surge.sh
15. Github Settings
16. Final Touches
17. Starting to Development 🎉

## Step 1: Initializing project

First of all, we have to initialize our project with following commands.

```
npm install create-react-app
npx create-react-app react-starter --template typescript
cd react-starter
yarn start
```

## Step 2: Configure TypeScript for strict

We need to change `tsconfig.json` file with following parameters.

```
"noImplicitAny": true,
"noImplicitReturns": true,
```

## Step 3: Installing Prettier for formatting

We do the installation process to format our codes more easily.

```
yarn add prettier --dev
```

After installation, we are going to make some configurations in `.prettierrc` file.

```
{
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 181,
  "singleQuote": true,
  "trailingComma": "all"
}
```

Following config is for `.prettierignore` file.

```
build
```

You can optionally turn on "auto format on save" feature when saving on VSCode.
`.vscode/settings.json`

```
{
  "editor.formatOnSave": true,
}
```

Also we need some format scripts in `package.json` file.

```
"format:ts": "prettier --write 'src/**/*.{ts,tsx}'",
"format": "yarn run format:ts",
"format:check": "prettier -c 'src/**/*.{ts,tsx}'"
```

## Step 4: Installing ESLint

We are installing eslint to develop our project in rigor.

```
yarn add eslint --dev
```

`.eslintrc`

```
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb",
    "prettier/react",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier/@typescript-eslint",
    "airbnb-base",
    "plugin:eslint-comments/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  "plugins": ["react", "jsx-a11y", "@typescript-eslint", "import", "prettier", "jest", "eslint-comments"],
  "env": {
    "browser": true,
    "jest": true
  },
  "rules": {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "react/prop-types": "off",
    "react/button-has-type": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [".storybook/**/*.js", "config-overrides.js", "src/setupTests.ts", "src/components/**/*.stories.tsx", "src/**/*.test.{ts,tsx}"]
      }
    ]
  }
}
```

`.eslintignore`

```
public
build
react-app-env.d.ts
```

`.vscode/settings.json`

```
{
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
}
```

We add some parameters to `package.json` file for some listing scripts.

```
"lint": "yarn run lint:ts",
"lint:ts": "tsc && yarn lint:eslint",
"lint:eslint": "eslint 'src/**/*.{ts,tsx}'",
"format:ts": "prettier --write 'src/**/*.{ts,tsx}' && yarn lint:eslint --fix",
```

## Step 5: Installing Sass

React supports Sass. We are going to enable it.

```
yarn add node-sass --dev
```

## Step 6: Installing stylelint

Also we need linting for sass files. So we are going to install `stylelint`.

```
yarn add stylelint stylelint-config-prettier stylelint-prettier --dev
```

`.stylelintrc`

```
module.exports = {
  "plugins": [
    "stylelint-declaration-strict-value",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-order",
    "stylelint-scss",
    "stylelint-no-px"
  ],
  "customSyntax": 'postcss-scss',
  "rules": {
    "at-rule-disallowed-list": ["debug", "extend"],
    "at-rule-no-vendor-prefix": true,
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-invalid-hex": true,
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-no-important": true,
    "declaration-property-value-disallowed-list": {
      "/.+/": ["initial"],
      "/^border/": ["none"],
      "/^transition/": ["/all/"]
    },
    "font-family-name-quotes": "always-where-recommended",
    "font-weight-notation": "numeric",
    "function-comma-newline-after": "always-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-quotes": "always",
    "function-whitespace-after": "always",
    "indentation": 2,
    "length-zero-no-unit": true,
    "max-empty-lines": 1,
    "max-nesting-depth": [
      3,
      {
        "ignoreAtRules": ["each", "else", "if", "include", "media", "supports"]
      }
    ],
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",
    "meowtec/no-px": [
      true,
      {
        "ignoreFunctions": ["px-to-em", "px-to-rem"]
      }
    ],
    "no-duplicate-selectors": true,
    "no-eol-whitespace": true,
    "no-missing-end-of-source-newline": true,
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "order/order": [
      [
        "custom-properties",
        "dollar-variables",
        {
          "type": "at-rule",
          "name": "extend"
        },
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": false
        },
        "declarations",
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": true
        },
        "rules"
      ]
    ],
    "order/properties-order": [
      [
        "position",
        "z-index",
        "top",
        "right",
        "bottom",
        "left",
        "display",
        "overflow",
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height",
        "box-sizing",
        "grid",
        "grid-area",
        "grid-template",
        "grid-template-areas",
        "grid-template-rows",
        "grid-template-columns",
        "grid-row",
        "grid-row-start",
        "grid-row-end",
        "grid-column",
        "grid-column-start",
        "grid-column-end",
        "grid-auto-rows",
        "grid-auto-columns",
        "grid-auto-flow",
        "gap",
        "grid-gap",
        "grid-row-gap",
        "grid-column-gap",
        "flex",
        "flex-basis",
        "flex-direction",
        "flex-flow",
        "flex-grow",
        "flex-shrink",
        "flex-wrap",
        "align-content",
        "align-items",
        "align-self",
        "justify-content",
        "order",
        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border",
        "border-top",
        "border-right",
        "border-bottom",
        "border-left",
        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left"
      ],
      {
        "unspecified": "bottomAlphabetical"
      }
    ],
    "plugin/declaration-block-no-ignored-properties": true,
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": [
      "always-multi-line",
      {
        "except": ["first-nested"],
        "ignore": ["after-comment"]
      }
    ],
    "scale-unlimited/declaration-strict-value": [
      ["color", "z-index"],
      {
        "ignoreKeywords": {
          "": ["currentColor", "inherit", "transparent"],
          "z-index": 0,
        }
      }
    ],
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": ["scss"],
    "scss/at-mixin-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-pattern": "^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/percent-placeholder-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/selector-no-redundant-nesting-selector": true,
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-space-before": "never",
    "selector-max-attribute": 2,
    "selector-max-class": 3,
    "selector-max-compound-selectors": 3,
    "selector-max-id": 0,
    "selector-max-specificity": "0,3,0",
    "selector-max-universal": 1,
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "shorthand-property-no-redundant-values": true,
    "string-quotes": "single",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-no-vendor-prefix": true
  }
}
```

Finally, we need to update `package.json` and `.vscode/settings.json`.

```
"lint:css": "stylelint --syntax scss \"src/**/*.scss\"",
"lint": "yarn run lint:ts && yarn run lint:css",
"format:css": "stylelint --fix --syntax scss \"src/**/*.scss\"",
"format": "yarn run format:ts && yarn run format:css"
```

## Step 7: Setting up test environment

We use `jest` with `enzyme`.

```
yarn add enzyme enzyme-adapter-react-16 react-test-renderer --dev
yarn add @types/enzyme @types/enzyme-adapter-react-16 --dev
```

Also we need to install `enzyme-to-json` for simpler snapshosts.

```
yarn add enzyme-to-json --dev
```

We need to make some change in `package.json` file for jest.

```
"scripts": {
  "coverage": "yarn run test --coverage"
},
"jest": {
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "collectCoverageFrom": [
    "src/**/*.{ts,tsx}",
    "!src/index.tsx",
    "!src/setupTests.ts",
    "!src/components/**/index.{ts,tsx}",
    "!src/components/**/*.stories.{ts,tsx}"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  }
}
```

And finally, we need to add the `coverage` to `.gitignore` and `.prettierignore`.

`.eslintignore`

```
# ...
coverage
```

`.prettierignore`

```
# ...
coverage
```

Before the testing, we need to add our setup file to initialize enzyme.

`src/setupTests.ts`

```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

With this config, we are able to run tests with snapshots and create coverage. Let's add a simple test to verify our setup.

`src/App.test.tsx`

```
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('runs correctly', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
```

Also, verify coverage report with `yarn coverage`.

## Step 8: Enabling hot reloading

We want to take advantage of hot reloading and don't want to lose React's current state. In order to do that we can use react hot loader. Since, we use react-starter and don't want to eject it, we need to use `customize-cra` package.

```
yarn add react-app-rewired customize-cra @hot-loader/react-dom --dev
```

After the installation we need to update `package.json` scripts to use `react-app-rewired`

```
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test",
"eject": "react-app-rewired eject"
```

Now, we can install react-hot-loader.

```
yarn add react-hot-loader
```

Also we need to update hot reloader config.
`src/index.tsx`

```
import { setConfig } from 'react-hot-loader';

setConfig({
  ignoreSFC: true,
  pureRender: true,
});
```

In order to update babel config for hot loader, we need to create a `config-overrides.js` file on the root.

```
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { override, addBabelPlugin, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addBabelPlugin('react-hot-loader/babel'),
  addWebpackAlias({
    'react-dom': '@hot-loader/react-dom',
  }),
);
```

Lastly, we need to use hot HOC.
`src/App.tsx`

```
import React from 'react';
import { hot } from 'react-hot-loader/root';

export default hot(App);
```

## Step 9: Organizing Folder Structure

Our folder structure should look like this;

```
src/
├─ App.test.tsx
├─ App.tsx
├─ __snapshots__/
│  ├─ App.test.tsx.snap
├─ components/
│  ├─ atoms/
│  │  ├─ Button/
│  │  │  ├─ Button.scss
│  │  │  ├─ Button.stories.tsx
│  │  │  ├─ Button.test.tsx
│  │  │  ├─ Button.tsx
│  │  │  ├─ __snapshots__/
│  │  │  │  ├─ Button.test.tsx.snap
│  │  │  ├─ index.tsx
│  ├─ molecules/
│  ├─ organisms/
│  ├─ decorators/
├─ assets/
│  ├─ images/
│  ├─ fonts/
├─ setupTests.ts
├─ routes/
│  ├─ Favorite/
│  │  ├─ Favorite.scss
│  │  ├─ Favorite.test.tsx
│  │  ├─ Favorite.tsx
│  │  ├─ index.ts
│  │  ├─ tabs/
│  │  │  ├─ Courses/
│  │  │  │  ├─ Courses.scss
│  │  │  │  ├─ Courses.test.tsx
│  │  │  │  ├─ Courses.tsx
│  │  │  │  ├─ index.ts
│  │  │  ├─ Teachers/
│  │  │  │  ├─ Teachers.scss
│  │  │  │  ├─ Teachers.test.tsx
│  │  │  │  ├─ Teachers.tsx
│  │  │  │  ├─ Teachers.ts
│  ├─ HomePage/
│  │  ├─ HomePage.scss
│  │  ├─ Home.test.tsx
│  │  ├─ Home.tsx
│  │  ├─ index.ts
│  ├─ index.ts
├─ index.tsx
├─ react-app-env.d.ts
├─ styles/
│  ├─ index.scss
├─ utils/
│  ├─ createRandomString.test.ts
│  ├─ createRandomString.ts
```

## Step 10: Install StoryBook

We need to initialize the Storybook on our project.

```
npx -p @storybook/cli sb init --type react
```

We also need to add `info` addon and `react-docgen-typescript-loader` package to show component props on our stories (Optional but recommended).

```
yarn add @storybook/addon-info react-docgen-typescript-loader --dev
```

We have to use the custom Webpack config in full control mode, extending default configs by creating a `webpack.config.js` file in our Storybook configuration directory (by default, it’s `.storybook`):

`.storybook/webpack.config.js`

```
module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('babel-preset-react-app')],
        },
      },
      require.resolve('react-docgen-typescript-loader'),
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
```

Since we use `typescript`, we can change the file extensions (`addons` and `config`) to `.ts` in `.storybook` folder. Then we need to update storybook config to register info addon, and stories directory.

`.storybook/config.ts`

```
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories() {
  addDecorator(withInfo);
  req.keys().forEach(req);
}

configure(loadStories, module);
```

We will place the stories inside component folders, you can delete the `stories` folder which is created by storybook initialization process.

Let's create a story for our Button component.

`src/components/Button/Button.stories.tsx`

```
import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button primary>Primary Button</Button>)
  .add('Secondary', () => <Button secondary>Secondary Button</Button>);
```

Run storybook

```
yarn storybook
```

## Step 11: Install Router

As usual, we want to use react-router for routing.

```
yarn add react-router-dom
yarn add @types/react-router-dom --dev
```

Then, we need to encapsulate our root component with BrowserRouter.

```
// src/index.tsx

import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

setConfig({
  ignoreSFC: true,
  pureRender: true,
});

const Root: FunctionComponent = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
```

```
// src/routes/Routes.tsx

import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Feed from './Feed';

const Routes: FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/feed" exact component={Feed} />
  </Switch>
);

export default Routes;
```

```
// src/App.tsx

import React, { FunctionComponent, Fragment } from 'react';
import { hot } from 'react-hot-loader';

import Routes from './routes';

const App: FunctionComponent = () => (
  <Fragment>
    <header>Header</header>
    <Routes />
    <footer>Footer</footer>
  </Fragment>
);

export default hot(module)(App);
```

## Step 12: Enable code splitting

We want to make route based code-splitting in order to prevent a huge bundled asset. When we done with this, only relevant assets will be loaded by our application. Let's install `react-loadable`.

```
yarn add react-loadable
yarn add @types/react-loadable --dev
```

Now, let's convert our routes to dynamically loaded.

```
// src/routes/Home/index.ts

import Loadable from 'react-loadable';

import Loading from '../../components/Loading';

const LoadableHome = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
});

export default LoadableHome;
```

```
// src/routes/Feed/index.ts

import Loadable from 'react-loadable';

import Loading from '../../components/Loading';

const LoadableFeed = Loadable({
  loader: () => import('./Feed'),
  loading: Loading,
});

export default LoadableFeed;
```

## Step 13: Adding CircleCI config

We can create a CircleCI pipeline in order to CI / CD.

```
# .circleci/config.yml

version: 2
jobs:
  build_dependencies:
    docker:
      - image: circleci/node:10
    working_directory: ~/repo
    steps:
      - checkout
      - attach_workspace:
          at: ~/repo
      - restore_cache:
          keys:
            - dependencies-{{ checksum "package.json" }}
            - dependencies-
      - run:
          name: Install
          command: yarn install
      - save_cache:
          paths:
            - ~/repo/node_modules
          key: dependencies-{{ checksum "package.json" }}
      - persist_to_workspace:
          root: .
          paths: node_modules

  test_app:
    docker:
      - image: circleci/node:10
    working_directory: ~/repo
    steps:
      - checkout
      - attach_workspace:
          at: ~/repo
      - run:
          name: Lint
          command: yarn lint
      - run:
          name: Format
          command: yarn format:check
      - run:
          name: Test
          command: yarn test
      - run:
          name: Coverage
          command: yarn coverage

workflows:
  version: 2
  build_app:
    jobs:
      - build_dependencies
      - test_app:
          requires:
            - build_dependencies
```

After that we need to enable CircleCI for our repository.

## Step 14: Auto-deploy to Surge.sh

First of all, we need to retrieve our Surge.sh token.

```
surge token
```

After copying the value, we need to add it as a dev dependency.

```
yarn add surge --dev
```

We need to add surge token to CircleCI as an environment variable for our project. Please update project name in the url;

[https://circleci.com/gh/Ideallca/{PROJET_NAME}/edit#env-vars](https://circleci.com/gh/Ideallca/{PROJET_NAME}/edit#env-vars)

On the page, we'll add SURGE_LOGIN and SURGE_TOKEN envs with the email and token we got before. We're almost ready. Let's update our CircleCI config.

```
# .circleci/config.yml

version: 2
jobs:
  build_dependencies:
    docker:
      - image: circleci/node:10
    working_directory: ~/repo
    steps:
      - checkout
      - attach_workspace:
          at: ~/repo
      - restore_cache:
          keys:
            - dependencies-{{ checksum "package.json" }}
            - dependencies-
      - run:
          name: Install
          command: yarn install
      - save_cache:
          paths:
            - ~/repo/node_modules
          key: dependencies-{{ checksum "package.json" }}
      - persist_to_workspace:
          root: .
          paths: node_modules

  test_app:
    docker:
      - image: circleci/node:10
    working_directory: ~/repo
    steps:
      - checkout
      - attach_workspace:
          at: ~/repo
      - run:
          name: Lint
          command: yarn lint
      - run:
          name: Format
          command: yarn format:check
      - run:
          name: Test
          command: yarn test
      - run:
          name: Coverage
          command: yarn coverage

  deploy_app:
    docker:
      - image: circleci/node:10
    working_directory: ~/repo
    steps:
      - checkout
      - attach_workspace:
          at: ~/repo
      - run:
          name: Deploy
          command: yarn deploy

workflows:
  version: 2
  build_app:
    jobs:
      - build_dependencies
      - test_app:
          requires:
            - build_dependencies
      - deploy_app:
          requires:
            - test_app
          filters:
            branches:
              only: master
```

Let's add deploy script to our package.json.

```
"deploy": "sh deploy.sh"
```

Finally, we need to create a deploy.sh file.

```
echo 'Building application...'
yarn build

echo 'Copying index.html as 404.html'
cp build/index.html build/404.html

echo 'Deploying...'
node_modules/.bin/surge --project ./build --domain cra-starter.surge.sh

echo 'Deployed 🚀'
```

> NOTE: Of course, you can replace Surge.sh with anything else. For this, you only need to update Surge.sh parts.

## Step 15: Github Settings

We want to protect our `develop` and `master` branches. Also, we want to make sure our test passes and at lest one person reviewed the PR. In order to do that, we need to update branch protection rules like this in GitHub.

## Step 16: Final Touches

We are ready to develop our application. Just a final step, we need to update our README.md to explain what we add a script so far.

```
This project was set up with following [CRA Recipe](https://github.com/Ideallca/react-starter).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will hot reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn coverage`

Launches coverage reporter. You can view the details from `coverage` folder.

### `yarn lint`

Runs ESLint and StyleLint. If any lint errors found, then it exits with code 1.

### `yarn format`

Formats TypeScript and Sass files.

### `yarn format:check`

Checkes if any formatting error has been made.

### `yarn storybook`

Launches Storybook application.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn deploy`

Deploys app to given platform according to instuctions in `deploy.sh`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
```

## Step 17: Starting to Development 🎉

Congrats! Now we can start to develop our React Application. 🚀
