// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  let bgColor = undefined
  if (props.color == "primary") {
    bgColor = "blue";
  } else if (props.color =="secondary") {
    bgColor = "lightblue";
  }
    return(
        <button
        css={css`
        background-color: ${bgColor}
        margin: 10px
        width: 150px
        height: 50px
        border: none
        border-radius: 5px
        color: white
        font-size: 16px
        `}
        >
            Button
        </button>
    )
}

export default Button;
