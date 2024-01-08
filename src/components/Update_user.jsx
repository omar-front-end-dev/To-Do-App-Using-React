/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export function Update_user(prop) {
    const { user, updateUser } = prop

    const [name, setName] = useState("");
    useEffect(() =>{
        setName(user.name)
    }, [])

    const handel_name = (e) =>{
    setName(e.target.value)
  }


    const handel_submit = (e) =>{
        e.preventDefault()
        updateUser(name)
    };

  return (
    <form className="form w-75 mx-auto" onSubmit={handel_submit}>
      <div className="mb-3">
        <label className="mb-2">Type User Name</label>
        <input type="text" name="name" value={name} onChange={handel_name} className="form-control p-2" />
      </div>
      <div className="text-center">
        <button className="btn btn-success" type="submit">
            Update User
        </button>
      </div>
    </form>
  )
}
