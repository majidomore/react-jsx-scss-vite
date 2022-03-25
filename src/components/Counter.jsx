import React from "react";
import { useState } from 'react'

export const Counter = ({msg=""}) => {
    const [count, setCount] = useState(0);
    return  (
       <div>
            <h1>{msg}</h1>
            <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        </div>
    )
}
