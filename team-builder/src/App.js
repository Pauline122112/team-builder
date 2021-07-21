import React, { useState } from 'react'
import Friend from './components/Friend'
import FriendForm from './components/FriendForm'




// the shape of the state that drives the form
//text input
const initialFormValues = {
  username: '',
  email: '',
  role: '',

}

const starterFriends = [
  {username: 'Pauline Stokes',
  email: 'Pauline.stokes007@gmail.com',
  role: 'Web Developer' }
]

export default function App() {
  const [friends, setFriends] = useState([starterFriends])
  const [formValues, setFormValues] = useState(initialFormValues)


  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }
  
  const submitForm = () => {
    const newFriend= {
      username: formValues.username.trim(),
      email:formValues.email.trim(),
      role: formValues.role,
    }
     if (!newFriend.username || !newFriend.email || !newFriend.role){
      return
  }

  setFriends([ ...friends, newFriend])
  setFormValues(initialFormValues)
  }

  return (
    
  <div className='container'>
    <h1>TEAM BUILDING APP</h1>
  
  <FriendForm
  
  values={formValues}
  update={updateForm}
  submit={submitForm}
  
  />
  
  {
    friends.map(friend => {
      return (
        <Friend key={friend.id} details={friend} />
        )
      })
      
    }
    </div>
    )
}