import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import useUpdateSetting from "./useUpdateSetting";

function UpdateSettingsForm() {
  const inputStyle = "border border-stone-300 rounded-sm py-2 px-4 shadow-sm";
  const { isPending, settings } = useSettings();
  const { isUpdating, updateSeeting } = useUpdateSetting();
  if (isPending) return <Spinner></Spinner>;
  function handelUpdate(e, filed) {
    const { value } = e.target;
    if (!value) return;
    updateSeeting({ [filed]: Number(value) });
  }
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <input
          defaultValue={settings.minBookingLength}
          className={inputStyle}
          type="number"
          id="min-nights"
          disabled={isUpdating}
          onBlur={(e) => handelUpdate(e, "minBookingLength")}
        ></input>
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <input
          defaultValue={settings.maxBookingLength}
          className={inputStyle}
          type="number"
          id="max-nights"
          disabled={isUpdating}
          onBlur={(e) => handelUpdate(e, "maxBookingLength")}
        ></input>
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <input
          defaultValue={settings.maxGuestsPerBook}
          className={inputStyle}
          type="number"
          id="max-guests"
          disabled={isUpdating}
          onBlur={(e) => handelUpdate(e, "maxGuestsPerBook")}
        ></input>
      </FormRow>

      <FormRow label="Breakfast price">
        <input
          defaultValue={settings.breakfastPrice}
          className={inputStyle}
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          onBlur={(e) => handelUpdate(e, "breakfastPrice")}
        ></input>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
