import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../../redux";

const UserContainer = ({ usersData, fetchUsers2 }) => {
  useEffect(() => {
    fetchUsers2();
  }, []);

  return usersData.loading ? (
    <h2>Loading</h2>
  ) : usersData.errror ? (
    <h2>{usersData.errror}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {usersData &&
          usersData.data &&
          usersData.data.map((user) => <li>{user.name}</li>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    usersData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers2: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
