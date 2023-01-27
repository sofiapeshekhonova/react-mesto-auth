import {useState} from "react";

function ValidationForm() {
  const [errors, setErrors] = useState({});
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    
    setFormValue({
      ...formValue,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: e.target.validationMessage,
    });
  };
  
  return {handleChange, errors, formValue }
}

export default ValidationForm;
