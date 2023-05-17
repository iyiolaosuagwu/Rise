import React from 'react'
import Svg, { Path } from "react-native-svg"


function Feedtabicon({focused}) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={22}
    fill="none"
  >
    <Path
      fill={focused ? "#41BCC4" : "#94A1AD"}
      fillRule="evenodd"
      d="M.1 1.5A1.5 1.5 0 0 1 1.6 0h19a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 20.6 7h-19A1.5 1.5 0 0 1 .1 5.5v-4Zm0 10A1.5 1.5 0 0 1 1.6 10h10a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-10a1.5 1.5 0 0 1-1.5-1.5v-9ZM16.6 10a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-4Z"
      clipRule="evenodd"
    />
  </Svg>
  )
}

export default Feedtabicon