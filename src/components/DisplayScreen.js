import React from 'react'

const DisplayScreen = ({output}) => {

  return (
    <input type="text" className="value" readonly name="txt" value={output} />
  )
}

export default DisplayScreen
