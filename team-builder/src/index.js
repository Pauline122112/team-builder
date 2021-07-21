import React, { useState } from 'react'
import { render } from 'react-dom'

import App from './App'



const teamMembers = [
  { memberName: 'Jason', memLocation: 'Memphis' },
  { memberName: 'Pauline', memLocation: 'New Zealand' },
  { memberName: 'Murphy', memLocation: 'Alabama' },
  { memberName: 'Peter', memLocation: 'Fiji' },
  
]
//two values of state
const initialFormValues = {
  memberName: '',
  memLocation: '',
}


//two slices of state
function SimpleTeamForm() {
  const [members, setMembers] = useState(teamMembers)
  const [formValues, setFormValues] = useState(initialFormValues)

  const change = evt => {
    //change code
    const { name, value } = evt.target
    setFormValues({ ...formValues, [name]: value })//name will be either memberName or memberValue
  }

  const submit = evt => {
    //submit code
    evt.preventDefault()//stops from resetting

    const newMember = {
      memberName: formValues.memberName.trim(),
      memLocation: formValues.memLocation.trim()
    }
    // setMembers(members.concat(newMember))
    setMembers([ ...members, newMember])
    setFormValues(initialFormValues)

  }
  return (
    <div className='container'>
      <h1>Simple Team Builder</h1>

      {
        members.map((member, idx) => {
          return <div key={idx}>{member.memberName} is from {member.memLocation}
    </div>

        })
      }
    <form onSubmit={submit}>
      <input name='memberName' type='text' value={formValues.memberName} onChange={change} />
      <input name='memLocation' type='text' value={formValues.memLocation} onChange={change} />

      <button>SUBMIT</button>
    </form>
  </div>
  )
}


render(
  <>
    <SimpleTeamForm />
    {/* <App /> */}
  </>
  , document.querySelector('#root')
)
