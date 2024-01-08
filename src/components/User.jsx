
export function User(prop) {
  const { id, name, deleteUser, editUser } = prop

  return (
    <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>
            <div className="text-center">
              <button onClick={() => editUser(id)} className="btn btn-success ms-2 fw-bold">Edit</button>
              <button onClick={() =>deleteUser(id)} className="btn btn-danger ms-2 fw-bold">Delete</button>
            </div>
          </td>
        </tr>
  )
}
