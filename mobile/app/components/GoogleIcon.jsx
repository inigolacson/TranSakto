import * as React from "react";
import Svg, { Path } from "react-native-svg";

const GoogleIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19.6 20"
    width={props.width || 24}
    height={props.height || 24}
    {...props}
  >
    <Path
      d="M19.6 10.23a11.4 11.4 0 0 0-.18-2.05H10v3.87h5.38a4.6 4.6 0 0 1-2 3v2.51h3.23a9.76 9.76 0 0 0 2.99-7.33"
      fill="#4285f4"
    />
    <Path
      d="M10 20a9.6 9.6 0 0 0 6.62-2.42l-3.23-2.51a6 6 0 0 1-9-3.17H1.06v2.59A10 10 0 0 0 10 20"
      fill="#34a853"
    />
    <Path
      d="M4.4 11.9a6 6 0 0 1 0-3.8V5.51H1.06a10 10 0 0 0 0 9Z"
      fill="#fbbc04"
    />
    <Path
      d="M10 4a5.38 5.38 0 0 1 3.82 1.49L16.69 2.6A9.6 9.6 0 0 0 10 0a10 10 0 0 0-8.94 5.51l3.34 2.59A6 6 0 0 1 10 4"
      fill="#e94235"
    />
  </Svg>
);

export default GoogleIcon;
