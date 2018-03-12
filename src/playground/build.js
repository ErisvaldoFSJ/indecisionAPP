

class Visibility extends React.Component{
    constructor(props){
        super(props)
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.state = {
            visibilit:false
        }
    }
    toggleVisibility(){
        this.setState((prevState)=>{
            return {visibilit: !prevState.visibilit}
        })
    }
    render(){
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toggleVisibility}>
            {this.state.visibilit ? 'hide ditels' : 'show diteles'}
            </button>
            {this.state.visibilit && (
                <div>
                    <p>hey. these are some details you can now see!</p>
                </div>
            )}
        </div>
        )
    }
}
ReactDOM.render(<Visibility/>, document.getElementById('app'))

/*const appRoot =  document.getElementById('app')

let visibility = false
const toggleVisibility = () =>{
    visibility = !visibility
    renderApp()
}

const renderApp = () =>{
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
            {visibility ? 'hide ditels' : 'show diteles'}
            </button>
            {visibility && (
                <div>
                    <p>hey. these are some details you can now see!</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(template,appRoot)
}
renderApp()*/