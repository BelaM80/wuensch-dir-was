import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { postList } from '../api/list';

function Add() {
  const [title, setTitle] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newList = await postList({
      title,
      items: [],
    });
    history.push(`/${newList.id}`);
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
    </div>
  );
}

export default Add;
