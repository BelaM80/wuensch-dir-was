import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

export const Container = styled.div`
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 20px #661c06;
  text-align: center;
  color: #fff;
  font-size: 1.6;
  background-color: #b32800;
`;

export default function WishListItem({ name }) {
  return (
    <>
      <Container>
        <h1>{name}´s List</h1>
      </Container>
    </>
  );
}

WishListItem.propTypes = {
  name: PropTypes.string.isRequired,
};
