# ReactMasterClass

## React Advanced - [Video](https://youtu.be/zlpYShDdY_c)

{::nomarkdown}
<h5>Component</h5>
<div>Main building blocks: - <b>Reusability</b> and <b>Isolation</b></div>  
 <div><b>Component props:</b> - <b>External</b> data coming from <b>parent to child</b>.          <b>Immutable</b> Accessed from <b>single object argument</b> for functional components
 </div>
<h5>JSX (JavaScriptXML)</h5>
<div>Combines markup with logic. <b>JavaScript Expressions -> {}</b></div>
<div>produce React elements</div>
<div><b>React Elements<b></div>
<ul>
    <li>smallest building blocks</li>
    <li>plain object made with logic,Ex: const name="pax" React.createElemetn('div', {className: 'element'}, 'I am', name) </li>
    <li>in the Virtual DOM this React element is only a plain object => { type: 'div', props: { className: 'element', children: 'Some content pax' } }</li>
    <li>produces React elements</li>
</ul>
<h5>Component Re-render Causes</h5>
<div>Props Change</div>
<div>State Change</div>
<div>Context Change*</div>