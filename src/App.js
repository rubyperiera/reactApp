import React from "react";
import "./index.css";
import DisplayContacts from "./containers/Contacts";

export default function App() {
  return (
    <div className="row">
      <div>
            <DisplayContacts />
      </div>
    </div>
  );
}
