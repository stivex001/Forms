const Input = [
  {
    id: 1,
    name: "userName",
    type: "text",
    placeholder: "UserName",
    errormessage: "Username should be 3-16 characters long",
    required: true,
    pattern: "^[a-zA-Z0-9]{3,16}$"
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errormessage: "Should be a valid email address",
    required: true,
  },
  {
    id: 3,
    name: "birthday",
    type: "date",
    placeholder: "DOB",
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    errormessage:
      "Password should be 8-20 characters and contains at least 1 letter, 1 number and 1 special characters!! ",
      required: true,
      pattern: `^(?=.*[a-zA-Z])(?=.*)(?=.*[!@#$%^&*()_+])[A-Za-z][A-Za-z!@#$%^&*()_+]{8,20}$`
  },
  {
    id: 5,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errormessage: "Password don't match",
    required: true,
    
  },
];

export default Input;
