import {
  FormContainer,
  GridInputContainer,
  Input,
  Label,
} from '../styles/editModal/styles';

interface Props {
  name: string;
  setName: (value: string) => void;
  surname: string;
  setSurname: (value: string) => void;
  username: string;
  setUsername: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
}

export const FieldsEditModal = ({
  name,
  setName,
  surname,
  setSurname,
  username,
  email,
  setEmail,
  phone,
  setPhone,
  setUsername,
}: Props) => {
  return (
    <div>
      <FormContainer>
        <GridInputContainer>
          <div>
            <Label>Nombre</Label>
            <Input
              widthInput="90%"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <Label>Apellidos</Label>
            <Input
              widthInput="90%"
              type="text"
              name="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
        </GridInputContainer>

        <Label>Nombre de usuario</Label>
        <Input
          widthInput="95%"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Label>Email</Label>
        <Input
          widthInput="95%"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label>Móvil</Label>
        <Input
          widthInput="45%"
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </FormContainer>
    </div>
  );
};
