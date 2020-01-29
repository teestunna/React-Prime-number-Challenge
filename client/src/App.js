import React, {Component} from 'react';
import './App.css';
import Title from './Components/Title';
import Form from './Components/Form';
import { fetchNumber } from './api';

class App extends Component {

  constructor() {
    super();
    this.state = { 
      number: "",
      finalAnswer: null,
      error: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showResult = this.showResult.bind(this);
  }

  //On click of submit button sends the input to be computed
  handleSubmit = async(event) => {
    event.preventDefault();

    if ( this.state.number < 3 ) {
      this.setState({ error: 'Please supply a positive integer larger than 2'});
      return
    } 
    else {
      this.setState({ error: null});
    }
    const answer = await fetchNumber( this.state.number );
    this.setState({ finalAnswer: JSON.stringify(answer) });
    this.setState({ number: ""});
  }

  //On change of input box, accepts only numeric values
  handleChange = (e) => {
      let number = e.target.value.replace(/\D/,'');
      this.setState({ number: number});
  }

  showResult = () => {
    let { finalAnswer, error } = this.state;
    if ( error != null ) {
      return <p className="finalAnswerError">{ error }</p>
    } else if ( finalAnswer != null) {
        return <p className="finalAnswer">The median is { finalAnswer }</p>
    } else {
        return ""
    }
  }

  render = () => {

    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form 
                    getNumber= { this.handleChange } 
                    getValue = { this.state.number }
                    finalAnswer = { this.handleSubmit } />
                </div>
                { this.showResult() }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
