var counter = document.querySelector("#counter");
var colors = [
    "#393E41",
    "#E94F37",
    "#1C89BF",
    "#A1D363",
    "#85FFC7",
    "#297373",
    "#FF8552",
    "#A40E4C"
];

var end = colors.length;

class Counter extends React.Component {
    render() {
        var textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        };

        return <div style={textStyle}>{this.props.display}</div>;
    }
}
class Circle extends React.Component {
    render() {
        var circleStyle = {
            padding: 10,
            margin: 20,
            display: "inline-block",
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width: 100,
            height: 100
        };

        return <div style={circleStyle} />;
    }
}

class CounterParent extends React.Component {

    constructor(props, context) {
        super(props, context);

        console.log("constructor: Default state time!");

        this.state = {
            count: 0
        };

        this.increase = this.increase.bind(this);
    }

    getInitialState() {
        console.log("getInitialState: Default state time!");
        return {
            count: 0
        };
    }

    increase() {
        var xxx = [];
        this.setState({
            count: this.state.count + 1
        });

        

        var color = colors[this.state.count];
        xxx.push(
            <div>
                <Circle key={color} bgColor={color} />
            </div>
        );
        ReactDOM.render(<div> {xxx} </div>, circleContain);
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate: Should component update?");

        if (newState.count < end) {
            console.log("shouldComponentUpdate: Component should update!");
            return true;
        } else {
            ReactDOM.unmountComponentAtNode(counter);
            console.log("shouldComponentUpdate: Component should not update!");
            return false;
        }
    }

    componentWillReceiveProps(newProps) {
        console.log("componentWillReceiveProps: Component will get new props!");
    }

    render() {
        var backgroundStyle = {
            padding: 50,
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };

        return (
            <div style={backgroundStyle}>
                <Counter display={this.state.count} />
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}

console.log("defaultProps: Default prop time!");
CounterParent.defaultProps = {};

ReactDOM.render(
    <div>
        <div>
            <CounterParent />
        </div>
        <div id="circleContain" />
    </div>,
    counter
);
