const CustomerItem = ({ id, userName, email }) => {
  console.log(userName);
  console.log(email);
  return (
    <div>
      <div>
        <h2>{userName}</h2>
        <h2>{email}</h2>
      </div>
      <div>
        <button>Purchase Archive</button>
        <button>WishList</button>
      </div>
    </div>
  );
};

export default CustomerItem;
