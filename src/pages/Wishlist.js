import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import WishListItem from '../components/WishListItem';
import Button from '../components/Button';

import { getListById } from '../api/list';

const Wishlist = () => {
  const { id } = useParams();
  const [list, setList] = useState(null);

  useEffect(async () => {
    const entry = await getListById(id);
    setList(entry);
  }, []);
  return (
    <>
      <WishListItem name={list?.title} />
      {list?.items.map((item) => {
        return <div>{item}</div>;
      })}
      <Link to="/">Back</Link>
      <Button>+</Button>
    </>
  );
};

export default Wishlist;
