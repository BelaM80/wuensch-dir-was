// eslint-disable-next-line
export async function getLists() {
  const response = await fetch('http://localhost:5000/lists');
  const lists = await response.json();
  return lists;
}

export async function getListById(id) {
  const response = await fetch(`http://localhost:5000/lists/${id}`);
  const list = await response.json();
  return list;
}

export async function deleteListById(id) {
  await fetch(`http://localhost:5000/lists/${id}`, {
    method: 'DELETE',
  });
}

export async function postList(list) {
  const response = await fetch(`http://localhost:5000/lists/`, {
    method: 'POST',
    body: JSON.stringify(list),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const newList = await response.json();
  return newList;
}

export async function addWishes(id, wishes) {
  await fetch(`http://localhost:5000/lists/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      items: wishes,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
