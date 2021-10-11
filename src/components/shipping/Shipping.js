import React from "react"
import { useForm } from "react-hook-form"
import css from "./shipping.css"

const Shipping = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <div className="shipping-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Name" defaultValue="test" {...register("name")} />
          <input
            placeholder="Address"
            defaultValue=""
            {...register("address")}
          />
          <input
            placeholder="Phone Number"
            defaultValue=""
            {...register("phone number")}
          />
          <input placeholder="City" defaultValue="" {...register("city")} />

          <input
            placeholder="Email"
            {...register("email", { required: true })}
          />

          {errors.email && <span className="error">Email is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Shipping
