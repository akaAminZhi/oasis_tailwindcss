import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
// import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

import Row from "../ui/Row";
function Account() {
  return (
    <>
      <Row>
        <UpdateUserDataForm></UpdateUserDataForm>
      </Row>
      <Row>{/* <UpdatePasswordForm></UpdatePasswordForm> */}</Row>
    </>
  );
}

export default Account;
