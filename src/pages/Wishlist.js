import { Link, useParams } from 'react-router-dom';
import WishListItem from '../components/WishListItem';
import Button from '../components/Button';

const Wishlist = () => {
  const { name } = useParams();
  return (
    <>
      <WishListItem name={name} />
      <Link to="/">Back</Link>
      <Button>+</Button>
    </>
  );
};

export default Wishlist;
