var Box = React.createClass({
  render: function() {
    var boxStyle = {
      marginTop: 30,
      marginBottom: 30,
      backgroundColor: this.props.bgcolor,
      display: "block",
      width: this.props.width,
      height: this.props.height,
      textAlign: "center"
    };

    return (<div style={boxStyle}>&nbsp;</div>;
  }
});

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <Box bgcolor="#58B3FF" width="60px" height="70px" />
    <Box bgcolor="#FF605F" width="60" height="20" />
    <Box bgcolor="#FFD52E" width="120" height="30" />
    <Box bgcolor="#49DD8E" width="60" height="100" />
    <Box bgcolor="#AE99FF" width="90" height="90" />
  </div>,
  destination
);
