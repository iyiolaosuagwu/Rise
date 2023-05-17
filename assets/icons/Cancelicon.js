import React from 'react'
import Svg, { Path } from "react-native-svg"


function Cancelicon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={21}
    fill="none"
  >
    <Path
      stroke="#0898A0"
      strokeWidth={2}
      d="M16.006 15.669 5.994 5.657M5.994 15.669 16.006 5.657"
    />
  </Svg>
  )
}

export default Cancelicon