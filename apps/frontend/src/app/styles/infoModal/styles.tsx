import styled from 'styled-components';

interface Props {
  isEdited?: boolean;
  isActive?: boolean;
  isProperty?: boolean;
  isSave?: boolean;
}

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 500px;
  background-color: #fff;
  padding: 25px;
  height: 75vh;
  overflow: auto;

  @media (max-width: 600px) {
    width: 400px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Tab = styled.div<Props>`
  margin-right: 10px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  border-bottom: ${(props) =>
    props.isActive ? '4px solid #0abb87' : '4px solid transparent'};
  cursor: pointer;
`;

const EditButton = styled.button`
  background: #262d34;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 8px;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  position: relative;
  left: 55%;
  @media (max-width: 600px) {
    left: 50%;
  }
`;

const Button = styled.button<Props>`
  border: 1px solid #262d34;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: ${(props) => (props.isSave ? '#262d34' : '')};
  color: ${(props) => (props.isSave ? 'white' : '#262d34')};
  cursor: pointer;
  position: relative;
  left: ${(props) => (props.isSave ? '75%' : '80%')};
  @media (max-width: 600px) {
    left: ${(props) => (props.isSave ? '30%' : '35%')};
  }
`;

const AvatarImage = styled.img`
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  border-bottom: 1px solid #cdcdcd;
  width: 50%;
  margin: auto;
  padding: 10px 5px;
`;

const Text = styled.text<Props>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${(props) => (props.isProperty ? '600' : '400')};
  font-size: ${(props) => (props.isProperty ? '11px' : '14px')};
  display: ${(props) => !props.isProperty && 'block'};
  padding-top: ${(props) => !props.isProperty && '10px'};
`;

const InfoContainer = styled.div`
  margin-left: 5px;
  text-align: left;
`;

const CloseButton = styled.button<Props>`
  border: 1px solid #262d34;
  border-radius: 8px;
  padding: 5px 20px;
  color: #262d34;
  cursor: pointer;
  float: right;
  margin-top: ${(props) => (props.isEdited ? '170px' : '10px')};
  margin-right: 10px;
`;

export {
  ModalContainer,
  ModalContent,
  FlexContainer,
  EditButton,
  AvatarImage,
  GridContainer,
  Text,
  InfoContainer,
  CloseButton,
  Tab,
  Button,
};
