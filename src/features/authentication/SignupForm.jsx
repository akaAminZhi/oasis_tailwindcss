import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useSignUp } from "./useSignUp";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signUp, isPending } = useSignUp();
  function onSubmit({ email, password, fullName }) {
    signUp({ email, password, fullName }, { onSettled: () => reset() });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <input
          className="border border-gray-300 bg-gray-50 rounded-md py-2 px-4 shadow-md"
          type="text"
          id="fullName"
          disabled={isPending}
          {...register("fullName", { required: "This field required!" })}
        ></input>
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <input
          className="border border-gray-300 bg-gray-50 rounded-md py-2 px-4 shadow-md"
          type="email"
          id="email"
          disabled={isPending}
          {...register("email", {
            required: "This field required!",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        ></input>
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <input
          className="border border-gray-300 bg-gray-50 rounded-md py-2 px-4 shadow-md"
          disabled={isPending}
          type="password"
          id="password"
          {...register("password", {
            required: "This field required!",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        ></input>
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <input
          className="border border-gray-300 bg-gray-50 rounded-md py-2 px-4 shadow-md"
          disabled={isPending}
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field required!",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        ></input>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" disabled={isPending}>
          Cancel
        </Button>

        <Button disabled={isPending}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
