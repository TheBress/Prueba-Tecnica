import {
  AvatarImage,
  GridContainer,
  Text,
  InfoContainer,
} from '../styles/infoModal/styles';
import { BiUser } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';
import { GiSmartphone } from 'react-icons/gi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { User } from '../models';

interface Props {
  user: User;
}

export const FieldsInfoModal = ({ user }: Props) => {
  return (
    <>
      <AvatarImage src={user.avatar} alt="avatar" />

      <GridContainer>
        <div>
          <BiUser size="23" />
        </div>
        <InfoContainer>
          <Text isProperty={true}>Nombre y apellidos</Text>
          <Text>{`${user.name} ${user.lastName}`}</Text>
        </InfoContainer>
      </GridContainer>

      <GridContainer>
        <div></div>
        <InfoContainer>
          <Text isProperty={true}>Nombre de usuario</Text>
          <Text>{user.username}</Text>
        </InfoContainer>
      </GridContainer>

      <GridContainer>
        <div>
          <MdOutlineEmail size="23" />
        </div>
        <InfoContainer>
          <Text isProperty={true}>Email</Text>
          <Text>{user.email}</Text>
        </InfoContainer>
      </GridContainer>

      <GridContainer>
        <div>
          <GiSmartphone size="23" />
        </div>
        <InfoContainer>
          <Text isProperty={true}>Móvil</Text>
          <Text>{user.phone}</Text>
        </InfoContainer>
      </GridContainer>

      <GridContainer>
        <div>
          <AiOutlineCalendar size="23" />
        </div>
        <InfoContainer>
          <Text isProperty={true}>Fecha de inscripción</Text>
          <Text>{user.inscriptionDate.replaceAll('/', '-')}</Text>
        </InfoContainer>
      </GridContainer>
    </>
  );
};
