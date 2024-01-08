/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Add_users } from "./components/Add_users"
import { Page_title } from "./components/Page_title"
import { User } from "./components/User";
import { Update_user } from "./components/Update_user";
import { useLocalStorage } from "./hooks/useLocalStorage"

function App() {
  const [state, setState] = useState(false);
  const [user, setUser] = useState({});
  const { addToLocalStorage, getFromLocalStorage } =  useLocalStorage();
  const [users, setUsers] = useState(getFromLocalStorage("users"));
  
  const storeUser = (data) =>{
    setUsers([...users, data])
    addToLocalStorage("users",[...users, data])
  }


  const deleteUser = (id) =>{
    let newUsers = users.filter(item => item.id != id);
    setUsers([...newUsers])
    addToLocalStorage("users",[...newUsers])
  }

  const editUser = (id) =>{
    let user = users.find((item) => item.id == id)
    setState(true)
    setUser(user)
  }

  const updateUser = (name) =>{
    let  updatedUsers = users.map(item =>{
      if (item.id == user.id) {
        user.name = name
        return user;
      }else{
        return item
      }
    })
    setState(false)
    setUsers([...updatedUsers])
    addToLocalStorage("users", [...updatedUsers])
  }

  return (
    <div className="container">
     <div className="row">
      <div className="col-12">
        <Page_title title="ALL USERS"/>
        
        {!state ? <Add_users storeUser={storeUser}/> : <Update_user user={user} updateUser={updateUser} />}
        <table className=" table table-bordered mt-5">
            <thead>
                <tr className="text-center">
                <th>ID</th>
                <th>NAME</th>
                <th>ACTIONS</th>
                </tr>
            </thead>
              <tbody>
                {users.map(item =>{
                    return <User 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    deleteUser={deleteUser}
                    editUser={editUser}
                  />
                })}
              </tbody>
          </table>
      </div>
     </div>
    </div>
  )
}

export default App
