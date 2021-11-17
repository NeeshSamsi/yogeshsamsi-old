import React from "react";

import TextInput from "../TextInput";

const MailingList = () => {
  return (
    <div className="flex flex-col justify-between space-y-6 lg:space-y-0 bg-light p-6 rounded-xl border border-dark max-w-sm lg:max-w-none">
      <h4 className="text-xl lg:text-2xl font-serif font-bold">Join our Mailing List</h4>
      <TextInput label="Name" placeholder="Enter your Name" clrBg="#F4EDE1" clrFg="#444" clrFgFocus="#222" />
      <TextInput label="Email" placeholder="Enter your Email" clrBg="#F4EDE1" clrFg="#444" clrFgFocus="#222" />
      {/* Material UI Submit Button */}
      <button className="bg-dark text-light text-sm lg:text-base font-medium py-2 w-full rounded-md">Join Now</button>
    </div>
  );
};

export default MailingList;
