const List = ({ users }) => {
  return (
    <>
      <h1 id="head">{users.length} Users</h1>

      {users.map((user) => {
        return <>hello world</>;
      })}

      {/*users.map((user) => {
        // const { id, name, age, image } = user;
        console.log("data=>", user.id);
        return (
          <div id="card" key={user.id}>
            <div id="">
              {user.name}
              {user.id}
              {user.age}
            </div>
            <div className="card 3">
              <div className="card_image">
                <img src={user.image} alt={user.name} />
              </div>
            </div>
          </div>
        );
      })*/}
    </>
  );
};
export default List;
