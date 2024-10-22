import Button from "./Button";

function ComfirmDelete({ resourceName, onConfirm, disabled, closeModal }) {
  return (
    <div className="w-[25rem] flex flex-col gap-2">
      <div className="text-2xl">Delete {resourceName}</div>
      <p className="text-gray-500 mb-2">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>
      <div className="flex justify-end gap-2">
        <Button variation="secondary" disabled={disabled} onClick={closeModal}>
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ComfirmDelete;
