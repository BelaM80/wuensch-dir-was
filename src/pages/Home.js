import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import Button from '../components/Button';
import { getLists } from '../api/list';
import Header from '../components/Header';
import NameList from '../components/NameList';
import DivStyled from '../components/DivStyled';
import LinkStyled from '../components/LinkStyled';

const Home = () => {
  const [lists, setLists] = useState(null);

  useEffect(async () => {
    const newLists = await getLists();
    setLists(newLists);
  }, []);
  return (
    <body>
      <Header>
        <h1>
          <span role="img" aria-label="christmastree">
            🎄
          </span>
          Christmas Wishlist
          <span role="img" aria-label="gift">
            🎁
          </span>
        </h1>
      </Header>
      <DivStyled>
        {lists?.map((list) => (
          <LinkStyled key={list.id} to={`/${list.id}`}>
            <NameList>{list.title}´s List</NameList>
          </LinkStyled>
        ))}
        <Button>
          <LinkStyled to="/add">+</LinkStyled>
        </Button>
      </DivStyled>
    </body>
  );
};

export default Home;
