console.log('App.js is running');

// JSX - Javascript XML
var template = 
<div>
    <h1>Indecision appp - This is JSX from app.js!</h1>
    <p>This is some info</p>
</div>
;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);