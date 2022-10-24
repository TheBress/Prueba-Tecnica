import {
  AlignIcons,
  StudentsTable,
  ThStudentsTable,
  TrStudentsTable,
  AppButton,
  ConnectionTag,
  EditTd,
  THeader,
  THItem,
  TDItem,
  ButtonsContainer,
  TextTable,
} from '../styles/home/styles';
import {
  AiOutlineInfoCircle,
  AiOutlineDoubleRight,
  AiOutlineDoubleLeft,
} from 'react-icons/ai';

import { InfoModal } from '../components/infoModal';
import { User } from '../models';

interface Props {
  data: User[];
  filterUsers: User[];
  usersPerPage: number;
  actualPage: number;
  setIsOpen: (value: boolean) => void;
  setuserId: (value: string) => void;
  setisEditOpen: (value: boolean) => void;
  setActualPage: (value: number) => void;
  isOpen: boolean;
  userId: string;
  isEditOpen: boolean;
  totalPages: number;
  value: any;
}

export const Table = ({
  data,
  filterUsers,
  usersPerPage,
  actualPage,
  setIsOpen,
  setuserId,
  isOpen,
  userId,
  isEditOpen,
  setisEditOpen,
  setActualPage,
  totalPages,
  value,
}: Props) => {
  return (
    <>
      {data.length && filterUsers.length ? (
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

          {filterUsers
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

          <ButtonsContainer>
            <AppButton
              isAdd={false}
              disabled={actualPage === 1}
              onClick={() => {
                setActualPage(actualPage - 1);
              }}
            >
              <AlignIcons>
                <AiOutlineDoubleLeft /> Previous
              </AlignIcons>
            </AppButton>

            <AppButton
              isAdd={false}
              disabled={actualPage === totalPages}
              onClick={() => {
                setActualPage(actualPage + 1);
              }}
            >
              <AlignIcons>
                Next <AiOutlineDoubleRight />
              </AlignIcons>
            </AppButton>
          </ButtonsContainer>
          <span>
            Página {actualPage} de {totalPages}
          </span>
        </StudentsTable>
      ) : !data.length ? (
        <TextTable>Cargando...</TextTable>
      ) : value.current !== '' && !filterUsers.length ? (
        <TextTable>No se han encontrado usuarios.</TextTable>
      ) : (
        ''
      )}
    </>
  );
};
