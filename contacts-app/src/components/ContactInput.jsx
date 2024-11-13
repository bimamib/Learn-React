import React from "react";

class ContactInput extends React.Component {
  render() {
    return (
      <from className="contact-input">
        <input type="text" placeholder="Nama" />
        <input type="text" placeholder="Tag" />
        <button type="submit">Tambah</button>
      </from>
    );
  }
}

export default ContactInput;
