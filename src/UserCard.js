const UserCard = ({ user }) => {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <hr />
      <div className="row">
        <h3>email:</h3>
        <h4 style={{ width: "300px" }}>{user.email}</h4>
      </div>
      <div className="row">
        <h3>Address:</h3>
        <div>
          <div className="row1">
            <h4>street:</h4>
            <h5>{user.address.street}</h5>
          </div>
          <div className="row1">
            <h4>city:</h4>
            <h5>{user.address.city}</h5>
          </div>
          <div className="row1">
            <h4>zip code:</h4>
            <h5>{user.address.zipcode}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
