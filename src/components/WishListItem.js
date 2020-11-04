import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 20px lightblue;
`;

export default function WishListItem({ name }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <Container>{capitalizeFirstLetter(name)}</Container>
    </>
  );
}

WishListItem.propTypes = {
  name: PropTypes.string.isRequired,
};
