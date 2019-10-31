# [Rules of Thumb. - Computer Science](http://www.wou.edu/las/cs/csclasses/cs161/Lectures/rulesofthumb.html)

### [Live demo of the project](https://star-wars-react-master-class.netlify.com)

##### To login into the project add credentials: email: demo@st6.io , password: demo1234

##### GraphQL Playground uder https -> [star-wars-graphql-playground](https://swapp.st6.io/graphql)

# [React articles](#articles-react)

# ReactMasterClass

## Content

### [React Advanced](#react-advanced) - [Video](https://youtu.be/zlpYShDdY_c)

- [Component](#component)
- [JSX JavaScriptXML](#jsx-javascriptxml)
- [Component Re-render Causes](#component-re-render-causes)
- [Presentational Components(Dumb, Skinny)](#presentational-components-or-dumb-or-skinny)
- [Container Components(Smart, Fat)](#container-components-or-smart-or-fat)
- [What are refs?](#what-are-refs)
- [Controlled vs Uncontrolled Form Components](#controlled-vs-uncontrolled-form-components)
- [Lifting the state](#lifting-the-state)
- [High order components](#high-order-components)
- [Render Props](#render-props)
- [Inversion of control](#inversion-of-control)
- [React Context](#react-context)

### [Creating React Applications](#creating-a-react-application) - [Video](https://youtu.be/FNM-Dfdzlyw)

[create-react-app official page](https://create-react-app.dev/docs/getting-started)

- [Storybook](#storybook)
- [Testing React Components](#testing-react-components)
- [Git Hooks Husky Lint Stage and Cross Env](#git-hooks-husky-lint-stage-and-cross-env) - Deploying with CI 55min in Video
- [List of VS code extensions](#list-of-vs-code-extensions)
- [Shallow Render](#shallow-render)
- [Jest Enzyme addon](#jest-enzyme)
- [browserrl.ist - check supported browsers for the configuration in package.json at browserslist: {production}](https://browserl.ist/?q=%3E+0.2%25%2C+not+dead%2C+not+op_mini+all)

### [Modern react](#modern-react) - [Video](https://youtu.be/b8oV_qaqa4s)

- [Why hooks were invented and problems they solved](#why-hooks-were-invented-and-problems-they-solved)
- [What are hooks](#what-are-hooks)
- [Build-in Hooks](#build-in-hooks)
- [Rules for hooks](#rules-for-hooks)
- [Write you own hook](#write-you-own-hook)

### [Styling in React Video](https://youtu.be/ucYWB_fIDBY)

### [State managment in react - redux video](https://youtu.be/Yd7IJ6pKhf4)

### GrqphQL Introduction [Video](https://youtu.be/jage1ChvQEk)

- [Official tutorial for graphql](https://www.howtographql.com/)
- [graphql-introduction-graphql](#graphql-introduction)
- [traditional-rest-graphql](#traditional-rest)
- [resources-in-restgraphql](#resources-in-rest)
- [rest-principals](#rest-principals)
- [what-is-graphql](#what-is-graphql)
- [graphql-advantages-graphql](#graphql-advantages)
- [concepts-in-graphql-graphql](#concepts-in)
- [schema-definition-language-sdl](#schema-definition-language-sdl)
- [graphql-language-is-basically-about-selecting-fields-on-objects-graphql](#graphql-language-is-basically-about-selecting-fields-on-objects)
- [type-system](#type-system)
- [non-nullable-definition](#non-nullable-definition)
- [object-types](#object-types)
- [field-arguments](#field-arguments)
- [query-and-mutation-object-types](#query-and-mutation-object-types)
- [scalar-types](#scalar-types)
- [enumeration-types](#enumeration-types)
- [interfaces](#interfaces)
- [query-arguments](#query-arguments)
- [fields-aliases](#fields-aliases)
- [fragments-similar-to-spread-operator-in-js](#fragments-similar-to-spread-operator-in-js)
- [variables](#variables)
- [directives](#directives)
- [typename-field-it-is-metatype-data](#__typename-field-it-is-metatype-data)
- [mutations](#mutations)
- [retrospection-tool-for-extracting-information-about-our-schema](#retrospection-tool-for-extracting-information-about-our-schema)

### [Apollo GraphqQl Server and Client video](https://youtu.be/9qthkryYwNU)

### [Architecture in web applications video](https://youtu.be/KI1I3ZYng8k)

### React Advanced

[Video](https://youtu.be/zlpYShDdY_c)

#### Component

- Main building blocks: - **Reusability** and **Isolation**
- **Component props:** - **External** data coming from **parent to child**
- **Immutable** Accessed from **single object argument** for functional components

#### JSX (JavaScriptXML)

- Combines markup with logic. **JavaScript Expressions -> {}**
- produce React elements
- React Elements

- smallest building blocks
- plain object made with logic,Ex: const name="pax" React.createElemetn('div', {className: 'element'}, 'I am', name)
- in the Virtual DOM this React element is only a plain object => { type: 'div', props: { className: 'element', children: 'Some content pax' } }
- produces React elements
  [JSX in depth official documentation](https://reactjs.org/docs/jsx-in-depth.html)

#### Component Re-render Causes

- Props Change
- State Change
- Context Change\*

#### Presentational Components and Container Components

##### Presentational Components or Dumb or Skinny

- How things **Look**
- Usually renders **host(html elements in web, native elements in React Native(View, Text)**components
- No external dependencies
- Lack of knowledge about **data mutations** and **loading**
- They are Pure functions(when using functional components)
- No state

##### Container Components or Smart or Fat

- How things **Work**
- Usually no **host(html elements in web, native elements in React Native(View, Text)**components
- Linked to external providers(redux-connect, appolo-qraphql, etc.)
- Serves as **data** and **behavior**providers
- Usually stateful
- Complex logic is here

#### But Why? Presentation and Container Components

- Separation of concerns
- Better reusability
- Enforces Good Practices
- Makes Styling Easier
- The outcome will be: Small components, Easy to tests, Easy to reuse

#### What are refs

- Imperatively control child's behavior
- Child can be either DOM element or React Component
- Used for accessing child component instance throughout the component lifecycle
- Component should be mounted, to ref(instance of the element)

#### How to use refs?

- With functional components useRef()
- Pass the ref instance to an element ref attribute in render
- Control the rendered element via the ref instance reference
- Depending on the child type ref instance receives different object as current property

- HTML element - the instance of the underlying DOM element
- React Component - the instance of the mounted component
  [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)

#### Controlled vs Uncontrolled Form Components

[Article with examples: Controlled vs Uncontrolled](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)

##### Uncontrolled Form Components

- You don't have access to hooks beside componentDidMount()
- You should taka care of the internal state, instead of allowing React to do this for you
- Keep internal state
- Uncontrolled
- current value is **pulled** from the components using **ref**
- Defaults to HTML Form elements behavior
- **input**, **textarea**, **select**
- React doesn't recommend this pattern but it's useful when developers only care about the **final state** rather than the **intermediate state** of the component

##### Controlled Form Components

- Definition - In HTML, form elements such as input , textarea , and select typically **maintain** their **own state** and **update** it based on **user input**. ... An input form element whose value is controlled by React in this way is called a **“controlled component”.**
- React state (redux) becomes single source of truth
- Data is pushed to components using a prop (value/checked)
- React component controls the behavior of the rendered form onUserInput\*\*
- Input components whose value is controlled by React are called controlled components

#### Conclusions

##### uncontrolled/controlled

- one-time value retrieval (e.g. on submit) YES/YES
- validating on submit YES/YES
- instant field validation NO/YES
- conditionally disabling submit button NO/YES
- enforcing input format NO/YES
- several inputs for one piece of data NO/YES
- dynamic inputs NO/YES
- use uncontrolled componentns when there is no other way(ex: call native DOM function like focus() on input element)

#### Lifting the state

[Article: Lifting the state](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)
[Official Documentation](https://reactjs.org/docs/lifting-state-up.html)

- Each changeable data should have single source of truth
- Prefer top-down data flow instead of syncing state between interdependent components
- Initially, place the state as close as possible to the component in interest
- Lift the state up to the closest common ancestor for components requiring the same data
- Anything derivable/reducible from props or state, shouldn’t be stored in the state.

#### High order components

###### The Problems - Solved with HOCs, Render Props and Custom hooks

- Abstract Same Pattern Logics to be reused by Components
- Encapsulate Behaviors

#### High-Order Components(HOCs)

[Introduction to higher order components (HOC) in React](https://medium.com/@soorajchandran/introduction-to-higher-order-components-hoc-in-react-383c9343a3aa)
[Official Documentation: higher order components](https://reactjs.org/docs/higher-order-components.html)

- Inspired by higher-order functions
- Takes component as an argument and returns new component
- Composes the input component by wrapping it in a container component
- Doesn’t modify the input component

#### Caveats

- Don’t compose within the render method
- Static members should be hoisted
- Refs aren’t passed through
- Name collisions
- Indirections

#### Render Props

- Render Prop refers to a technique for sharing code between React components using a prop whose value is a function1
- Encapsulates Behavior
- Better Reusability
- Mind when using with PureComponent
  [Render Props official documentation](https://reactjs.org/docs/render-props.html)

##### Inversion of control

- see ContainerComponent implementation in Training/ReactAdvanced/Component/component

[Inversion of controle article](https://medium.com/@magnusjt/inversion-of-control-and-di-in-reactjs-and-redux-35161fcef847)

##### Inversion of Control Caveats

- Higher-level components become more complicated
- Might cause lower-level component to be more flexible than wanted
- Having multiple children needing same props

##### The Problem - Solved with React Context and Redux

- Same data necessary to different components at different nesting levels of the tree
- Passing data all the way from top to bottom
- Some intermediate components don’t care about the data
- Redundancy

#### React Context

- Context provides a way to pass data through the component tree without having to pass props down manually at every level
  Broadcast data and changes to all interested components down the tree.

##### **Common examples:**

- Accessing current locale
- Getting a theme styles
- Caching data
  [Context API official documentation](https://reactjs.org/docs/context.html)
  [When context replace redux](https://frontarm.com/james-k-nelson/when-context-replaces-redux/)

## Creating a react application

[Video](https://youtu.be/FNM-Dfdzlyw)

## [Content](#content)

#### CRA(create-react-app)

[Link to react-scripts with all commands: start, build, eject..](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/scripts)

- yarn - creating the app with yarn
- yarn global add create-react-app
- yarn create react-app swapp
- npm - creating the app with npm
- npm init react-app swapp
- npx - creating the app with npx
- npx create-react-app swapp

##### Starting the app

- yarn start
- npm start

##### Starting the tests

- yarn test
- npm test

#### Build the app for production

- yarn build

#### Ejecting your app

- yarn eject or npm eject
- Irreversible
- Reasons:
  - Manage the Build
  - Missing Features
  - Curiosity

#### Update react-script

- yarn upgrade react-script --latest

#### Presets

[babel-preset-react](https://babeljs.io/docs/en/babel-preset-react)

- Via .babelrc { "presets": ["@babel/preset-react"] }

#### Keynotes

- Webpack
- Eslint
- Styles and Assets
- Environment Variables
- Progressive Web Apps
- Jest

#### Webpack [official sait for webpack](https://webpack.js.org/)

- Builds Dependency Module Graph
- Picks up non-JS files via Loaders
- Bundle Optimizations via Plugins
- Code Splitting

#### Eslint [official sait for Eslint](https://eslint.org/)

##### A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

- Maintain code consistency
- Enforces Good Practices
- Simplifies PR Reviews
- eslint-plugin-react

#### Styling and Assets

- Webpack extends the concept of import
- Importing images, fonts, svgs. etc
- Importing Styles

#### CSS/SASS Styling

- Import CSS or SASS\* files as dependency
- Import CSS or SASS\* modules
- [name].module.{css,scss} - [Adding a CSS Modules Stylesheet](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
- Style scoping via unique classnames

#### Environmental Variables

- via Shell or .env
- Reserved Environment Variables (e.g. PORT)
- Custom Environment Variables
- Used for custom purposes (e.g. setting the backend server url)
- Must be **prefixed with REACT*APP*** (e.g. REACT_APP_BE_URL)

#### Progressive Web App

- Web Apps having specific set of characters:
  - Progressive
  - Responsive
  - Connectivity independent
  - App-like
  - Faster after initial loading
- Progressive by Default\*
- Service Worker

#### Best Practices

- Pin the Node.js version
- Opinionated Formatter
- Pre-commit hooks
- CI/CD

#### Pin the Node.js version

- Limits Hard to Reproduce Issues
- Ensures Node.js version consistency
- nvm, nvm-windows, nodist

#### Node Version Manager (nvm) [nvm git repo](https://github.com/nvm-sh/nvm)

- Install nvm
- echo [desired version] >> .nvmrc
- call "nvm use" - where the file is located folder
- [or set up automatic nvm use call](https://github.com/nvm-sh/nvm#automatically-call-nvm-use)

#### Opinionated Formatter

##### Prettier

- Resolves visual esthetics arguments
- Uses [cosmiconfig link](https://github.com/davidtheclark/cosmiconfig)
- Create format script
  **In package.json**
  "prettier": {
  "trailingComma": "all",
  "tabWith": 2,
  "semi": true,
  "singleQuote": true
  }
- Format with prettier all files that are listed, ex: {js,json, css, scss}
  "scripts": {
  ...
  "format": "prettier --write \"src/\*_/_.{js,json, css, scss}\""
  }

#### Git Hooks Husky Lint Stage and Cross Env

[CI with lint staged and husky pre commit - article](https://codeburst.io/continuous-integration-lint-staged-husky-pre-commit-hook-test-setup-47f8172924fc)

- **npm install --save-dev husky lint-staged cross-env**
- cross-env -[cross-env](https://www.npmjs.com/package/cross-env) - Run scripts that set and use environment variables across platforms
- husky - Husky can prevent bad git commit, git push and more dog woof! [husky git](https://github.com/typicode/husky)

- [lint-staged link](https://github.com/okonet/lint-staged) — Run linters on git staged files, Run linters against staged git files and don't let hankey slip into your code base!
  [prettier git repo](https://github.com/prettier/prettier)

- in package.json
  "husky" : {
  "hooks": {
  "pre-commit": "cross-env CI=true lint-staged",
  "pre-push": "npm test"
  }
  }

"lint-staged": {
"src/\*_/_.js": [
"prettier --write",
"eslint --max-warnings=0",
"yarn test --bail --findRelatedTests",
"git add"
]
}

- **netlify.toml** and the file into the project level with content:
- [build]
- base = "/"
- publish = "/build/"
- command = "yarn ci && yarn build"

#### Continuos Integration/Deployment

- Always use Pull/Merge Requests
- Run CI Build on each PR
- Deploy Automatically the master branch

#### Storybook

[storybook git repo](https://github.com/storybookjs/storybook)

## [Content](#content)

**Storybook is an open source tool for developing UI components in isolation**

- Build Components in Isolation
- Mock Hard to Reach Use Cases
- Document Use Cases as Stories
- Enhance with Addons

#### How to add Storybook?

- Init Storybook
- **npx -p @storybook/cli sb init**
- Start Storybook
- **yarn storybook**
- Start Storybook
- **yarn build-storybook**
- in package.json
  "scripts": {
  ...
  "storybook": "start-storybook -p 9009 -s public",
  "build-storybook": "build-storybook -s public
  }
  **netlify.toml - settings** -add the file with content for deploying
  [build]
  base = "/"
  publish = "/storybook-static/"
  command = "yarn ci && yarn build-storybook"

#### Storybook-Loading and extensions

- Loading Stories see the settings in -> .storybook/config.js
- must have extensions -> stories.js
- Adding Decorators
- Addons

#### Storybook syntax

##### Sending actions

- **sending action** in the storybook console in this case the name of the event is clicked(the event that was handled by action)
- import { action } from '@storybook/addon-actions';
- <Button onClick={action('clicked')}>

###### Adding decorators - 1h:12min

- in **.storybook/config.js**
- adding global decorator
- example: **addDecorator(story => <div style={{ textAlign: "center"}}>{story()}</div>)**
- in the example above the decorator will wrap the story in the div with these styles

##### Adding addon knobs - Storybook Addon Knobs allow you to edit props dynamically using the Storybook UI. You can also use Knobs as a dynamic variable inside stories in Storybook.

[addon-knobs link](https://www.npmjs.com/package/@storybook/addon-knobs)

- npm i @storybook/addon-knobs or yarn add @storybook/addon-knobs --dev
- addon should be added in .storybook/addons.js like this: **import '@storybook/addon-knobs/register';**
- then import in .storybook/config.js : **import { withKnobs } from '@storybook/addon-knobs'** and then wrrapped it in decorator: addDecorator(withKnobs);
- check more complex example with meme-generator: **1h:18min**

#### Testing React Components

- Capture Regressions
- Ensure Proper Visual Content
- Validate UX
- Documentation
- Encourages High Quality Code

## [Content](#content)

#### Jest [Jest official site](https://jestjs.io/)- 1h:35min

- **Jest is a delightful JavaScript Testing Framework with a focus on simplicity.**
- Fast and Safe
- Code Coverage
- Mocking API
- GOOD Exceptions
- Great Documentation

#### Configuration Jest

- Little to None
- Options Config
- package.json or jest.config.js
- Filename Conventions
- .js files in **tests** folders
- .test.js files
- .spec.js files
- Global Setup File:
- src/setupTests.js - in this file we can mock external API globally for the whole project
  **in package.json**
  "jest": {
  "snapshotSerializers": [
  "enzyme-to-json/serializer"
  ],
  "collectCoverageFrom": [
  "src/**/*.{js,jsx}",
  ],
  "coverageThreshold": {
  "global": {
  "branches": 100,
  "functions": 100,
  "lines": 100,
  "statements": 100
  }
  }
  }

#### Jest Basic API

- describe - grouping scoping
- test/it - tests
- beforeAll/afterAll - one time scope/repeating scope
- beforeEach/afterEach - repeating before/ after every test
- expect(actual).matcher(expected) - assertion

#### Test in Comopnents

- Smoke Tests
- Input - Output
- Behavior

#### How we test Components

- enzyme
- React Testing Libraries

#### Enzyme [official site of enzyme](https://airbnb.io/enzyme/)

- Shallow Rendering - usualy for container components only to check if the compoenent is rendered
- Mount (Full) Rendering - for Integration tests

#### Shallow Render

- Start at 1h: 52min
- **Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components**
- Testing components in isolation
- Container components
- Documenting Behavior
- Unit Testing
- Using shallow API
- creates ShallowWrapper
- componentDidMount and componentDidUpdate

#### Mount Render

- **Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs or need to test components that are wrapped in higher order components**
- Testing components integration
- Presentational Components
- Testing DOM elements interactions
- Browser-Like Environment
- Integration Testing
- Using mount API
- creates ReactWrapper
- mounts the component in the DOM

#### Enzyme drawbacks

- Allows testing implementation details
- Relying on non-public interface
- Depending Components’ Names
- Asserting Component State
- Invoking Function Props

##### jest-enzyme

- [jest-enzyme official site](https://www.npmjs.com/package/jest-enzyme)
- import 'jest-enzyme' in setupTests.js
- receiving a lot of good methods like toExist(), toHaveProp(), toHaveClassName(), toHaveValue() .etc..

#### React Testing Library

- **We try to only expose methods and utilities that encourage you to write tests that closely resemble how your web pages are used**
- Builds on top of DOM Testing Library1
- Light-weight
- Works with actual DOM nodes

#### Mocking

- **Mock is an imitation, usually of lesser quality**
- **Mock objects are simulated objects that mimic the behavior of real objects in controlled ways, most often as part of a software testing initiative**
- Isolate dependencies outside of our control
- Ensure we have passing tests

#### What do we want to mock

- Network (API) calls
- Date-related stuff
- Environment (e.g. env vars)
- Behaviors/Objects that aren’t target of the current test
- Timers

#### Mocking API - 2h:19min

- jest.fn([implementation])1 - creates unused mocked function
- jest.spyOn(object, methodName)2 - wraps object[methodName] in mock function and returns the later
- mockFn.methods

#### Mocking Timers

- jest.useFakeTimers() - Instructs Jest to use fake versions of the standard timer functions
- jest.runAllTimers() - Exhausts both the macro-task queue and the micro-task queue
- jest.advanceTimersByTime(ms) - Executes only queued task in the macro task queue
- jest.runOnlyPendingTimers() - Executes only the macro-tasks that are currently pending

#### Best Practices

- Start with snapshot tests
- Inputs + Simulated Events = Output
- Use helper functions
- Place tests as close as possible to the implementation
- Changing implementation details (refactoring) should rarely cause a test to fail.

## [Content](#content)

#### List of VS code extensions

- code --install-extension andys8.jest-snippets
- code --install-extension antmdvs.vscode-react-hooks-snippets
- code --install-extension azemoh.one-monokai
- code --install-extension bungcip.better-toml
- code --install-extension christian-kohler.npm-intellisense
- code --install-extension christian-kohler.path-intellisense
- code --install-extension dbaeumer.vscode-eslint
- code --install-extension DotJoshJohnson.xml
- code --install-extension dsznajder.es7-react-js-snippets
- code --install-extension eamodio.gitlens
- code --install-extension EditorConfig.EditorConfig
- code --install-extension eg2.vscode-npm-script
- code --install-extension EQuimper.react-native-react-redux
- code --install-extension esbenp.prettier-vscode
- code --install-extension formulahendry.code-runner
- code --install-extension jasonnutter.search-node-modules
- code --install-extension jeremyrajan.webpack
- code --install-extension kumar-harsh.graphql-for-vscode
- code --install-extension mgmcdermott.vscode-language-babel
- code --install-extension msjsdiag.debugger-for-chrome
- code --install-extension msjsdiag.vscode-react-native
- code --install-extension Orta.vscode-jest
- code --install-extension redhat.vscode-yaml
- code --install-extension streetsidesoftware.code-spell-checker
- code --install-extension timothymclane.react-redux-es6-snippets
- code --install-extension uloco.theme-bluloco-light
- code --install-extension vscode-icons-team.vscode-icons
- code --install-extension waderyan.babelrc
- code --install-extension xabikos.JavaScriptSnippets
- code --install-extension xabikos.ReactSnippets
- code --install-extension yzhang.markdown-all-in-one

#### Modern React

[Frustrations with hooks](https://blog.logrocket.com/frustrations-with-react-hooks/)

#### React hooks

##### Why hooks were invented and problems they solved

- Reusing logic - desired
- Huge components - problem
- Confusing classes with React Class Components - problem
- Minified version won't minify method names
- Unused methods won't get stripped out
- Difficult with hot reloading and complier optimization

#### What are hooks

- Hooks are regular JavaScript functions that let you use React features (like state)
- Adoption Strategy: 1. No breaking changes 2. Minimum increase in package size ~ 1.5kb

##### Build-in Hooks

###### useState => example: const [count, setCount] = useState(0), setCount is function for update the state(in the example count)

###### useEffect

- Perform side effect from a function - data fetching, subscriptions, manual change of the DOM
- Serves the same purpose as componentDidMount, componentDidUpdate and componentWillUnmout
- Let's you specify how to 'clean up' by returning function
- Optimizing Performance

###### useLayoutEffect

- Runs synchronously immediately after React has performed all mutations - Pretty much like useEffect but runs synchronously
- Useful for DOM measurements

###### useRef

- returns reference to the element that **useRef** is deployed
- useMemo - recomputes the memoized value when one of the dependencies has changed
- Ex: const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]) - useful when fetching data only at certain moments not every time when the component is rendered

###### useContext

- Accepts a context object(the value returned from React.createContext) and returns the current context value for that context - usually used for themes
- Ex: **const context = useContext(ThemeContext), const ThemeContext = React.createContext({color: 'dark'}), <-App value={context}>App-> => Then use it in every component : const theme = useContext(ThemeContext), you should import ThemeContext whenever you want to use it** Change the value of the context only at highes level of you app where you included in the **value prop**

##### Rules for hooks

- Do not call hooks inside of conditional(if, switch) statements or for, while loops. Since all hooks are stored in something like an array with all hooks waiting to be resoled and if the hooks is inside of a if statement or while loop it can happened that the order of the hooks are changed caused of resolving some other hook instead of the disered one because your hook is inside of while loop or if statement.
- Only call hooks at the top level of your React functions
- Only Call Hooks from **React Functions**
- To enforce rules automatically use eslint-plugin-react-hooks

##### Write your own hook

- Lets you extract extract component logic into reusable functions
- A custom Hook is a JavaScript function whose name starts with 'use' and that may call other Hooks inside of it usually **useState(used for creating local isolated state for the custom hook)** and **useEffect(for using the cycle state of the components that using this custom hook)**

##### Example:

- const useWindowSize = () => {
- const [size, setSize] = useState(window.innerWidth);
- useEffect(() => {
-        const handleResize = () => {
-            setSize(window.innerWidth);
-        };
-        window.addEventListener("resize", handleResize);
-        return () => {
-            window.removeEventListener("resize", handleResize);
-        };
- });
- return size;
  \*};

##### Demo hooks ~ 32 min - 50 min

#### React router

##### Philosophy

- Static Routing - routes are declared and execute before the app starts/renders
- Dynamic routing - routing takes place as your app is rendering not in a configuration
  or convention outside of a running app - Example: if you have in your app functionality for mobile devices and desktop devices you can easily make a condition in what cases which one should be called(in the render props of the Route)

##### Routers

- [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start)
- **BrowserRouter** - uses in 90% of the cases
- Uses regular URL paths - http://example.com/your/page
- Wrapped around [browser's session history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) so you can have cross platform experience
- Requires server configurations(react-create-app is doing that for us)
- We can also create route that will communicate with the server and the html it will be returned from the server it is used for optimizations(when we do not want to load everything from the client and the size of the client app will go down)
- **HasRouter**
- Stores the current location in the hash portion of the URL http://example.com/#/your/page
- No limitations of supported brwosers

##### Route Matchers - in the Route component

- Renders some UI when its path matched the current URL
- Render methods props - **component**, **render**, **children**
- in **component** methods props is important not to have callback arrow functions since when this route is rendered every time React will create a new instance of the component that is accepted
- Route props - **match**, **location**, **history**
- Ex:
- <Route path="/home" render={() => "div" Home "/div"}>
- <Route
- path={to}
- children={({match}) => (
- "li" className={match ? 'active': ''}>
- <Link to={to} {...rest} />
- "/li"
- )}>

##### Router Props

###### **match** - contains information about how a <Route path /> matched the URL, a list of these properties are:

- **params** - Key/value pairs parsed from the URL corresponding to the dynamic segments of the path
- **isExact** - true if the entire URL was matched (no trailing characters)
- **path** -The path pattern used to match. Useful for building nested Routes
- **url** - The matched portion of the URL. Useful for building nested Links
- **location** - represent where the is now, where you want it to go, or even where is was
  the **value of the location property** is a object like this one => **{ key: 'ac3df4', pathname: '/somewhere', search: '?some=search-string', hash: '#howdy', state: { [userDefined]: true } }** - the **state** object is the place where we can add some information that we would like to use in the navigation

###### **history** - wrapper around the several different implementations for managing session history in JavaScript in various environment: history property is mutable object

- **length** - The number of entities in the history stack(all the history paths are entries in this array like structure, length is the number of the paths that are in history stack)
- **action** - The current actions (PUSH, REPLACE or POP) - with this action we can realise what user has done. The action is **PUSH** when you call **history.push**, **REPLACE** when you call **history.replace**, and **POP** on **initial load**, when you call **history.(go|goBack|goForward)**, and when you navigate using the **browser's forward/back** buttons.
- **location** - The current location stack. Only available in browser and memory history
- **push(patch,[state])** - Pushes a new entry onto the history stack - This is how we make navigation in our app
- **go(n)** - Moves the pointer in the history stack by n entries
- **replace(path, [state])** - Replace the current entry on the history - This is how we make redirect good suit for Login
- **goBack()** - Equivalent to **go(1)**
- **goForward()** - Equivalent to **go(-1)**

###### **withRouter**(HOC) - passes **match**, **location** and **history** props to the wrapper component whenever it renders: import {withRouter} from 'react-router'

- const ShowTheLocation () => <Navigation>Login<Navigation>; const ShowTheLocationWithRouter = withRouter(ShowTheLocation)

##### Switch - when we wrap our Routes compoents the order of the Route compoentns is very important since when the Switch hit the first Route component it stops looking further

- Renders a router **exclusively**. In contrast, every Route that matches the location renders inclusively

##### React Navigation

- **Link** - Create links in your application
- **NavLink** - Special type of <Link> that can style itself as "active" when its to props matches the current location
- **Redirect** - Will navigate using its to prop
- Demo [Route authentication](https://reacttraining.com/react-router/web/example/auth-workflow) from the official documentation
- Demo in the video - ~ 1h: 13min - with small changes from the official documentation

##### React Router 5.1 - hooks are introduced

- **Ex**: const BlogPost ({ match }) => { const slug = match.props } === const BlogPost() { const { slug } = useParams()} - analogical is for all React hooks
- useParams()
- useHistory()
- useLocation()

#### Code splitting [Official documentation Code Splitting](https://create-react-app.dev/docs/code-splitting) - Instead of downloading the entire app before users can use it, code splitting allows you to split your code into small chunks which you can then load on demand.

##### Introduction

- Bundling - following imported files and merging then into single file : a "bundle" - basically Bundling is: a **tool(Webpack in React)** going into the files in your application and creating **Dependency Graph** and then all files based on this Dependency Graph are merged into one file called "bundle". Bundling is very helpful for optimizations and Webpack is stripping the files that are not used.
- **Bundling is very helpful** for areas where the **internet** is with **bad quality** and the need for loading less is on demand
- Laziness - an evaluation strategy which delays the evaluation of an expression until its value is needed
- Code Splitting - Slice a code base into smaller chunks that can be loaded on-demand

##### React.Lasy

- Dynamic import => **Ex with Dynamic imports** import("math").then(math => console.log(math.add(16, 26))); - when Webpack go through files and see this syntax Webpack is putting this file in separate bundle
- **Ex without dynamic imports** => import { add } from './match'
- React.lazy
- **Ex without React.lazy** import OtherComponent from './OtherComponent;
- **Ex with React.lazy** const OtherComponent = React.lazy (() => import('./OtherComponent)); - this component will be load in the moment when we are going to rendered or when is needed

###### Suspense

- Allow us to show fallback content
- **Ex:**
- const OtherComponent = React.lazy(() => import('./OtherComponent'));
- const MyComponent = () => {
- return (
-     <>
-       <Suspense fallback={'div'...Loading'...div'}>
-         <OtherComponent>
-       <Suspense>
-     </>
- )
- }
- **fallback** property is a way to show different content on the screen during the time when <OtherComponent> is loading
- **Ex:**
- import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
- import React, { Suspense, lazy } from 'react';
- const Home = React.lazy(() => import('./routes/Home'));
- const About = React.lazy(() => import('./routes/About'));
- const App = () => {
-     <Router>
-       <Suspense fallback={'div'...Loading'...div'}>
-          <Switch>
-           <Route exact path='/' component={Home}>
-           <Route exact path='/about' component={About}>
-         </Switch>
-       <Suspense>
-     </Router>
- )
- }

##### React Profiler

- 1h:35min from the video
- [React Profiler official documentation](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)

###### Introduction

- Render phase - determines what changes need to be made to e.g. the DOM - is the moment when React decide what kind of changes needs to be applied to the DOM
- Commit phase - React applies any changes - the moment when React is applied the changes to the DOM
- Profiler ignores Render phase and working only with the Commit phase

### graphql-introduction

#### Content

- Traditional REST
- What is GraphQL
- Concepts in GraphQL

#### traditional-rest

- data is request from the client to the restful back-end through http protocol

#### resources-in-rest

- the idea is the everything it our system is called resource and fetch through url(end-point)
- There is not limit in the format of data that will be returned is can by xml, json ...

#### rest-principals

- Uniform interface -we always use the http verbs(GET, POST, PUT, PATCH DELETE)
- Stateless - each request is self-descriptive
- Clint-server - client should be separated from the server, so each of them can be developed individually
- Cashable - caching shall be applied to resources applicably and those resource should be explicitly marked as cashable

#### what-is-graphql

- New API standard that enables declarative data fetching
- Developed internally at Facebook in 2012 and open sourced in 2015
- Exposes a single endpoint (ass opposed to REST) and responds only with the data requested from the client
- Aims to provide more powerful and flexible alternative to REST

#### graphql-advantages

- provides declarative data retrieval istead of imperative
- remove overfetching and underfetching (n+1 problem)
- improves rapid development
- we ca get as much data as we want with a single request to the database

#### Concepts in GraphQl

- Type Schema Definition Language (SDL)
- Type system
- Queries
- Mutations
- Client
- Server

#### Schema definition language (SDL)

- GrapthQL has own type system that is used to define the schema of the API
- The syntax for writing schemas is called SDL
- Example: -> type Person { name: String! age: Int! posts: [Post!]! } ; type Post { type: String! author: Person! }
- When we have ! -> is non nullable -> it means that this field is required when we making queries. posts:[Post!]! is List(array) with Post type objects

#### GraphQL language is basically about selecting fields on objects

- Example: { person { id name } }
- The query starts from special "root" object
- From that object, select the person field
- For the object returned for the person field, select id and name

#### Type system

- Every GraphQL server defines a schema which describe the set of possible data that can be queried
- The schema answers the following questions
- What types can be queried?(e.g Person and Post)
- What fields/sub-fields can be selected?
- What is the actual type of a field?(e.g String, Int..)

#### Non-nullable definition

- By default, all types in GraphQL are nullable; the null value is a valid response for all of the above types. To declare a type that disallows null, the GraphQL Non‐Null type can be used. This type wraps an underlying type, and this type acts identically to that wrapped type, with the exception that null is not a valid response for the wrapping type. A trailing exclamation mark is used to denote a field that uses a Non‐Null type like this: name: String!.

#### Object types

- The basic components fo GraphQL schema are Object types
- It's just an object with fields
- Example: type Person { name: String! posts: [Post!]!}
- Person is GraphQL Object Type
- String! means that the name filed is of the type string and in non-nullable
- [Posts!]! means that the posts field is an array of non-nullable Post objects and that the array itself in non-nullable

#### Field arguments

- Every field can have aero or more arguments
- The arguments can be optionsl and required
- Passed by name (unlike function arguments in JS)
- Example: type Person { name: String! posts(first: Int = 3): [Post!]! }

#### Query and Mutation object types

- Special object types that act like the entry point of the API
- Query is mandatory for every schema(this is the root of our entry point and needs to be Query), Mutation is optional
- Example: query { person { name } } , type Query { person: Person } -> in th

#### Scalar types

- Scalar types are the leaves of the query(they don't have sub-fields)
- Int - A signed 32-bit integer
- Float - A signed double-precision floating-point value
- String - A UTF-8 character sequence
- Boolean - true or false
- ID - unique identifier used for caching

#### Enumeration types

- Special kind of scalar restricted to a particular set of values
- Example: enum PersonTYpe { USER ADMIN } => type Person { type: PersonType }

#### Interfaces

- Interfaces are abstract types that define set of fields
- Example interface Person { id: Int name: String }, type User implements Person { id: Int name: String } posts: [Post!]! }, type Admin implements Person { id: Int name: String adminRoles: [Role!]! }
- Example with the Schema above: query { person { id name } ... on User { posts { title } } ... on Admin { adminRoles } }
- response will be from the query above: { "data": { "persons" : [ "id": 1, "name": "User", "posts": [{"title": "Some post"}], "id": 2, "name": "Admin", "adminRoles": [{"name": "moderator"} ] } }

#### Query arguments

- In GraphQL query, every field can get it's own set of arguments
- Example: { person(id: 1) { name posts(title: "graphql") { id content } } }

#### Fields aliases

- It's possible to request the same field mulptiple times in a single query
- Example: { query { { person(id: 1) { name } person(id: 2) { name } } } } => It will become { query { { normalUser: person(id: 1) { name } adminUser: person(id: 2) { name } } } }

#### Fragments similar to spread operator in JS

- very useful in big queries with 200 - 300 fields
- Allows us to reuse parts of the query
- Definition of fragments Example: fragment PersonFields on Person { id name }, { query { normalUser: person(id: 1) { ... PersonFields } adminUser: person(id: 2) { ... PersonFields } } }

#### Variables

- Provides a way to remove the hard-coded query arguments
- The variables dictionary is passed in the body of the HTTP request
- Example: { query personWithPosts$id: Int!, $first: int) { person(id: $id) { name posts(first: $first) { title } } } } - and in the GraphiQL in the section of QUERY VARIABLES(DOWN LEFT SECTION) we adding the value of the id like this -> { "id": 1 }, the body of our post request will be { operationName: "personWithPosts", query: "{ person(id: $id) { name posts(first: $first) { title } } }", variable: { id: 1 } }

#### Directives

- Used to dynamically change the shape and structure of queries
- Example: query Person($id: Int, $withPost: Boolean!) { person(id: $id) { name posts @include(if: $withPosts) { name } } }
- A directive can be attached to any field or fragment inclusion
- Can affect the execution of the query in any way the server desires
- The GraphQl Spec includes two directives @include(if: Boolean) - it will include this field if the argument is true and @skip(if: Boolean) - it will skip if the argument is true
- Server implementations may have some experimental directives

#### \_\_typename field-it-is-metatype-data

- return the type of a field
- It is useful when we need the type field for rendering purposes in the project will need it!
- In some cases we need to know the return type of a field
- Include the **\_\_typename** field at any point of the query to get the return type of that field
- Example: { query { **typename id { { normalUser: person(id: 1) { ... PersonFields } } { **typename id adminUser: person(id: 2) { ... PersonFields } } } } } and the response will be something like: { "data": { "persons" : [ { "**typename": "User", "id": 1, "name": "User", "posts": [{"title": "Some post"}] }, {"**typename": "Admin", "id": 2, "name": "Admin", "adminRoles": [{"name": "moderator"} ] } } }

#### Mutations

- By convention Queries only fetch data and don't couse side effects
- For side effects and data chages use Mutations
- Example: type PersonInput { name: String age: Int } , mutation CratePerson($input: PersonInput) { createPerson(input: $input) { id name } } - in the curly brackets this is the result returned from the back-end we can start using the same syntax when we writing a query and use the result(id and name) in this query

#### Retrospection - tool for extracting information about our schema

- \_\_schema { types queryType mutationType subscriptionType directives } - returns all types custom and build-in from our schema
- Example: { **schema { types { name } } } -> response will be: { "data": { "**schame": { "types" : [ { "name": "Query"}, { "name": "Person" }, ... ] } } }
- \_\_type { kind name description fields interfaces possibleTypes enumValues inputFields ofType } - returns information about type in our Schema
- Example: { **type(name: "User") { name interfaces { name } } } -> response will be: { "data": { "**type": { "name": "User", "interfaces": [ { "name": "Person" } ] } } }
- more examples from the video ~ 1h of the video

#### Articles-React:

- [testing-react-hook-state-changes-2oga](https://dev.to/theactualgivens/testing-react-hook-state-changes-2oga)
- [environments-with-create-react-app-7b645312c09d](https://medium.com/@tacomanator/environments-with-create-react-app-7b645312c09d)
- [can-i-dispatch-multiple-actions-from-redux-action-creators/](http://jamesknelson.com/can-i-dispatch-multiple-actions-from-redux-action-creators/)
- [my-journey-to-make-styling-with-material-ui-right-6a44f7c68113](https://codeburst.io/my-journey-to-make-styling-with-material-ui-right-6a44f7c68113)
- [can-you-console-log-in-jsx](https://medium.com/javascript-in-plain-english/can-you-console-log-in-jsx-732f2ad46fe1)
- [internationalizing-a-front-end-application](https://medium.com/rd-shipit/internationalizing-a-front-end-application-88f1baae3d82)
- [react-hooks-cheat-sheet-unlock-solutions-to-common-problems](https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/)
- [a-complete-guide-to-useeffect](https://overreacted.io/a-complete-guide-to-useeffect/)
- [container-vs-presentational-components-in-react](https://medium.com/@yassimortensen/container-vs-presentational-components-in-react-8eea956e1cea)
- [react-hooks-fetch-data](https://www.robinwieruch.de/react-hooks-fetch-data)
- [understanding-jest-mocks](https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c)
- [react-graphql-apollo-tutorial](https://www.robinwieruch.de/react-graphql-apollo-tutorial)
- [The definitive guide to redux-persist](https://blog.reactnativecoach.com/the-definitive-guide-to-redux-persist-84738167975)
- [How to use Redux with React Hooks](https://itnext.io/how-to-use-redux-with-react-hooks-5422a7ceae6e)

#### JS must:

- [Inheritance_and_the_prototype_chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Arrow_functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

#### Other-articles

- [guide-docker-commands-examples](https://afourtech.com/guide-docker-commands-examples/)
- [practical-tips-for-cheating-at-design](https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886)
- [better-commit-messages-with-a-gitmessage-template](https://thoughtbot.com/blog/better-commit-messages-with-a-gitmessage-template)
- [an-introduction-to-environment-variables-and-how-to-use-them](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa)
- [process-env-what-it-is-and-why-when-how-to-use-it-effectively](https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7)
- [introduction-of-react-js-debugging](https://blog.cloudboost.io/introduction-of-react-js-debugging-f14a3894afc)
- [intro-to-debugging-reactjs-applications](https://medium.com/@baphemot/intro-to-debugging-reactjs-applications-67cf7a50b3dd)
- [best-visual-studio-code-extensions-for-programmers](https://www.ubuntupit.com/best-visual-studio-code-extensions-for-programmers/)
- [easy-configuration-graphql-server-with-apollo-server-2-and-firebase-cloud-functions-google-cloud-4c1b46dd98f6](https://medium.com/@choudlet/easy-configuration-graphql-server-with-apollo-server-2-and-firebase-cloud-functions-google-cloud-4c1b46dd98f6)
- [graphql-apollo-server-tutorial](https://www.robinwieruch.de/graphql-apollo-server-tutorial)
- [github-authorization](https://moonhighway.com/github-authorization)
- [12-tips-for-writing-clean-and-scalable-javascript](https://blog.logrocket.com/12-tips-for-writing-clean-and-scalable-javascript-3ffe30abfe20/)
- [wtf-per-minute-actual-measurement-for](http://reviewthecode.blogspot.com/2016/01/wtf-per-minute-actual-measurement-for.html)
  https://12factor.net/
- [The Twelve Factors principles](https://12factor.net/)
- [mocking-the-current-date-in-jest-tests](https://codewithhugo.com/mocking-the-current-date-in-jest-tests/)
- [locking-down-a-project-to-a-specific-node-version-using-nvmrc-and-or-engines](https://medium.com/@faith__ngetich/locking-down-a-project-to-a-specific-node-version-using-nvmrc-and-or-engines-e5fd19144245)
- [form-validation-with-hook-in](https://medium.com/@bruce1049/form-validation-with-hook-in-3kb-c5414edf7d64)

# Rules of thumb

- Computer Science 1
-

## Important Programming "Rules of Thumb"

-

### 1) K.I.S.S. (Keep It Simple, Stupid)

-

- There are many areas where this rule applies in programming. Two very important ones are:
-
- a) Subprogram behavior and length: Subprograms should do precisely ONE conceptual task and no more. The length of a subprogram should allow it to be easily visually _ inspected; generally no more that one page in length. Similarly you should generally not mix input/output and algorithmic logic in the same subprogram; it is alway a goal _ to separate I/O from logic.
-
- b) If a problem is can be decomposed into two or more independently solvable problems, then solve them independently and after you have implemented and tested the \* independent solutions, then combine them into the larger result. This is sometimes known as "Gall's Law":
-
- "A complex system that works is invariably found to have evolved from a simple system that worked. The inverse proposition also appears to be true: A complex system \* designed from scratch never works and cannot be made to work. You have to start over, beginning with a working simple system."
-

### 2) "Rule of Three" (code duplication)

-

- is a code refactoring rule of thumb to decide when a replicated piece of code should be replaced by a new procedure. It states that you are allowed to copy and paste the _ code once, but that when the same code is replicated three times, it should be extracted into a new procedure. The rule was introduced by Martin Fowler in his text _ "Refactoring" and attributed to Don Roberts.
-
- Duplication in programming is almost always in indication of poorly designed code or poor coding habits. Duplication is a bad practice because it makes code harder to _ maintain. When the rule encoded in a replicated piece of code changes, whoever maintains the code will have to change it in all places correctly. This process is _ error-prone and often leads to problems. If the code exists in only one place, then it can be easily changed there. This rule is can even be applied to small number of _ lines of code, or even single lines of code. For example, if you want to call a function, and then call it again when it fails, it's OK to have two call sites; however, if _ you want to try it five times before giving up, there should only be one call site inside a loop rather than 5 independent calls.
-

### 3) Ninety-ninety rule ( failure to anticipate the hard parts)

-

- The ninety-ninety rule is a humorous aphorism that states:
-
- "The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the \* development time."
- —Tom Cargill, Bell Labs
-
- That the total development time sums to 180% is a wry allusion to the notorious tendency of software development projects to significantly overrun their original schedules. _ It expresses both the rough allocation of time to easy and hard portions of a programming project and the cause of the lateness of many projects (that is, failure to _ anticipate the hard parts). In other words, it takes both more time and more coding than expected to make a project work.
-

### 4) Efficiency vs. code clarity (chasing false efficiency)

-

- Never sacrifice clarity for some perceived efficiency. One of the biggest mistakes that new programmers make is tweaking code to remove a couple of textual lines of high _ level code and replace it with a much more complex single line of code. This is commonly called "bit twiddling". Always remember that most compilers optimize code. _ Further, there is a corollary to the 90-90 rule known as the "Pareto Principle":
-
- In computer science, the Pareto principle can be applied to resource optimization by observing that 80% of the resources are typically used by 20% of the operations. In _ software engineering, it is often a better approximation that 90% of the execution time of a computer program is spent executing 10% of the code (known as the 90/10 law in _ this context).
-
- Given this knowledge, most "bit twiddling" will have no perceivable impact on the runtime of most programs as most of them will likely be in the 90% of code that has little _ impact on the run-time of the program. The real efficiency gains come from changing the order of complexity of the algorithm, such as changing from O(N^2) to O(NlogN) _ complexity. Keep your code clearly and cleanly written and it will usually be reasonably efficient. Occasionally, after the program is written and tested, it might prove _ to be slower than the problem specification calls for. On the these few occasions, and only after you have first optimized the complexity of the algorithm, then instrument _ or profile the code and find the 10% or less of the code that PROVABLY causes slow runtime and then optimize that small code segment.
-
- Comments on this topic from well respected computer scientists and software engineers:
-
- "More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason — including blind stupidity." — W.A. Wulf
-
- "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that _ critical 3%. A good programmer will not be lulled into complacency by such reasoning, he will be wise to look carefully at the critical code; but only after that code has _ been identified" — Donald Knuth
-
- "Bottlenecks occur in surprising places, so don't try to second guess and put in a speed hack until you have proven that's where the bottleneck is." — Rob Pike
-
- "The First Rule of Program Optimization: Don't do it. The Second Rule of Program Optimization (for experts only!): Don't do it yet." — Michael A. Jackson
-

### 5) Naming of things (subprograms and variables)

-

- In computer programming, a naming convention is a set of rules for choosing the character sequence to be used for identifiers which denote variables, types and functions \* etc. in source code and documentation. Reasons for using a naming convention (as opposed to allowing programmers to choose any character sequence) include the following:
-
- 1. to reduce the effort needed to read and understand source code which supports its maintainability
- 2. to enhance source code appearance (for example, by disallowing overly long names or unclear abbreviations)
-
- There are lots of naming conventions that are strongly argued for or against by various engineers; in reality these are mostly religious arguments. However, whatever you _ do, you should follow some consistent naming style. There is one thing that is common to most all naming conventions, and that is that the name should be descriptive of _ the contents, or a name that is in common programming practice for the language (such as using i, j, k for loop and array indexes).
-
- Commonly, subprograms should have verb/verb phrase names as a subprogram should specify one specific task (see KISS rule) which should be an activity description. Variables _ should have noun or adjective names as variables represent things or attributes of something. When choosing a name, if you have difficulty in coming up with a descriptive _ name this is an indication that your code needs further refactoring to improve the clarity of the design and the purpose of subprograms and variables.
