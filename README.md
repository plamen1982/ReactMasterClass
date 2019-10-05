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

##### Inversion of control, see ContainerComponent implementation in Training/ReactAdvanced/Component/component

[Inversion of controle article](https://medium.com/@magnusjt/inversion-of-control-and-di-in-reactjs-and-redux-35161fcef847)

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

####Conclusions
#####uncontrolled/controlled
* one-time value retrieval (e.g. on submit) YES/YES
* validating on submit YES/YES
* instant field validation NO/YES
* conditionally disabling submit button NO/YES
* enforcing input format NO/YES
* several inputs for one piece of data NO/YES
* dynamic inputs NO/YES