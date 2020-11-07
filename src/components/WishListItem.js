import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 20px lightblue;
  text-align: center;
  color: #fff;
`;

export default function WishListItem({ name }) {
  return (
    <>
      <Container>{name}</Container>
    </>
  );
}

WishListItem.propTypes = {
  name: PropTypes.string.isRequired,
};
