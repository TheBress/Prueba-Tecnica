import styled from 'styled-components';

interface Props {
  isCourseName?: boolean;
  isContainer?: boolean;
}

const Text = styled.p<Props>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${(props) => (props.isCourseName ? '500' : '400')};
  font-size: ${(props) => (props.isCourseName ? '15px' : '10px')};
  line-height: ${(props) => (props.isCourseName ? '24px' : '')};
  color: #000000;
  text-align: left;
  margin-bottom: ${(props) => (props.isCourseName ? '0px' : '10px')};
`;

const ProgressBar = styled.div<Props>`
  background: ${(props) =>
      props.isContainer
        ? '#f0f4f3'
        : 'linear-gradient(90deg, #0abb87 6.77%, #6fd466 93.23%)'}
    #f0f4f3;
  border-radius: 10px;
  height: 15px;
  width: 100%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
`;

const PercentageSpan = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
`;

export { Text, ProgressBar, GridContainer, PercentageSpan };
