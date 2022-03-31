import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers } from '../../../features/userSlice'


function UserList() {
  const dispatch = useDispatch()

  const user = useSelector((state)=>state.user)
  console.log(user)

  const deleteTodo = (index) => {
    dispatch(deleteUsers(index))
  }
  

  return (<>
    {user?.map((item,index)=>(  <div>
          <h2>
            <li><span style={{marginRight:"15px"}}>Name: {item.name}</span> <span style={{marginLeft:"15px"}}>Email: {item.email}</span></li>
          </h2>
          <button onClick={()=>deleteTodo(index)}>delete</button>
      </div>))}
      </>
  )
}

export default UserList
