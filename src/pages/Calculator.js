import React from "react";
import "../App.css";

import {
  Container,
  Input,
  Button1,
  Button2,
  Button3,
  Div,
  Sec,
} from "../style/CalculatorStyle";

function Calculator() {
  return (
    <Sec>
      <Container>
        <Input></Input>
        <Div>
          <Button1>AC</Button1>
          <Button1>+/-</Button1>
          <Button1>%</Button1>
          <Button3>
            <span>&#247;</span>
          </Button3>

          <Button2>7</Button2>
          <Button2>8</Button2>
          <Button2>9</Button2>
          <Button3>x</Button3>
          <Button2>4</Button2>
          <Button2>5</Button2>
          <Button2>6</Button2>
          <Button3>-</Button3>
          <Button2>1</Button2>

          <Button2>2</Button2>
          <Button2>3</Button2>
          <Button3>+</Button3>
          <Button2 className="btn">0</Button2>
          <Button2>.</Button2>
          <Button3>=</Button3>
        </Div>
      </Container>
    </Sec>
  );
}

export default Calculator;
