import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../store/actions'

let styles = {
  backgroundColor: 'HotPink',
  width: '250px',
  height: '100px',
  borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
}


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'DarkTurquoise ' }}
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={this.props.getNews}
      >Press to see News</button>
    );
  }

};

const mapDispatchToProps = { // here we're storing the dispatched actions 
  getNews: getNews, 
};

Button = connect( // used to connect redux and react
  null,
  mapDispatchToProps,
)(Button);

export default Button;
