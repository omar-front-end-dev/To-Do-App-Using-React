import { useState } from "react"

export function Add_users(prop) {
  const { storeUser } = prop
  const [name, setName] = useState("");



  const handel_name = (e) =>{
    setName(e.target.value)
  }


  const handel_submit = (e) =>{
    e.preventDefault()
    let user = {
      id: parseInt(Math.random() * 50000),
      name
    }
    if (user.name != "") {
      storeUser(user)
    }
    setName("")
  }
  return (
    <form className="form w-75 mx-auto" onSubmit={handel_submit}>
      <div className="mb-3">
        <label className="mb-2">Type User Name</label>
        <input type="text" name="name" value={name} onChange={handel_name} className="form-control p-2" />
      </div>
      <div className="text-center">
        <button className="btn btn-warning" type="submit">
            Add User
        </button>
      </div>
    </form>
  )
}
