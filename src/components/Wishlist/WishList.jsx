import WishListItem from "../WishListItem/WishListItem";
const WishList = ({ wishList = [], wishListPageLoaded }) => {
  const WishListItems = wishList.map((wishlistitem) => (
    <WishListItem
      key={wishlistitem.id}
      wishListItemId={wishlistitem.id}
      gameName={wishlistitem.gameName}
      thumbnail={wishlistitem.thumbnail}
    />
  ));
  return <div>{wishListPageLoaded ? WishListItems : <p>Loading</p>}</div>;
};

export default WishList;
/* import React, { useState, useEffect } from 'react';

const ComponentA = () => {
  const [componentALoaded, setComponentALoaded] = useState(false);

  // Simulate loading ComponentA
  useEffect(() => {
    // Simulate an API call or any async operation
    setTimeout(() => {
      setComponentALoaded(true);
    }, 2000); // Simulating a 2-second loading time
  }, []);

  return (
    <div>
      {componentALoaded ? <ComponentB /> : <p>Loading Component A...</p>}
    </div>
  );
};

const ComponentB = () => {
  return (
    <div>
      <p>Component B Loaded!</p>
      {/* Your Component B content goes here */
