# ReactMasterClass

## React Advanced - [Video](https://youtu.be/zlpYShDdY_c)

{::nomarkdown}
<h5>Component</h5>
<ul>
<li>Main building blocks: - <b>Reusability</b> and <b>Isolation</b></li>  
 <li><b>Component props:</b> - <b>External</b> data coming from <b>parent to child<b>
 </li>       
 <li><b>Immutable</b></li> 
 <li>Accessed from <b>single object argument</b> for functional components</li>
</ul>

<h5>JSX (JavaScriptXML)</h5>
<ul>
    <li>Combines markup with logic. <b>JavaScript Expressions -> {}</b></li>
    <li>produce React elements</li>
    <li><b>React Elements<b></li>
</ul>
<ul>
    <li>smallest building blocks</li>
    <li>plain object made with logic,Ex: const name="pax" React.createElemetn('div', {className: 'element'}, 'I am', name) </li>
    <li>in the Virtual DOM this React element is only a plain object => { type: 'div', props: { className: 'element', children: 'Some content pax' } }</li>
    <li>produces React elements</li>
</ul>
</div>
<h5>Component Re-render Causes</h5>
<ul>
    <li>Props Change</li>
    <li>State Change</li>
    <li>Context Change*</li>
</ul>
<h5>Presentational Components and Container Components</h5>
<h6>Presentational Components(Dumb, Skinny):</h6>
<ul>
    <li>How things <b>Look</b></li>
    <li>Usually renders <b>host(html elements in web, native elements in React Native(View, Text)</b>components</li>
    <li>No external dependencies</li>
    <li>Lack of knowledge about <b>data mutations</b> and <b>loading</b></li>
    <li>They are Pure functions(when using functional components)</li>
    <li>No state</li>
</ul>
<h6>Container Components(Smart, Fat):</h6>
<ul>
    <li>How things <b>Work</b></li>
    <li>Usually no <b>host(html elements in web, native elements in React Native(View, Text)</b>components</li>
    <li>Linked to external providers(redux-connect, appolo-qraphql, etc.)</li>
    <li>Serves as <b>data</b> and <b>behavior</b>providers</li>
    <li>Usually stateful</li>
</ul>
<h6>Inversion of control, see ContainerComponent implementation</h6>
<a href="https://medium.com/@magnusjt/inversion-of-control-and-di-in-reactjs-and-redux-35161fcef847">Inversion of controle article
</a>