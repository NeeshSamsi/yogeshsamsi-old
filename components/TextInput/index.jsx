import React from "react"
// import "./textinput.css";

const TextInput = ({ label, placeholder, clrBg, clrFg, clrFgFocus }) => {
  return (
    <>
      {/* Stackoverflow CSS that I don't understand */}
      <style jsx>
        {`
          div {
            position: relative;
          }

          input {
            background: ${clrBg};
            font-size: 1rem;
            outline: none;
            border: 1px solid ${clrFg};
            border-radius: 6px;
            padding: 0.5rem;
            color: ${clrFg};
            transition: 0.1s ease-out;
            width: 100%;
          }
          input:focus {
            border-color: ${clrFgFocus};
          }
          input:focus + label {
            color: ${clrFgFocus};
            top: 0;
            transform: translateY(-50%) scale(0.9) !important;
          }
          input:not(:placeholder-shown) + label {
            top: 0;
            transform: translateY(-50%) scale(0.9) !important;
          }
          input:not(:focus)::placeholder {
            opacity: 0;
          }

          label {
            position: absolute;
            font-size: 1rem;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            background-color: ${clrBg};
            color: ${clrFg};
            padding: 0 0.5rem;
            margin: 0 0.5rem;
            transition: 0.1s ease-out;
            transform-origin: left top;
            pointer-events: none;
          }
        `}
      </style>

      <div>
        <input placeholder={placeholder} type="text" />
        <label>{label}</label>
      </div>
    </>
  )
}

export default TextInput
