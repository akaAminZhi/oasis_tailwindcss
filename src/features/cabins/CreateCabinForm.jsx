import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useCreateEditCabin } from "./useCreateEditCabin";

function CreateCabinForm({ cabinToEdit = {}, closeModal }) {
  const inputStyle = "border border-stone-300 rounded-sm py-2 px-4 shadow-sm";
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const { isCreating, createEditCabin } = useCreateEditCabin();

  function handleOnsubmit(data) {
    const image = typeof data.image === "string" ? data.image : data?.image[0];
    createEditCabin(
      { newCabin: { ...data, image: image }, id: editId },
      {
        onSuccess: () => {
          reset({
            name: "",
            maxCapacity: "",
            regularPrice: "",
            discount: "",
            description: "",
            image: "",
          });
          closeModal?.();
        },
      }
    );
  }
  function onError(error) {
    console.log(error);
  }
  return (
    <Form
      onSubmit={handleSubmit(handleOnsubmit, onError)}
      type={closeModal ? "modal" : ""}
    >
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <input
          {...register("name", {
            required: "This filed required",
          })}
          className={inputStyle}
          type="text"
          id="name"
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
        ></input>
      </FormRow>
      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <input
          {...register("image", {
            required: isEditSession ? false : "This filed required",
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

        <Button
          variation="secondary"
          type="reset"
          onClick={() => closeModal?.()}
        >
          Cancel
        </Button>
        <Button disable={isCreating}>
          {isEditSession ? "Edit cabin" : "Add cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
