import { Link, useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import WishListItem from '../components/WishListItem';
import Button from '../components/Button';

import { deleteListById, getListById } from '../api/list';
import DeleteButton from '../components/Deletebutton';

const Wishlist = () => {
  const { id } = useParams();
  const history = useHistory();
  const [list, setList] = useState(null);

  const handleClick = async () => {
    await deleteListById(list.id);
    history.push('/');
  };

  useEffect(async () => {
    const entry = await getListById(id);
    setList(entry);
  }, []);
  if (!list) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <WishListItem name={list?.title} />
      {list?.items.map((item) => {
        return <div>{item}</div>;
      })}
      <Link to="/">Back</Link>
      <Button>+</Button>
      <DeleteButton onClick={handleClick}>delete</DeleteButton>
    </>
  );
};

export default Wishlist;
