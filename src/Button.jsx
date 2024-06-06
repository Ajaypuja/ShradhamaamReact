import React from 'react'
function printHello(e) {
    console.log("Hello!")
    console.log(e)
  }
function printBye() {
    console.log("Bye!")
  }
function handleDbClick() {
    console.log("you double clicked!")
  }

const Button = () => {
  return (
    <div>
      <button onClick={printHello} >Click me!</button>
      <p onMouseOver={printBye} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reprehenderit, veniam, pariatur, delectus voluptatibus officia ea corporis autem consequatur molestias dolorum laboriosam commodi facilis odio iste quo fugiat obcaecati maxime.</p>
      <button onDoubleClick={handleDbClick}>double click me</button>
    </div>
  )
}

export default Button
