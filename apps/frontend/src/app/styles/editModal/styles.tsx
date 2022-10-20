import styled from 'styled-components';

interface Props {
  widthInput: string;
}

const GridInputContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 5px;
`;

const Input = styled.input<Props>`
  display: block;
  padding: 5px;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  width: ${(props) => props.widthInput};
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  padding: 20px;
`;

export { GridInputContainer, Label, Input, FormContainer };
