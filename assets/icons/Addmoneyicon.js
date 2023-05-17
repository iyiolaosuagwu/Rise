import * as React from "react"
import Svg, { Path } from "react-native-svg"


function Addmoneyicon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
  >
    <Path fill="transparent" d="M.5.5h21v21H.5z" />
    <Path
      stroke="#0898A0"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4.132 11h13.736M11 17.868V4.132"
    />
  </Svg>
  )
}

export default Addmoneyicon