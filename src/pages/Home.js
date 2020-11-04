import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { getLists } from '../api/list';

const Home = () => {
  const [lists, setLists] = useState(null);

  useEffect(async () => {
    const newLists = await getLists();
    setLists(newLists);
  }, []);
  return (
    <div>
      Home
      {lists?.map((list) => (
        <Link key={list.id} to={`/${list.title}`}>
          {list.title}
        </Link>
      ))}
      <Button>
        <Link to="/add">+</Link>
      </Button>
    </div>
  );
};

export default Home;
