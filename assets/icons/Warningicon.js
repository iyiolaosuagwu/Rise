import React from 'react'
import Svg, { Path } from "react-native-svg"

function Warningicon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
  >
    <Path
      fill="#0898A0"
      d="M9 7.41h2v-2H9v2Zm1 11c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-18a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 15h2v-6H9v6Z"
    />
  </Svg>
  )
}

export default Warningicon