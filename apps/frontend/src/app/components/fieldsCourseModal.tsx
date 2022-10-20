import { Course, User } from '../models';
import {
  Text,
  ProgressBar,
  GridContainer,
  PercentageSpan,
} from '../styles/courseModal/styles';

interface Props {
  user: User;
}

export const FieldsCourseModal = ({ user }: Props) => {
  return (
    <>
      {user.courses.map((course: Course) => (
        <>
          <Text isCourseName={true}>{course.title}</Text>

          <GridContainer>
            <ProgressBar isContainer={true}>
              <ProgressBar
                style={{ width: `${course.percentCompleted}%` }}
              ></ProgressBar>
            </ProgressBar>

            <PercentageSpan>{course.percentCompleted} %</PercentageSpan>
          </GridContainer>
          <Text>
            Fecha de inscripción:
            {` ${course.inscriptionDate.replaceAll('/', ' - ')}`}
          </Text>
        </>
      ))}
    </>
  );
};
