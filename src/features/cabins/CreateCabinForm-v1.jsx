import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function CreateCabinForm() {
  const inputStyle = "border border-stone-300 rounded-sm py-2 px-4 shadow-sm";
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  //   console.log(errors);
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: (newCabin) => createCabin(newCabin),
    onSuccess: () => {
      toast.success("Cabin create success");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset({
        name: "",
        maxCapacity: "",
        regularPrice: "",
        discount: "",
        description: "",
        image: "",
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  function handleOnsubmit(data) {
    mutate({ ...data, image: data?.image[0] });
  }
  function onError(error) {
    // console.log(error);
  }
  return (
    <Form onSubmit={handleSubmit(handleOnsubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <input
          {...register("name", {
            required: "This filed required",
          })}
          className={inputStyle}
          type="text"
          id="name"
        ></input>
      </FormRow>
      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <input
          {...register("maxCapacity", {
            required: "This filed required",
            min: 1,
          })}
          className={inputStyle}
          type="number"
          id="maxCapacity"
        ></input>
      </FormRow>
      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <input
          {...register("regularPrice", {
            required: "This filed required",
            min: 1,
          })}
          className={inputStyle}
          type="number"
          id="regularPrice"
        ></input>
      </FormRow>
      <FormRow label="Discount" error={errors?.discount?.message}>
        <input
          {...register("discount", {
            required: "This filed required",
            validate: (value) => {
              if (value >= getValues().regularPrice)
                return "this value should less than regular price";
            },
          })}
          className={inputStyle}
          type="number"
          id="discount"
        ></input>
      </FormRow>
      <FormRow label="Cabin photo">
        <input
          {...register("image", {
            required: "This filed required",
          })}
          id="image"
          type="file"
          className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-100 file:text-violet-700
      hover:file:bg-violet-200
    "
        />
      </FormRow>
      <FormRow label="Description for website">
        <textarea
          {...register("description")}
          id="description"
          className="py-2 px-4 border rounded-sm border-stone-300 shadow-sm w-full h-32"
        ></textarea>
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disable={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
