import {
  AlignIcons,
  Divider,
  MenuContainer,
  MenuItem,
  SearchInput,
  UserIcon,
} from '../styles/home/styles';
import { useNavigate } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';

import { MdOutlineEmail } from 'react-icons/md';
import { BsBell } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';

import { Logo } from '../components/logo';
import { User } from '../models';
import { useRef, useState } from 'react';

interface Props {
  setfilterUsers: (value: User[]) => void;
  data: User[];
}

export const Menu = ({ setfilterUsers, data }: Props) => {
  const navigate = useNavigate();
  const value = useRef('');

  const searchUsers = (inputValue: string) => {
    value.current = inputValue;
    const filterUsers = data.filter(
      (user) =>
        user.name.toLowerCase().includes(value.current.toLowerCase()) ||
        user.lastName.toLowerCase().includes(value.current.toLowerCase())
    );
    setfilterUsers(filterUsers);
  };

  return (
    <MenuContainer>
      <Logo isWhite={true} />
      <MenuItem isIcon={false}>
        <AlignIcons>
          <AiOutlineSearch />
          <SearchInput
            value={value.current}
            onChange={(e) => {
              searchUsers(e.target.value);
            }}
            placeholder="Buscar"
          />
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
  );
};