import { Link } from 'react-router-dom';
const UserList = ({ users }) => (
  <>
    <ul>
      { users.map( u => 
        <li>
          {u.first_name} {u.last_name}
          <button >Show</button>
        </li>
      )}
    </ul>
  </>
)

export default UserList