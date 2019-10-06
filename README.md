# ReactMasterClass

## Content

### [React Advanced](#react-advanced) [Video](https://youtu.be/zlpYShDdY_c)
  * [Component](#component)
  * [JSX (JavaScriptXML)](#jsx-(javascriptxml))
  * [Component Re-render Causes](#component-re-render-causes)
  * [Presentational Components(Dumb, Skinny)](#presentational-components-or-dumb-or-skinny)
  * [Container Components(Smart, Fat)](#container-components-or-smart-or-fat)
  * [What are refs?](#what-are-refs)
  * [Controlled vs Uncontrolled Form Components](#controlled-vs-uncontrolled-form-components)
  * [Lifting the state](#lifting-the-state)
  * [High order components](#high-order-components)
  * [Render Props](#render-props)
  * [Inversion of control](#inversion-of-control)
  * [React Context](#react-context)
### [Creating React Applications](#creating-a-react-application) [Video](https://youtu.be/FNM-Dfdzlyw)
[create-react-app official page](https://create-react-app.dev/docs/getting-started)
  * [Storybook](#storybook)
  * [Testing React Components](#testing-react-components)
  * [Git Hooks Husky Lint Stage and Cross Env](#git-hooks-husky-lint-stage-and-cross-env) - Deploying with CI 55min in Video
  * [List of VS code extensions](#list-of-vs-code-extensions)
  * [Shallow Render](#shallow-render)
  * [Jest Enzyme addon](#jest-enzyme)
  * [browserrl.ist - check supported browsers for the configuration in package.json at browserslist: {production}](https://browserl.ist/?q=%3E+0.2%25%2C+not+dead%2C+not+op_mini+all)
## React Advanced
[Video](https://youtu.be/zlpYShDdY_c)

#### Component
*   Main building blocks: - **Reusability** and **Isolation**
*   **Component props:** - **External** data coming from **parent to child**
*****   **Immutable***   Accessed from **single object argument** for functional components****

****

#### JSX (JavaScriptXML)
*   Combines markup with logic. **JavaScript Expressions -> {}**
*   produce React elements
*   React Elements

*   smallest building blocks
*   plain object made with logic,Ex: const name="pax" React.createElemetn('div', {className: 'element'}, 'I am', name)
*   in the Virtual DOM this React element is only a plain object => { type: 'div', props: { className: 'element', children: 'Some content pax' } }
*   produces React elements
[JSX in depth official documentation](https://reactjs.org/docs/jsx-in-depth.html)

#### Component Re-render Causes
*   Props Change
*   State Change
*   Context Change*

#### Presentational Components and Container Components

##### Presentational Components or Dumb or Skinny
*   How things **Look**
*   Usually renders **host(html elements in web, native elements in React Native(View, Text)**components
*   No external dependencies
*   Lack of knowledge about **data mutations** and **loading**
*   They are Pure functions(when using functional components)
*   No state

##### Container Components or Smart or Fat
*   How things **Work**
*   Usually no **host(html elements in web, native elements in React Native(View, Text)**components
*   Linked to external providers(redux-connect, appolo-qraphql, etc.)
*   Serves as **data** and **behavior**providers
*   Usually stateful
*   Complex logic is here

#### But Why? Presentation and Container Components
*   Separation of concerns
*   Better reusability
*   Enforces Good Practices
*   Makes Styling Easier
*   The outcome will be: Small components, Easy to tests, Easy to reuse

#### What are refs
*   Imperatively control child's behavior
*   Child can be either DOM element or React Component
*   Used for accessing child component instance throughout the component lifecycle
*   Component should be mounted, to ref(instance of the element)

#### How to use refs?
*   With functional components useRef()
*   Pass the ref instance to an element ref attribute in render
*   Control the rendered element via the ref instance reference
*   Depending on the child type ref instance receives different object as current property

*   HTML element - the instance of the underlying DOM element
*   React Component - the instance of the mounted component
[Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)
#### Controlled vs Uncontrolled Form Components
[Article with examples: Controlled vs Uncontrolled](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)

##### Uncontrolled Form Components
* You don't have access to hooks beside componentDidMount()
* You should taka care of the internal state, instead of allowing React to do this for you
* Keep internal state
* Uncontrolled
* current value is **pulled** from the components using **ref**
* Defaults to HTML Form elements behavior
* **input**, **textarea**, **select**
* React doesn't recommend this pattern but it's useful when developers only care about the **final state** rather than the **intermediate state** of the component

##### Controlled Form Components
* Definition - In HTML, form elements such as input , textarea , and select typically **maintain** their **own state** and **update** it based on **user input**. ... An input form element whose value is controlled by React in this way is called a **“controlled component”.**
* React state (redux) becomes single source of truth
* Data is pushed to components using a prop (value/checked)
* React component controls the behavior of the rendered form onUserInput**
* Input components whose value is controlled by React are called controlled components

#### Conclusions

##### uncontrolled/controlled
* one-time value retrieval (e.g. on submit) YES/YES
* validating on submit YES/YES
* instant field validation NO/YES
* conditionally disabling submit button NO/YES
* enforcing input format NO/YES
* several inputs for one piece of data NO/YES
* dynamic inputs NO/YES
* use uncontrolled componentns when there is no other way(ex: call native DOM function like focus() on input element)

#### Lifting the state
[Article: Lifting the state](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)
[Official Documentation](https://reactjs.org/docs/lifting-state-up.html)
* Each changeable data should have single source of truth
* Prefer top-down data flow instead of syncing state between interdependent components
* Initially, place the state as close as possible to the component in interest
* Lift the state up to the closest common ancestor for components requiring the same data
* Anything derivable/reducible from props or state, shouldn’t be stored in the state.
#### High order components

###### The Problems - Solved with HOCs, Render Props and Custom hooks 
* Abstract Same Pattern Logics to be reused by Components
* Encapsulate Behaviors

#### High-Order Components(HOCs)
[Introduction to higher order components (HOC) in React](https://medium.com/@soorajchandran/introduction-to-higher-order-components-hoc-in-react-383c9343a3aa)
[Official Documentation: higher order components](https://reactjs.org/docs/higher-order-components.html)

* Inspired by higher-order functions
* Takes component as an argument and returns new component
* Composes the input component by wrapping it in a container component
* Doesn’t modify the input component

#### Caveats
* Don’t compose within the render method
* Static members should be hoisted
* Refs aren’t passed through
* Name collisions
* Indirections

#### Render Props
* Render Prop refers to a technique for sharing code between React components using a prop whose value is a function1
* Encapsulates Behavior
* Better Reusability
* Mind when using with PureComponent
[Render Props official documentation](https://reactjs.org/docs/render-props.html)

##### Inversion of control
* see ContainerComponent implementation in Training/ReactAdvanced/Component/component

[Inversion of controle article](https://medium.com/@magnusjt/inversion-of-control-and-di-in-reactjs-and-redux-35161fcef847)

##### Inversion of Control Caveats
* Higher-level components become more complicated
* Might cause lower-level component to be more flexible than wanted
* Having multiple children needing same props

##### The Problem - Solved with React Context and Redux
* Same data necessary to different components at different nesting levels of the tree 
* Passing data all the way from top to bottom
* Some intermediate components don’t care about the data
* Redundancy

#### React Context
* Context provides a way to pass data through the component tree without having to pass props down manually at every level
Broadcast data and changes to all interested components down the tree.
##### **Common examples:**
* Accessing current locale
* Getting a theme styles
* Caching data
[Context API official documentation](https://reactjs.org/docs/context.html)
[When context replace redux](https://frontarm.com/james-k-nelson/when-context-replaces-redux/)

## Creating a react application
### Content 
#### CRA(create-react-app)
#### Linting
#### Storybook-content
#### Unit Testing and Code Coverage
[Video](https://youtu.be/FNM-Dfdzlyw)
## [Content](#content)
#### CRA(create-react-app)
[Link to react-scripts with all commands: start, build, eject..](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/scripts)
* yarn - creating the app with yarn
* yarn global add create-react-app
* yarn create react-app swapp
* npm - creating the app with npm
* npm init react-app swapp
* npx - creating the app with npx
* npx create-react-app swapp
##### Starting the app
* yarn start
* npm start

##### Starting the tests
* yarn test
* npm test
#### Build the app for production
* yarn build
#### Ejecting your app
* yarn eject or npm eject
* Irreversible
* Reasons:
    * Manage the Build
    * Missing Features
    * Curiosity 
#### Update react-script
* yarn upgrade react-script --latest
#### Presets 
[babel-preset-react](https://babeljs.io/docs/en/babel-preset-react)
* Via .babelrc { "presets": ["@babel/preset-react"]  }
#### Keynotes
* Webpack
* Eslint
* Styles and Assets
* Environment Variables
* Progressive Web Apps
* Jest
#### Webpack [official sait for webpack](https://webpack.js.org/)
* Builds Dependency Module Graph
* Picks up non-JS files via Loaders
* Bundle Optimizations via Plugins
* Code Splitting
#### Eslint [official sait for Eslint](https://eslint.org/)
##### A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

* Maintain code consistency
* Enforces Good Practices
* Simplifies PR Reviews
* eslint-plugin-react

#### Styling and Assets
* Webpack extends the concept of import
* Importing images, fonts, svgs. etc
* Importing Styles

#### CSS/SASS Styling
* Import CSS or SASS* files as dependency
* Import CSS or SASS* modules
* [name].module.{css,scss} - [Adding a CSS Modules Stylesheet](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
* Style scoping via unique classnames

#### Environmental Variables
* via Shell or .env
* Reserved Environment Variables (e.g. PORT)
* Custom Environment Variables
* Used for custom purposes (e.g. setting the backend server url)
* Must be **prefixed with REACT_APP_** (e.g. REACT_APP_BE_URL)

#### Progressive Web App
* Web Apps having specific set of characters:
    * Progressive
    * Responsive
    * Connectivity independent
    * App-like
    * Faster after initial loading
* Progressive by Default*
* Service Worker

#### Best Practices
* Pin the Node.js version
* Opinionated Formatter
* Pre-commit hooks
* CI/CD

#### Pin the Node.js version

* Limits Hard to Reproduce Issues
* Ensures Node.js version consistency
* nvm, nvm-windows, nodist

#### Node Version Manager (nvm) [nvm git repo](https://github.com/nvm-sh/nvm)
* Install nvm
* echo [desired version] >> .nvmrc 
* call "nvm use" - where the file is located folder
* [or set up automatic nvm use call](https://github.com/nvm-sh/nvm#automatically-call-nvm-use)

#### Opinionated Formatter 

##### Prettier
* Resolves visual esthetics arguments
* Uses [cosmiconfig link](https://github.com/davidtheclark/cosmiconfig)
* Create format script
**In package.json**
"prettier": {
  "trailingComma": "all",
  "tabWith": 2,
  "semi": true,
  "singleQuote": true
}
* Format with prettier all files that are listed, ex: {js,json, css, scss}
"scripts": {
    ...
    "format": "prettier --write \"src/**/*.{js,json, css, scss}\""
}

#### Git Hooks Husky Lint Stage and Cross Env
[CI with lint staged and husky pre commit - article](https://codeburst.io/continuous-integration-lint-staged-husky-pre-commit-hook-test-setup-47f8172924fc)
* **npm install --save-dev husky lint-staged cross-env**
* cross-env -[cross-env](https://www.npmjs.com/package/cross-env) - Run scripts that set and use environment variables across platforms
* husky - Husky can prevent bad git commit, git push and more dog woof! [husky git](https://github.com/typicode/husky)

* [lint-staged link](https://github.com/okonet/lint-staged) — Run linters on git staged files, Run linters against staged git files and don't let hankey slip into your code base!
[prettier git repo](https://github.com/prettier/prettier)

* in package.json
"husky" : {
    "hooks": {
        "pre-commit": "cross-env CI=true lint-staged",
        "pre-push": "npm test"
    }
}

"lint-staged": {
 "src/**/*.js": [
  "prettier --write",
  "eslint --max-warnings=0",
  "yarn test --bail --findRelatedTests",
  "git add"
 ]
}

* **netlify.toml** and the file into the project level with content: 
* [build]
* base = "/"
* publish = "/build/"
* command = "yarn ci && yarn build"

#### Continuos Integration/Deployment
* Always use Pull/Merge Requests
* Run CI Build on each PR
* Deploy Automatically the master branch

#### Storybook 
[storybook git repo](https://github.com/storybookjs/storybook)
## [Content](#content)

**Storybook is an open source tool for developing UI components in isolation**
* Build Components in Isolation
* Mock Hard to Reach Use Cases
* Document Use Cases as Stories
* Enhance with Addons

#### How to add Storybook?
* Init Storybook
* **npx -p @storybook/cli sb init**
* Start Storybook
* **yarn storybook**
* Start Storybook
* **yarn build-storybook**
* in package.json
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
* Loading Stories see the settings in -> .storybook/config.js
* must have extensions -> stories.js
* Adding Decorators 
* Addons

#### Storybook syntax
##### Sending actions
* **sending action** in the storybook console in this case the name of the event is clicked(the event that was handled by action)
* import { action } from '@storybook/addon-actions';
* <Button onClick={action('clicked')}>
###### Adding decorators - 1h:12min
* in **.storybook/config.js** 
* adding global decorator
* example: **addDecorator(story => <div style={{ textAlign: "center"}}>{story()}</div>)**
* in the example above the decorator will wrap the story in the div with these styles
##### Adding addon knobs - Storybook Addon Knobs allow you to edit props dynamically using the Storybook UI. You can also use Knobs as a dynamic variable inside stories in Storybook. 
[addon-knobs link](https://www.npmjs.com/package/@storybook/addon-knobs)
* npm i @storybook/addon-knobs or yarn add @storybook/addon-knobs --dev
* addon should be added in .storybook/addons.js like this: **import '@storybook/addon-knobs/register';**
* then import in .storybook/config.js : **import { withKnobs } from '@storybook/addon-knobs'** and then wrrapped it in decorator: addDecorator(withKnobs);
* check more complex example with meme-generator: **1h:18min**
#### Testing React Components 
* Capture Regressions
* Ensure Proper Visual Content
* Validate UX
* Documentation
* Encourages High Quality Code
## [Content](#content)

#### Jest [Jest official site](https://jestjs.io/)- 1h:35min
* **Jest is a delightful JavaScript Testing Framework with a focus on simplicity.**
* Fast and Safe
* Code Coverage
* Mocking API
* GOOD Exceptions
* Great Documentation
#### Configuration Jest
* Little to None
* Options Config
* package.json or  jest.config.js
* Filename Conventions
* .js files in __tests__ folders
* .test.js files
* .spec.js files
* Global Setup File:
* src/setupTests.js - in this file we can mock external API globally for the whole project 
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
* describe - grouping scoping
* test/it - tests
* beforeAll/afterAll - one time scope/repeating scope 
* beforeEach/afterEach - repeating before/ after every test
* expect(actual).matcher(expected) - assertion

#### Test in Comopnents
* Smoke Tests
* Input - Output
* Behavior

#### How we test Components
* enzyme
* React Testing Libraries

#### Enzyme [official site of enzyme](https://airbnb.io/enzyme/)
* Shallow Rendering - usualy for container components only to check if the compoenent is rendered
* Mount (Full) Rendering - for Integration tests

#### Shallow Render 
* Start at 1h: 52min
* **Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components**
* Testing components in isolation
* Container components
* Documenting Behavior
* Unit Testing
* Using shallow API
* creates ShallowWrapper
* componentDidMount and componentDidUpdate
#### Mount Render
* **Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs or need to test components that are wrapped in higher order components**
* Testing components integration
* Presentational Components
* Testing DOM elements interactions
* Browser-Like Environment
* Integration Testing
* Using mount API
* creates ReactWrapper
* mounts the component in the DOM

#### Enzyme drawbacks
* Allows testing implementation details
* Relying on non-public interface
* Depending Components’ Names
* Asserting Component State
* Invoking Function Props
##### jest-enzyme
* [jest-enzyme official site](https://www.npmjs.com/package/jest-enzyme)
* import 'jest-enzyme' in setupTests.js
* receiving a lot of good methods like toExist(), toHaveProp(), toHaveClassName(), toHaveValue() .etc..
#### React Testing Library
* **We try to only expose methods and utilities that encourage you to write tests that closely resemble how your web pages are used**
* Builds on top of DOM Testing Library1 
* Light-weight
* Works with actual DOM nodes

#### Mocking
* **Mock is an imitation, usually of lesser quality**
* **Mock objects are simulated objects that mimic the behavior of real objects in controlled ways, most often as part of a software testing initiative**
* Isolate dependencies outside of our control
* Ensure we have passing tests

#### What do we want to mock
* Network (API) calls
* Date-related stuff
* Environment (e.g. env vars)
* Behaviors/Objects that aren’t target of the current test
* Timers

#### Mocking API - 2h:19min
* jest.fn([implementation])1 - creates unused mocked function
* jest.spyOn(object, methodName)2 - wraps object[methodName] in mock function and returns the later
* mockFn.methods

#### Mocking Timers 
* jest.useFakeTimers() - Instructs Jest to use fake versions of the standard timer functions
* jest.runAllTimers() - Exhausts both the macro-task queue and the micro-task  queue
* jest.advanceTimersByTime(ms) - Executes only  queued task in the macro task queue
* jest.runOnlyPendingTimers() - Executes only the macro-tasks that are currently pending

#### Best Practices
* Start with snapshot tests
* Inputs + Simulated Events = Output
* Use helper functions
* Place tests as close as possible to the implementation
* Changing implementation details (refactoring) should rarely cause a test to fail.
## [Content](#content)

#### List of VS code extensions

* code --install-extension andys8.jest-snippets
* code --install-extension antmdvs.vscode-react-hooks-snippets
* code --install-extension azemoh.one-monokai
* code --install-extension bungcip.better-toml
* code --install-extension christian-kohler.npm-intellisense
* code --install-extension christian-kohler.path-intellisense
* code --install-extension dbaeumer.vscode-eslint
* code --install-extension DotJoshJohnson.xml
* code --install-extension dsznajder.es7-react-js-snippets
* code --install-extension eamodio.gitlens
* code --install-extension EditorConfig.EditorConfig
* code --install-extension eg2.vscode-npm-script
* code --install-extension EQuimper.react-native-react-redux
* code --install-extension esbenp.prettier-vscode
* code --install-extension formulahendry.code-runner
* code --install-extension jasonnutter.search-node-modules
* code --install-extension jeremyrajan.webpack
* code --install-extension kumar-harsh.graphql-for-vscode
* code --install-extension mgmcdermott.vscode-language-babel
* code --install-extension msjsdiag.debugger-for-chrome
* code --install-extension msjsdiag.vscode-react-native
* code --install-extension Orta.vscode-jest
* code --install-extension redhat.vscode-yaml
* code --install-extension streetsidesoftware.code-spell-checker
* code --install-extension timothymclane.react-redux-es6-snippets
* code --install-extension uloco.theme-bluloco-light
* code --install-extension vscode-icons-team.vscode-icons
* code --install-extension waderyan.babelrc
* code --install-extension xabikos.JavaScriptSnippets
* code --install-extension xabikos.ReactSnippets
* code --install-extension yzhang.markdown-all-in-one