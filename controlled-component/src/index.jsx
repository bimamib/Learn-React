import React from "react";
import { createRoot } from "react-dom/client";

class MyForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form>
          <label htmlFor="name">
            Name :
            <input type="text" id="name" />
            <br />
            <label htmlFor="email">Email :</label>
            <input type="text" id="email" />
            <br />
            <label htmlFor="gender">Gender :</label>
            <select id="gender">
              <option value="Man">Man</option>
              <option value="Woman">Woman</option>
            </select>
            <br />
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<MyForm />);
