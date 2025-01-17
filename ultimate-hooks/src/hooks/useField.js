import { useState } from "react";

const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onReset = () => {
    setValue(""); // Clear the input field
  };

  return {
    type,
    value,
    onChange,
    onReset,
  };
};
export default useField;
