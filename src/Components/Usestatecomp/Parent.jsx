import React from 'react'
import { useState } from 'react'
import Child1 from './Child1';

const Parent = () => {
    const [theme,setTheme]=useState(true);
    function changetheme() {
        setTheme(!theme)
    }

  return (
    <div>
    <Child1 bg={theme} changetheme={changetheme}></Child1>
    </div>
  )
}

export default Parent
