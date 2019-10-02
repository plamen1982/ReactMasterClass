# ReactMasterClass

## React Advanced - [Video](https://youtu.be/zlpYShDdY_c)

{::nomarkdown}
<h5>Component</h5>
<div>Main building blocks: - <b>Reusabidivty</b> and <b>Isolation</b></div>  
 <div><b>Component props:</b> - <b>External</b> data coming from <b>parent to child</b>.          <b>Immutable</b> Accessed from <b>single object argument</b> for functional components
 </div>
<h5>JSX (JavaScriptXML)</h5>
<div>Combines markup with logic. <b>JavaScript Expressions -> {}</b></div>
<div>produce React elements</div>
<div><b>React Elements<b></div>
<div>
    <div>smallest building blocks</div>
    <div>plain object made with logic,Ex: const name="pax" React.createElemetn('div', {className: 'element'}, 'I am', name) </div>
    <div>in the Virtual DOM this React element is only a plain object => { type: 'div', props: { className: 'element', children: 'Some content pax' } }</div>
    <div>produces React elements</div>
</div>
<h5>Component Re-render Causes</h5>
<div>Props Change</div>
<div>State Change</div>
<div>Context Change*</div>
<h5>Presentational Components and Container Components</h5>
<h6>Presentational Components(Dumb, Skinny):</h6>
<div>How things <b>Look</b></div>
<div>Usually renders <b>host(html elements)</b>components</div>
<div>No external dependencies</div>
<div>Lack of knowledge about <b>data mutations</b> and <b>loading</b></div>
<div>They are Pure functions(when using functional components)</div>
<div>No state</div>