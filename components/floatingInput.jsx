import { useState } from "react";
function FloatingInput(props) {
  const [value, setValue] = useState(props.value);
  return (
    <div className="form-floating mb-3">
      <input
        placeholder={props.title}
        id={props.id}
        type={props.type}
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={props.length}
      />
      <label htmlFor={props.id}>{props.title}</label>
    </div>
  );
}

export default FloatingInput;
