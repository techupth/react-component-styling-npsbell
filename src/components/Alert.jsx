// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FrownIcon from "../assets/Frownicon.jsx";
import CheckIcon from "../assets/Frownicon.jsx";
import TriangleIcon from "../assets/Frownicon.jsx";
import CircleIcon from "../assets/Frownicon.jsx";;

function Alert(props) {
    let bgColor = undefined;
    let AlertIcon = undefined;

  if (props.icon === "error") {
    bgColor = "red";
    AlertIcon = FrownIcon
  } else if (props.icon === "warning") {
    bgColor = "orange";
    AlertIcon = TriangleIcon
  } else if (props.icon === "info") {
    bgColor = "yellow";
    AlertIcon = CircleIcon
  } else if (props.icom === "success") {
    bgColor = "green"
    AlertIcon = CheckIcon
  }

    return(
        <div
        css={css`
        display: flex
        flex-direction: colume
        background-color: ${bgColor}
        align-items: center
        justify-content: start
        margin: 10px
        width: 600px
        height: 70px
        font-size: 16px
        margin: 10px
        `}
        >
            {props.text}
        </div>
    )
}

export default Alert
