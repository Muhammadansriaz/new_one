import React from "react";
import { Link } from "react-router-dom";
const Table = ({users,dell_item,edit_item}) => {
  return (
    <div>
      {users.map((user,ind) => {
        return (
          <div>
          <table>
          <tbody>
              <tr key={ind}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.amount}</td>
                <td>
                  <img
                    width="100px"
                    height="80px"
                    src={user.img}
                    alt="img"
                  ></img>
                </td>

                <td>
                  <button
                    onClick={() => {
                   dell_item(ind);
                    }}
                  >
                    Dell
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      edit_item(ind);
                    }}
                  >
                    Edit
                  </button>
                </td>
                
                <td>
                <Link to="/Trasaction">
      
                  <button>
                    Transactions
                  </button>
                  </Link>
                </td>

              </tr>
            </tbody>
          </table>
          </div>

        );
      })}
    </div>
  );
};

export default Table;
