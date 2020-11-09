import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { postList } from '../api/list';
import BackButton from '../components/BackButton';
import DivStyled from '../components/DivStyled';
import Header from '../components/Header';
import LinkStyled from '../components/LinkStyled';

const ErrorMessage = styled.p`
  color: red;
`;

function Add() {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setErrorMessage(null);
      const newList = await postList({
        title,
        items: [],
      });
      history.push(`/${newList.id}`);
    } catch (error) {
      setLoading(false);
      setErrorMessage(false);
    }
  };

  return (
    <body>
      <Header>
        <h1>Add</h1>
      </Header>
      <div>
        <DivStyled>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Enter Name"
                  required
                />
              </label>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </DivStyled>
        <BackButton>
          <LinkStyled to="/">◁</LinkStyled>
        </BackButton>{' '}
        {loading && <div>Loading...</div>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    </body>
  );
}

export default Add;
