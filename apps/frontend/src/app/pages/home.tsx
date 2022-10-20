import { IsAuth } from '../functions';
import { data } from 'apps/frontend/src/DB';
import { useNavigate } from 'react-router-dom';
import {
  AcademyButton,
  AlignIcons,
  CourseContainer,
  Text,
  Divider,
  FlexContainer,
  GridContainer,
  HomeContainer,
  MenuContainer,
  MenuItem,
  OptionsText,
  SearchInput,
  StudentsTable,
  ThStudentsTable,
  UserIcon,
  TrStudentsTable,
  AppButton,
  ConnectionTag,
  EditTd,
  ResponsiveFlex,
  THeader,
  THItem,
  TDItem,
} from '../styles/home/styles';
import {
  AiOutlineSearch,
  AiOutlinePlusCircle,
  AiOutlineInfoCircle,
  AiOutlineDoubleRight,
  AiOutlineDoubleLeft,
} from 'react-icons/ai';

import { MdOutlineEmail } from 'react-icons/md';
import { BsBell, BsGraphUp } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { HiAcademicCap } from 'react-icons/hi';
import { FaBook } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { useState } from 'react';
import { InfoModal } from '../components/infoModal';
import { Logo } from '../components/logo';

export const Home = () => {
  IsAuth();
  const [actualPage, setActualPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userId, setuserId] = useState<string>('');
  const navigate = useNavigate();

  const [isEditOpen, setisEditOpen] = useState<boolean>(false);

  const usersPerPage: number = 15;

  return (
    <div>
      <MenuContainer>
        <Logo isWhite={true} />
        <MenuItem isIcon={false}>
          <AlignIcons>
            <AiOutlineSearch />
            <SearchInput placeholder="Buscar" />
          </AlignIcons>
        </MenuItem>
        <MenuItem isIcon={true}>
          <MdOutlineEmail />
        </MenuItem>
        <MenuItem isIcon={true}>
          <BsBell />
        </MenuItem>
        <Divider />
        <UserIcon
          onClick={() => {
            if (localStorage.getItem('auth-id')) {
              localStorage.removeItem('auth-id');
              navigate('/login');
            }
          }}
        >
          <BiUser />
        </UserIcon>
      </MenuContainer>

      <HomeContainer>
        <FlexContainer>
          <BsGraphUp size="18" />
          <Text hasColor={true}> Dashboard</Text>
          <AppButton isAdd={true}>
            <AlignIcons>
              <AiOutlinePlusCircle size="18" />
              <Text hasColor={false}> Nuevo estudiante</Text>
            </AlignIcons>
          </AppButton>
        </FlexContainer>

        <GridContainer>
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

          <StudentsTable>
            <THeader>
              <ThStudentsTable>
                <THItem>Conexión</THItem>
                <THItem>Nombre y apellidos</THItem>
                <THItem>Nombre de usuario</THItem>
                <THItem>Email</THItem>
                <THItem>Móvil</THItem>
                <THItem></THItem>
              </ThStudentsTable>
            </THeader>
            {data
              .slice(
                usersPerPage * actualPage - usersPerPage,
                usersPerPage * actualPage
              )
              .map((user) => (
                <TrStudentsTable>
                  <TDItem>
                    <ConnectionTag>
                      {user.isOnline ? 'Online' : 'Offline'}
                    </ConnectionTag>
                  </TDItem>
                  <TDItem>{`${user.name} ${user.lastName}`}</TDItem>
                  <TDItem>{user.username}</TDItem>
                  <TDItem>{user.email}</TDItem>
                  <TDItem>{user.phone}</TDItem>
                  <EditTd
                    onClick={() => {
                      setIsOpen(true);
                      setuserId(user._id);
                    }}
                  >
                    <AiOutlineInfoCircle />
                  </EditTd>

                  {isOpen && user._id === userId && (
                    <InfoModal
                      setIsOpen={setIsOpen}
                      user={user}
                      isEditOpen={isEditOpen}
                      setisEditOpen={setisEditOpen}
                    />
                  )}
                </TrStudentsTable>
              ))}

            {actualPage > 1 && (
              <AppButton
                isAdd={false}
                onClick={() => {
                  setActualPage(actualPage - 1);
                }}
              >
                <AlignIcons>
                  Previous <AiOutlineDoubleLeft />
                </AlignIcons>
              </AppButton>
            )}
            {actualPage < data.length / usersPerPage && (
              <AppButton
                isAdd={false}
                onClick={() => {
                  setActualPage(actualPage + 1);
                }}
              >
                <AlignIcons>
                  Next <AiOutlineDoubleRight />
                </AlignIcons>
              </AppButton>
            )}
          </StudentsTable>
        </GridContainer>
      </HomeContainer>
    </div>
  );
};
