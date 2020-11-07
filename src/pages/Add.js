import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { postList } from '../api/list';

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
    <div>
      <Link to="/">Back</Link> Add
      <form onSubmit={handleSubmit}>
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
      </form>
      {loading && <div>Loading...</div>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}

export default Add;
