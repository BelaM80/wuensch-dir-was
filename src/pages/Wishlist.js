import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import WishListItem from '../components/WishListItem';

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
  const [items, setItems] = useState([]);

  const handleChange = async (event) => {
    setItemsToAdd(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItems = [...items, itemsToAdd];
    setItems(newItems);
    addWishes(list?.id, newItems);
    setItemsToAdd('');
  };

  const handleClick = async () => {
    await deleteListById(list.id);
    history.push('/');
  };

  useEffect(async () => {
    const entry = await getListById(id);
    setList(entry);
    setItems(entry.items);
  }, []);
  if (!list) {
    return <div>Loading...</div>;
  }

  return (
    <body>
      <WishListItem name={list?.title} />
      <DivStyled>
        {items.map((item) => (
          <NameList key={item}>{item}</NameList>
        ))}
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
