import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import styled from 'styled-components';
import WishListItem from '../components/WishListItem';
import Button from '../components/Button';
import LinkStyled from '../components/LinkStyled';
import BackButton from '../components/BackButton';
import { deleteListById, getListById, addWishes } from '../api/list';
import DeleteButton from '../components/Deletebutton';
import DivStyled from '../components/DivStyled';
import NameList from '../components/NameList';

const Wishlist = () => {
  const { id } = useParams();
  const history = useHistory();
  const [list, setList] = useState(null);
  const [itemsToAdd, setItemsToAdd] = useState('');

  const handleChange = async (event) => {
    event.preventDefault();
    setItemsToAdd([...list.items, event.target.value]);
  };

  const handleSubmit = () => {
    addWishes(list?.id, itemsToAdd);
  };

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
    <body>
      <WishListItem name={list?.title} />
      <DivStyled>
        {list?.items.map((item) => {
          return <NameList>{item}</NameList>;
        })}
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Wish:
              <input
                type="text"
                value={itemsToAdd}
                onChange={handleChange}
                placeholder="Enter Wish"
                required
              />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </DivStyled>
      <BackButton>
        <LinkStyled to="/">
          <span role="img" aria-label="back">
            ◁
          </span>
        </LinkStyled>
      </BackButton>
      <DeleteButton onClick={handleClick}>✖︎</DeleteButton>
    </body>
  );
};

export default Wishlist;
