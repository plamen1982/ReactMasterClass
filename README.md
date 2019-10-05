# ReactMasterClass

## React Advanced - [Video](https://youtu.be/zlpYShDdY_c)

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

##### Presentational Components(Dumb, Skinny):

*   How things **Look**
*   Usually renders **host(html elements in web, native elements in React Native(View, Text)**components
*   No external dependencies
*   Lack of knowledge about **data mutations** and **loading**
*   They are Pure functions(when using functional components)
*   No state

##### Container Components(Smart, Fat):

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

#### What are refs?

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

##### Inversion of control, see ContainerComponent implementation in Training/ReactAdvanced/Component/component

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
#### Storybook
#### Unit Testing and Code Coverage
[Creating a react application video](https://youtu.be/FNM-Dfdzlyw) 

#### CRA(create-react-app)
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
* Irreversible
* Reasons:
    * Manage the Build
    * Missing Features
    * Curiosity 
#### Update react-script
* yarn upgrade react-script --latest
#### Keynotes
* Webpack
* Eslint
* Styles and Assets
* Environment Variables
* Progressive Web Apps
* Jest
#### Webpack [official sait for webpack](https://webpack.js.org/)
*