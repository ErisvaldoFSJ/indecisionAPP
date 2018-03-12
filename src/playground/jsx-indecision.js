// JSX FILES
// jsx - JavaScript XML
const appRoot =  document.getElementById('app')

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}
const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option)
        e.target.elements.option.value = ''
        renderApp()
    }
}
const onRemoveAll = () =>{
    app.options = []
    renderApp()
}
const onMakeDecision=()=>{
    const radonNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[radonNum]
    alert(option)
}
const renderApp = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p> {app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are you options':'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}> Waht should i do?</button>
            <button onClick={onRemoveAll}>Remove all</button>
            <ol>
                {app.options.map((option)=> <li key={option}>{option}</li> )}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template,appRoot)
}
renderApp()


