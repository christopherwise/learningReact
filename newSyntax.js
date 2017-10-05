  var HelloWorld = React.createClass({
  render: function() {
  return (
    <p>Hello {this.props.greetTarget}! </p>
  );
}
});
ReactDOM.render(
<div>
<HelloWorld greetTarget="Batman" />
<HelloWorld greetTarget="Iron Man"/>
</div>,
  document.querySelector('#container')
)






class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p>Hello {this.props.greetTarget}!</p>
    );
  }
}

ReactDOM.render(
<div>
<Contacts greetTarget="jefff" />
<Contacts greetTarget="Iron Man"/>
</div>,
  document.querySelector('#container2')
)

