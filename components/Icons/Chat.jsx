import React from "react"

const Chat = ({ background, foreground }) => {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill={background}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 16.9595H4V21.0405L9.101 16.9595H14C15.103 16.9595 16 16.0625 16 14.9595V6.9595C16 5.8565 15.103 4.9595 14 4.9595H2C0.897 4.9595 0 5.8565 0 6.9595V14.9595C0 16.0625 0.897 16.9595 2 16.9595Z"
        fill={foreground}
      />
      <path
        d="M18 0.959503H6C4.897 0.959503 4 1.8565 4 2.9595H16C17.103 2.9595 18 3.8565 18 4.9595V12.9595C19.103 12.9595 20 12.0625 20 10.9595V2.9595C20 1.8565 19.103 0.959503 18 0.959503Z"
        fill={foreground}
      />
    </svg>
  )
}

export default Chat
