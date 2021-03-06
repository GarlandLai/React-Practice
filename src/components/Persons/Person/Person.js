import React, { Component } from "react";
import classes from "./Person.css";
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  // Used to access context everywhere in class components.
  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context)
  }
  render() {
    const {name, age, click, changed } = this.props;
    console.log("person.js rendered")
    return (
      <Aux>
        {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
        <p onClick={click}>I'm {name} and I am {age} years old!</p>
        <p onClick={click}>{this.props.children}</p>
        <input 
          // ref={(input)=> {this.inputElement = input}}
          ref={this.inputElementRef}
          type="text" 
          onChange={changed}
          value={name}
        />
      </Aux>
    ) 
  }
}

Person.propTypes = {
  click: PropTypes.func.isRequired,
  changed: PropTypes.func.isRequired,
  name: PropTypes.string,
  age: PropTypes.number
};

export default withClass(Person, classes.Person);