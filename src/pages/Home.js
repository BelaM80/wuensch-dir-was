import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Add() {
  return (
    <div>
      Home
      <Link to="/béla">Béla&apos;s Wishlist</Link>
      <Link to="/laura">Laura&apos;s Wishlist</Link>
      <Button>
        <Link to="/add">+</Link>
      </Button>
    </div>
  );
}

export default Add;
