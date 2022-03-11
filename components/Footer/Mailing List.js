import { useState } from "react"

// import TextInput from "../TextInput"
import User from "../Icons/User"
import Email from "../Icons/Email"

const MailingList = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleChange = (e) => {
    if (e.target.getAttribute("data-name")) {
      setName(e.target.value)
    }
    if (e.target.getAttribute("data-email")) {
      setEmail(e.target.value)
    }
  }

  const handleSubmit = () => {
    console.log("name: ", name)
    console.log("email: ", email)
  }

  return (
    <div className="flex max-w-sm flex-col justify-between space-y-6 rounded-lg border border-darker bg-lighter p-6 lg:max-w-none lg:space-y-0">
      <h4 className="font-serif text-2xl font-bold lg:text-2xl">
        Join our Mailing List
      </h4>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="name" className="hidden">
          Full name
        </label>
        <div className="mb-4 flex items-center space-x-2">
          <User foreground="#362009" background="none" />
          <input
            type="text"
            id="name"
            // autoComplete="off"
            className="rounded-md border border-darker bg-lighter px-2 py-1 text-sm placeholder-darker ring-darker focus:border-darker focus:ring-darker md:text-base"
            placeholder="Full name"
            data-name
            value={name}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="email" className="hidden">
          Email address
        </label>
        <div className="flex items-center space-x-2">
          <Email foreground="#362009" background="none" />
          <input
            type="email"
            id="email"
            // autoComplete="off"
            className="rounded-md border border-darker bg-lighter px-2 py-1 text-sm placeholder-darker ring-darker focus:border-darker focus:ring-darker md:text-base"
            placeholder="Email address"
            data-email
            value={email}
            onChange={handleChange}
          />
        </div>
      </form>

      <button
        type="submit"
        className="w-full rounded-md bg-darker py-2 text-sm font-medium text-lighter lg:text-base"
        onClick={handleSubmit}
      >
        Join Now
      </button>
    </div>
  )
}

export default MailingList
