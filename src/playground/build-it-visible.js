console.log('hi');
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibiliy = this.handleToggleVisibiliy.bind(this);
        this.state = {
            visibility: false,
        };
    }

    handleToggleVisibiliy() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibiliy}> { this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {
                    this.state.visibility && (
                    <p>Here are all your details</p> )
                }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// const appRoot = document.getElementById('app');

// let visibility = false;

// const toggleDetails = () => {
//     visibility = !visibility;
//     renderTemplate();
// }

// const renderTemplate = () => {

//     const toggle = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleDetails}>{ visibility ? 'Hide details' : 'Show details' }</button>
//             {
//                 visibility && (
//                 <p>Here are all your details</p> )
//             }
//         </div>
//     );
//     ReactDOM.render(toggle, appRoot);
// }

// renderTemplate();



// when i click on button show details, it changes to hide details and the par with "some details" shows up below
// when i click on button hide details, it changes to show details and the paragraph disappears
