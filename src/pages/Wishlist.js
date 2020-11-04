import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import WishListItem from '../components/WishListItem';
import Button from '../components/Button';

import { getListById } from '../api/list';

const Wishlist = () => {
  const { id } = useParams();
  const [listItem, setListItem] = useState(null);

  useEffect(async () => {
    const entry = await getListById(id);
    setListItem(entry);
  }, []);
  return (
    <>
      <WishListItem name={id} />
      <p>{listItem?.title}</p>
      <Link to="/">Back</Link>
      <Button>+</Button>
    </>
  );
};

export default Wishlist;
