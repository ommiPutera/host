import React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add count + 1</button>
    </div>
  )
}

export default Counter