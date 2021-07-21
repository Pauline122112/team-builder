import React from 'react'

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { values, update, submit } = props

  const onChange = evt => {
    // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
    // a) pull the name of the input from the event object
    // b) pull the value of the input from the event object
    const { name, value} = evt.target
    // c) use the `update` callback coming in through props
    update(name, value)
  }

  const onSubmit = evt => {
    // 🔥 STEP 7 - IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    evt.preventDefault()
    // c) use the `submit` callback coming in through props
    submit()
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Username
              <input
                type='text'
                name='username'
                onChange={onChange}
                value={values.username}
                placeholder='type a username'
                maxLength='30'
              />
        </label>

        <label>Email
          <input
                type='email'
                name='email'
                onChange={onChange}
                value={values.email}
                placeholder='type a e-mail'
                maxLength='30'
              />
        </label>

        <label>Role
          {/* 🔥 STEP 5 - Make dropdown for role. */}
          <select name='role' value={values.role} onChange={onChange}>
              <option value=''>-- select role --</option>
              <option value='instructor'>Pilot</option>
              <option value='student'>Student</option>
              <option value='tl'>Team Lead</option>

          </select>
          
        </label>
                  {/* Form can't be submitted until info is filled */}
        <div className='submit'>
          <button disabled={!values.email || !values.username || !values.role}>submit</button>
        </div>
      </div>
    </form>
  )
}
