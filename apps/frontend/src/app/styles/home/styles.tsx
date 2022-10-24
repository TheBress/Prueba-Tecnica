import styled from 'styled-components';

interface Props {
  isIcon?: boolean;
  hasColor?: boolean;
  isAdd?: boolean;
  isActive?: boolean;
}

const HomeContainer = styled.div`
  padding: 55px;
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 12vh;
  background: #262d34;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuItem = styled.div<Props>`
  margin-left: ${(props) => (props.isIcon ? '15px' : '55px')};
  color: white;
  font-size: 20px;
  cursor: ${(props) => (props.isIcon ? 'pointer' : 'normal')};
  @media (max-width: 1400px) {
    margin-left: ${(props) => (props.isIcon ? '10px' : '35px')};
  }
`;

const UserIcon = styled.div`
  color: white;
  font-size: 25px;
  border: 1px solid white;
  border-radius: 100%;
  padding: 5px;
  margin-left: 25px;
  cursor: pointer;
  padding: 8px 10px;
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  outline: none;
  color: white;
  &::placeholder {
    color: white;
  }
  padding: 10px;
  margin-right: 54vw;

  @media (max-width: 1400px) {
    width: 10vw;
    margin-right: 0;
  }
`;

const Divider = styled.div`
  border-left: 1px solid white;
  height: 50%;
  margin-left: 25px;
`;
const AppButton = styled.button<Props>`
  background-color: #0abb87;
  color: white;
  padding: ${(props) => (props.isAdd ? '15px' : '10px 15px')};
  border: none;
  border-radius: 8px;
  margin-left: ${(props) => (props.isAdd ? '75px' : '0px')};
  margin-right: ${(props) => (props.isAdd ? '0px' : '10px')};
  margin-top: ${(props) => (props.isAdd ? '0px' : '15px')};
  margin-bottom: ${(props) => !props.isAdd && '10px'};
  cursor: pointer;

  &:disabled {
    background-color: #9da9a6;
    cursor: default;
  }
`;

const Text = styled.text<Props>`
  margin-left: ${(props) => (props.hasColor ? '20px' : '10px')};
  color: ${(props) => props.hasColor && '#262d34'};
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AcademyButton = styled.button`
  align-items: center;
  padding: 15px 20px;
  border: none;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  background: white;
  border-radius: 8px;
  margin-top: 30px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
`;

const GridContainer = styled.div`
  display: grid;

  @media (min-width: 1124px) {
    grid-template-columns: 15% 75%;
  }

  @media (max-width: 1124px) {
    grid-template-rows: 15% 75%;
  }
`;

const OptionsText = styled.p<Props>`
  margin-left: 35px;
  color: ${(props) => props.isActive && '#0abb87'};
`;

const StudentsTable = styled.div`
  width: 100%;
  display: table;
  text-align: center;
  margin-top: 50px;
  @media (max-width: 600px) {
    display: block;
    overflow-x: scroll;
    width: 110%;
    height: 114%;
    margin-top: 15px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextTable = styled.h3`
  @media (max-width: 600px) {
    margin-top: 165px;
  }
`;

const THItem = styled.div`
  display: table-cell;
  border-bottom: 2px solid black;
  font-weight: bold;
`;

const ThStudentsTable = styled.div`
  display: table-row;
  height: 40px;
`;

const THeader = styled.div`
  display: table-header-group;
`;

const TrStudentsTable = styled.div`
  display: table-row;
  height: 50px;
`;

const TDItem = styled.div`
  padding: 10px;
  display: table-cell;
  border-bottom: 1px solid #cdcdcd;
  width: 150px;
`;

const AlignIcons = styled.div`
  display: flex;
  align-items: center;
`;

const CourseContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 32vh;
  @media (max-width: 600px) {
    margin-top: 45px;
    margin-left: 40px;
  }
`;

const ConnectionTag = styled.div`
  background: #f0f4f3;
  border: 0.5px solid #9e9e9e;
  border-radius: 5px;
  width: 50%;
  margin: auto;
  padding: 2px 0px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const EditTd = styled.td`
  cursor: pointer;
  border-bottom: 1px solid #cdcdcd;
  width: 50px;
`;

const ResponsiveFlex = styled.div`
  @media (max-width: 600px) {
    display: flex;
  }
`;

export {
  MenuContainer,
  AlignIcons,
  CourseContainer,
  HomeContainer,
  MenuItem,
  FlexContainer,
  SearchInput,
  UserIcon,
  Divider,
  AppButton,
  Text,
  AcademyButton,
  GridContainer,
  OptionsText,
  THeader,
  StudentsTable,
  ThStudentsTable,
  TrStudentsTable,
  ConnectionTag,
  EditTd,
  ResponsiveFlex,
  THItem,
  TDItem,
  ButtonsContainer,
  TextTable,
};
