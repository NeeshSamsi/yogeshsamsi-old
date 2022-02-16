import React from "react"

import TextInput from "../TextInput"

const MailingList = () => {
  return (
    <div className="flex max-w-sm flex-col justify-between space-y-6 rounded-xl border border-dark bg-lighter p-6 lg:max-w-none lg:space-y-0">
      <h4 className="font-serif text-xl font-bold lg:text-2xl">
        Join our Mailing List
      </h4>
      <TextInput
        label="Name"
        placeholder="Enter your Name"
        clrBg="#F4EDE1"
        clrFg="#444"
        clrFgFocus="#222"
      />
      <TextInput
        label="Email"
        placeholder="Enter your Email"
        clrBg="#F4EDE1"
        clrFg="#444"
        clrFgFocus="#222"
      />
      {/* Material UI Submit Button */}
      <button className="w-full rounded-md bg-dark py-2 text-sm font-medium text-light lg:text-base">
        Join Now
      </button>
    </div>
  )
}

export default MailingList
