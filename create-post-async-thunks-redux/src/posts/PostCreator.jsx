import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

function PostCreator({ userId }) {
  const users = useSelector(selectAllUsers)
  const creator = users.find(user => user.id === userId)

  return (
    <span>Posted by {creator ? creator.name : "Unknown creator"}</span>
  )
}

export default PostCreator
