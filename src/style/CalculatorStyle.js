import styled from "styled-components";

export const Sec = styled.div`
  display: flex;
  /* align-items: center; */

  justify-content: center;
  margin-top: 120px;
`;
export const Container = styled.div`
  border: 1px solid green;
  width: 250px;
  background: black;

  /* margin-left: 200px; */
`;

export const Input = styled.input`
  height: 100px;
  width: 242px;
  background: black;
  border: none;
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 250px;
  margin-left: 4px;
  gap: 5px 0px;
  margin-bottom: 8px;
  .btn {
    grid-column-start: 1;
    grid-column-end: 3;
    width: 125px;
    text-align: left;

    background-color: #323131;
  }
`;

//very Good

export const Button1 = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background-color: #a39f9fde;
  border: none;
  font-size: 18px;
`;

export const Button2 = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border: none;
  background-color: #323131;
  color: white;
  font-size: 18px;
`;

export const Button3 = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border: none;
  color: white;
  font-size: 18px;
  background-color: #fdaf20d9;
`;
