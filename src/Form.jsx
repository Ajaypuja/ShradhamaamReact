import React from 'react'
function handleFormSubmit(e) {
    e.preventDefault()
    console.log("form was submitted")
}
const Form = () => {

  return (
    <form onSubmit={handleFormSubmit} >
      <input type="text" placeholder='write something!' />
      <button onClick={handleFormSubmit}>Submit</button>
    </form>
  )
}

export default Form
