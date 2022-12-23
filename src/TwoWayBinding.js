//Two way bidind: ràng buộc 2 chiều
//One way bidind: ràng buộc 1 chiều
//Reactjs là one way binding
//One way binding là khi thay đổi dữ liệu thì dữ liệu trong
//state sẽ thay đổi theo
//Two way binding là khi thay đổi dữ liệu thì dữ liệu trong
//giao diện sẽ thay đổi theo
import React, { useState } from "react";

function TwoWayBinding() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    console.log({
      name,
      email,
    });
  };

  return (
    <div>
      <input
        value={name} // set value để thành 2 way binding
        style={{ padding: 10 }}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email} // set value để thành 2 way binding
        style={{ padding: 10 }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Change</button>
    </div>
  );
}

export default TwoWayBinding;
