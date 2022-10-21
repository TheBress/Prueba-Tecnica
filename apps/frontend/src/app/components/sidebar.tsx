import {
  AcademyButton,
  AlignIcons,
  CourseContainer,
  Text,
  OptionsText,
  ResponsiveFlex,
} from '../styles/home/styles';

import { HiAcademicCap } from 'react-icons/hi';
import { FaBook } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

export const Sidebar = () => {
  return (
    <ResponsiveFlex>
      <div>
        <AcademyButton>
          <AlignIcons>
            <HiAcademicCap size="22" />
            <Text hasColor={false}> Mi academia</Text>
          </AlignIcons>
        </AcademyButton>
        <OptionsText isActive={false}>Editar academia</OptionsText>
        <OptionsText isActive={true}>Estudiantes</OptionsText>
        <OptionsText isActive={false}>Profesores</OptionsText>
      </div>

      <CourseContainer>
        <AlignIcons>
          <FaBook size="22" /> <Text hasColor={false}>Cursos</Text>
        </AlignIcons>
      </CourseContainer>

      <CourseContainer>
        <AlignIcons>
          <FiSettings size="22" /> <Text hasColor={false}>Ajustes</Text>
        </AlignIcons>
      </CourseContainer>
    </ResponsiveFlex>
  );
};
