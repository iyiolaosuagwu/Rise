import React from 'react'
import Svg, { Path } from "react-native-svg"

function Debiticon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
  >
    <Path
      stroke="#EB5757"
      strokeWidth={1.5}
      d="M1.358 10.583 10.642 1.3m0 0h-8.2m8.2 0v8.2"
    />
  </Svg>
  )
}

export default Debiticon