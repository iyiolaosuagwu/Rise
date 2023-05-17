import React from 'react'
import Svg, { Path } from "react-native-svg"



function Onboardpreviosicon({fill}) {
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
      d="M7.133 1 2 6m0 0 5.133 5M2 6h11"
    />
  </Svg>
  )
}

export default Onboardpreviosicon