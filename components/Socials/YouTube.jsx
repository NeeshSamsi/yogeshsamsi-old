import React from "react";

const YouTube = ({ foreground, background }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 36 36" fill={background} xmlns="http://www.w3.org/2000/svg">
      <path d="M15.758 21.372L21.613 18l-5.855-3.372v6.744z" fill={foreground} />
      <path
        d="M18 0C8.06 0 0 8.06 0 18s8.06 18 18 18 18-8.06 18-18S27.94 0 18 0zm11.247 18.018s0 3.65-.463 5.411a2.819 2.819 0 01-1.983 1.983c-1.76.463-8.801.463-8.801.463s-7.023 0-8.801-.482a2.819 2.819 0 01-1.983-1.983C6.752 21.67 6.752 18 6.752 18s0-3.65.464-5.41a2.876 2.876 0 011.983-2.002c1.76-.463 8.801-.463 8.801-.463s7.041 0 8.801.482a2.819 2.819 0 011.983 1.982c.482 1.76.463 5.43.463 5.43z"
        fill={foreground}
      />
    </svg>
  );
};

export default YouTube;
