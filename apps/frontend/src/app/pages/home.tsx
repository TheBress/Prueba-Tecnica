import { getData, IsAuth } from '../functions';

import {
  AlignIcons,
  Text,
  FlexContainer,
  GridContainer,
  HomeContainer,
  AppButton,
} from '../styles/home/styles';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { useEffect, useRef, useState } from 'react';

import { Menu } from '../components/menu';
import { BsGraphUp } from 'react-icons/bs';
import { User } from '../models';
import { Sidebar } from '../components/sidebar';
import { Table } from '../components/table';

export const Home = () => {
  IsAuth();
  const { data } = getData();
  const [actualPage, setActualPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userId, setuserId] = useState<string>('');
  const [isEditOpen, setisEditOpen] = useState<boolean>(false);
  const [filterUsers, setfilterUsers] = useState<User[]>(data);
  const usersPerPage: number = 15;
  const value = useRef<string>('');

  const totalPages: number =
    Math.round(filterUsers.length / usersPerPage) !== 0
      ? Math.round(filterUsers.length / usersPerPage)
      : 1;

  useEffect(() => {
    setfilterUsers(data);
  }, [data]);

  return (
    <>
      <Menu
        setfilterUsers={setfilterUsers}
        setActualPage={setActualPage}
        data={data}
        value={value}
      />

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
          <Sidebar />
          <Table
            isEditOpen={isEditOpen}
            isOpen={isOpen}
            data={data}
            filterUsers={filterUsers}
            usersPerPage={usersPerPage}
            actualPage={actualPage}
            setActualPage={setActualPage}
            setIsOpen={setIsOpen}
            setisEditOpen={setisEditOpen}
            setuserId={setuserId}
            totalPages={totalPages}
            userId={userId}
            value={value}
          />
        </GridContainer>
      </HomeContainer>
    </>
  );
};
