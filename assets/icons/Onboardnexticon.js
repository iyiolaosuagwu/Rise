import React from 'react'
import Svg, { Path } from "react-native-svg"

function Onboardnexticon({fill}) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={12}
    fill="none"
  >
    <Path
      stroke={fill}
      strokeWidth={2}
      d="M5.867 1 11 6m0 0-5.133 5M11 6H0"
    />
  </Svg>
  )
}

export default Onboardnexticon