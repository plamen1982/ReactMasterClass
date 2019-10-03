# ReactMasterClass

## React Advanced - [Video](https://youtu.be/zlpYShDdY_c)

{::nomarkdown}
<h4>Component</h4>
<ul>
<li>Main building blocks: - <b>Reusability</b> and <b>Isolation</b></li>
 <li><b>Component props:</b> - <b>External</b> data coming from <b>parent to child<b>
 </li>
 <li><b>Immutable</b></li>
 <li>Accessed from <b>single object argument</b> for functional components</li>
</ul>

<h4>JSX (JavaScriptXML)</h4>
<ul>
    <li>Combines markup with logic. <b>JavaScript Expressions -> {}</b></li>
    <li>produce React elements</li>
    <li>React Elements</li>
</ul>
<ul>
    <li>smallest building blocks</li>
    <li>plain object made with logic,Ex: const name="pax" React.createElemetn('div', {className: 'element'}, 'I am', name) </li>
    <li>in the Virtual DOM this React element is only a plain object => { type: 'div', props: { className: 'element', children: 'Some content pax' } }</li>
    <li>produces React elements</li>
</ul>
</div>
<h4>Component Re-render Causes</h4>
<ul>
    <li>Props Change</li>
    <li>State Change</li>
    <li>Context Change*</li>
</ul>
<h4>Presentational Components and Container Components</h4>
<h5>Presentational Components(Dumb, Skinny):</h5>
<ul>
    <li>How things <b>Look</b></li>
    <li>Usually renders <b>host(html elements in web, native elements in React Native(View, Text)</b>components</li>
    <li>No external dependencies</li>
    <li>Lack of knowledge about <b>data mutations</b> and <b>loading</b></li>
    <li>They are Pure functions(when using functional components)</li>
    <li>No state</li>
</ul>
<h5>Container Components(Smart, Fat):</h5>
<ul>
    <li>How things <b>Work</b></li>
    <li>Usually no <b>host(html elements in web, native elements in React Native(View, Text)</b>components</li>
    <li>Linked to external providers(redux-connect, appolo-qraphql, etc.)</li>
    <li>Serves as <b>data</b> and <b>behavior</b>providers</li>
    <li>Usually stateful</li>
    <li>Complex logic is here</li>
</ul>
<h5>Inversion of control, see ContainerComponent implementation in Training/ReactAdvanced/Component/component</h5>
<a href="https://medium.com/@magnusjt/inversion-of-control-and-di-in-reactjs-and-redux-35161fcef847">Inversion of controle article
</a>
<h4>But Why? Presentation and Container Components</h4>
<ul>
    <li>Separation of concerns</li>
    <li>Better reusability</li>
    <li>Enforces Good Practices</li>
    <li>Makes Styling Easier</li>
    <li>The outcome will be: Small components, Easy to tests, Easy to reuse</li>
</ul>
<h4>What are refs?</h4>
<ul>
    <li>Imperatively control child's behavior</li>
    <li>Child can be either DOM element or React Component</li>
    <li>Used for accessing child component instance throughout the component lifecycle</li>
    <li>Component should be mounted, to ref(instance of the element)</li>
</ul>
<h4>How to use refs?</h4>
<ul>
    <li>With functional components useRef()</li>
    <li>Pass the ref instance to an element ref attribute in render</li>
    <li>Control the rendered element via the ref instance reference</li>
    <li>Depending on the child type ref instance receives different object as current property</li>
        <ul>
            <li>HTML element - the instance of the underlying DOM element</li>
            <li>React Component - the instance of the mounted component</li>
        </ul>
</ul>
<h4>Controlled vs Uncontrolled Form Components</h4>
<ul>
    <li></li>
</ul>
