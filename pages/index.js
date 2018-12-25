import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Button } from '../components/CalcButton';
import { CalcScreen } from '../components/CalcScreen';

const Container = styled.div`
  margin: 8rem;
  display: flex;
  justify-content: center;
`;

const CalcContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 20em;
  height: 49rem;
  background-color: black;
  justify-content: center;
  align-content: flex-start;
  padding: 2rem;
`;

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    background-color: blue;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: default;
  }

`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      operation: undefined
    };

    this.handleDigits = this.handleDigits.bind(this);
    this.handleOperations = this.handleOperations.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleMultiOperations = this.handleMultiOperations.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDigits(e) {
    const userInput = e.target.value;
    this.setState(prevState => {
      return {
        userInput: prevState.userInput + userInput
      };
    });
  }

  handleOperations(e) {
    const operation = e.target.value;
    this.setState(prevState => {
      return {
        userInput: prevState.userInput + operation,
        operation
      };
    });
  }

  handleMultiOperations(e) {
    const operation = e.target.value;
    this.setState(prevState => {
      return {
        userInput:
          this.getAnswer(prevState.userInput, prevState.operation) + operation,
        operation
      };
    });
  }

  handleEnter() {
    this.setState(prevState => {
      const userInput =
        this.getAnswer(prevState.userInput, prevState.operation) ||
        prevState.userInput;
      return {
        userInput,
        operation: undefined
      };
    });
  }

  handleClear() {
    this.setState(prevState => {
      return {
        userInput: '',
        operation: undefined
      };
    });
  }

  handleDelete() {
    this.setState(prevState => {
      const userInput = prevState.userInput.slice(0, -1) || '';
      return {
        userInput
      };
    });
  }

  getAnswer(eqString, operation) {
    const numbers = eqString.split(operation).map(num => Number(num));
    switch (operation) {
      case '+':
        return numbers[0] + numbers[1];
      case '-':
        return numbers[0] - numbers[1];
      case 'x':
        return numbers[0] * numbers[1];
      case '/':
        return numbers[0] / numbers[1];
      default:
        return undefined;
    }
  }
  render() {
    return (
      <Container>
        <CalcContainer>
          <GlobalStyles />
          <CalcScreen input={this.state.userInput} tabIndex={1} />
          <Button onClick={this.handleDigits} value={7}>
            7
          </Button>
          <Button onClick={this.handleDigits} value={8}>
            8
          </Button>
          <Button onClick={this.handleDigits} value={9}>
            9
          </Button>
          <Button
            onClick={
              this.state.operation
                ? this.handleMultiOperations
                : this.handleOperations
            }
            value={'/'}
          >
            /
          </Button>
          <Button onClick={this.handleDigits} value={4}>
            4
          </Button>
          <Button onClick={this.handleDigits} value={5}>
            5
          </Button>
          <Button onClick={this.handleDigits} value={6}>
            6
          </Button>
          <Button
            onClick={
              this.state.operation
                ? this.handleMultiOperations
                : this.handleOperations
            }
            value={'x'}
          >
            x
          </Button>
          <Button onClick={this.handleDigits} value={1}>
            1
          </Button>
          <Button onClick={this.handleDigits} value={2}>
            2
          </Button>
          <Button onClick={this.handleDigits} value={3}>
            3
          </Button>
          <Button
            onClick={
              this.state.operation
                ? this.handleMultiOperations
                : this.handleOperations
            }
            value={'+'}
          >
            +
          </Button>
          <Button onClick={this.handleDelete}>DE</Button>
          <Button onClick={this.handleDigits} value={0}>
            0
          </Button>
          <Button onClick={this.handleClear}>CE</Button>
          <Button
            onClick={
              this.state.operation
                ? this.handleMultiOperations
                : this.handleOperations
            }
            value={'-'}
          >
            -
          </Button>
          <Button onClick={this.handleEnter} value={'enter'} xl>
            =
          </Button>
        </CalcContainer>
      </Container>
    );
  }
}
