import useFields from "../hooks/use-fields";
import Input from "../UI/Input";

const BasicForm = () => {
  const firstName = useFields((value) => value.trim().length > 0);
  const lastName = useFields((value) => value.trim().length > 0);
  const email = useFields((value) => value.trim().includes("@"));

  const isFormValid =
    firstName.isValid && lastName.isValid && email.isValid ? true : false;
  const submitForm = (event) => {
    event.preventDefault();

    console.log(`${firstName.value} ${lastName.value} ${email.value}`);

    firstName.reset();
    lastName.reset();
    email.reset();
  };

  const assignErrorClass = (blur, isValid) => {
    return blur && !isValid ? "form-control invalid" : "form-control";
  };
  const errorClasses = {
    firstNameError: assignErrorClass(firstName.valueBlur, firstName.isValid),
    lastNameError: assignErrorClass(lastName.valueBlur, lastName.isValid),
    emailError: assignErrorClass(email.valueBlur, email.isValid),
  };

  return (
    <form onSubmit={submitForm}>
      <div className="control-group">
        <Input
          className={errorClasses.firstNameError}
          label="First Name"
          type="text"
          id="firstName"
          instance={firstName}
          error="First Name is required!"
        />
        <Input
          className={errorClasses.lastNameError}
          label="Last Name"
          type="text"
          id="lastName"
          instance={lastName}
          error="Last Name is required!"
        />
      </div>
      <Input
        className={errorClasses.emailError}
        label="E-Mail Address"
        type="email"
        id="email"
        instance={email}
        error="E-mail must containt symbol '@'!"
      />
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
