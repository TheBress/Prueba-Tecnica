import {
  EditButton,
  ModalContainer,
  ModalContent,
  CloseButton,
  FlexContainer,
  Tab,
  Button,
} from '../styles/infoModal/styles';

import { useState } from 'react';
import { FieldsInfoModal } from './fieldsInfoModal';
import { FieldsEditModal } from './fieldsEditModal';
import { FieldsCourseModal } from './fieldsCourseModal';
import { User } from '../models';

interface Props {
  user: User;
  setIsOpen: (value: boolean) => void;
  setisEditOpen: (value: boolean) => void;
  isEditOpen: boolean;
}

export const InfoModal = ({
  user,
  setIsOpen,
  setisEditOpen,
  isEditOpen,
}: Props) => {
  const [isCourseOpen, setisCourseOpen] = useState(false);

  const [name, setName] = useState<string>(user.name);
  const [surname, setSurname] = useState<string>(user.lastName);
  const [username, setUsername] = useState<string>(user.username);
  const [email, setEmail] = useState<string>(user.email);
  const [phone, setPhone] = useState<string>(user.phone);

  const updateUser = () => {
    user.name = name;
    user.lastName = surname;
    user.username = username;
    user.email = email;
    user.phone = phone;
    setisEditOpen(false);
  };

  return (
    <ModalContainer>
      <ModalContent>
        <FlexContainer>
          <Tab
            onClick={() => {
              setisCourseOpen(false);
            }}
            isActive={isCourseOpen ? false : true}
          >
            Perfil
          </Tab>
          {user.courses.length ? (
            <Tab
              isActive={isCourseOpen ? true : false}
              onClick={() => {
                setisCourseOpen(true);
                if (isEditOpen) setisEditOpen(false);
              }}
            >
              Cursos
            </Tab>
          ) : null}

          {!isEditOpen && !isCourseOpen && (
            <EditButton
              onClick={() => {
                setisEditOpen(true);
              }}
            >
              Editar estudiante
            </EditButton>
          )}

          {isEditOpen && (
            <div>
              <Button isSave={true} onClick={updateUser}>
                Guardar
              </Button>
              <Button
                onClick={() => {
                  setisEditOpen(false);
                }}
              >
                Cancelar edición
              </Button>
            </div>
          )}
        </FlexContainer>

        {!isEditOpen && !isCourseOpen && <FieldsInfoModal user={user} />}

        {isEditOpen && !isCourseOpen && (
          <FieldsEditModal
            name={name}
            setName={setName}
            surname={surname}
            setSurname={setSurname}
            username={username}
            setUsername={setUsername}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
          />
        )}

        {isCourseOpen && !isEditOpen && <FieldsCourseModal user={user} />}

        <CloseButton
          isEdited={isEditOpen}
          onClick={() => {
            setIsOpen(false);
            setisEditOpen(false);
            setisCourseOpen(false);
          }}
        >
          Cerrar
        </CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};
