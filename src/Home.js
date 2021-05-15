import React, { useState } from "react";
import "./App.css";
import Table from "./Table";
function Home() {
  let [value, set_value] = useState();
  let [mail, set_mail] = useState("");
  let [amount, set_amount] = useState();
  let [img, set_img] = useState();
  let [arr, set_arr] = useState([]);
  let [emailDomains, setEmaiLDomains] = useState([]);
  let [targetEmail, setTargetEmail] = useState("");
  function PrintValue(e) {
    e.preventDefault();
    var re = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    var result = re.test(mail);
    if (result === true) {
      URL.createObjectURL(img);
      var reader = new FileReader();
      reader.addEventListener("load", () => {
        var url = reader.result;
        var obj = {};
        obj.name = value;
        obj.email = mail;
        obj.amount = amount;
        obj.img = url;
        set_arr([...arr, obj]);
        set_value("");
        set_mail("");
        set_amount("");
        let currentDomain = mail.match(/(\w+)\.com/)[0]; //@gmail.com
        if (!emailDomains.includes(currentDomain)) {
          setEmaiLDomains([...emailDomains, currentDomain]);
        }
      });
    } else {
      alert("Enter a valid email");
    }
    reader.readAsDataURL(img);
  }
  function handlechange(e) {
    var id = e.target.value;
    setTargetEmail(id);
  }

  function dell_item(ind) {
    arr.splice(ind, 1);
    set_arr([...arr]);
  }
  function edit_item(ind) {
    var new_name = prompt("Enter the New Name");
    arr[ind].name = new_name;
    var new_Email = prompt("Enter the New Email");
    arr[ind].email = new_Email;
    var new_Amount = prompt("Enter the New Amount");
    arr[ind].amount = new_Amount;
    set_arr([...arr]);
  }
  return (

    <div id="main">
      <form onSubmit={PrintValue}>
        NAME
        <input
          value={value}
          onChange={(ev) => {
            set_value(ev.target.value);
          }}
          type="text"
          id="name"
          placeholder="Name"
        />
        <br />
        EMAIL
        <input
          value={mail}
          onChange={(ev) => {
            set_mail(ev.target.value);
          }}
          type="email"
          placeholder="Email"
          id="Email"
        />
        <br />
        Amount
        <input
          value={amount}
          onChange={(ev) => {
            set_amount(ev.target.value);
          }}
          type="number"
          placeholder="Amount"
          id="amount"
        />
        <br />
        PICTURE
        <input
          ref={img}
          onChange={(ev) => {
            set_img(ev.target.files[0]);
          }}
          type="file"
          placeholder="Pic here"
        ></input>
        <button type="submit">ADD</button>
      </form>

      <select onChange={handlechange}>
        <option value={"Emails"}>Emails</option>
        {emailDomains.map((obj, i) => (
          <option
            onClick={(e) => {
              handlechange(e);
            }}
            key={i}
            value={obj}
          >
            {obj}
          </option>
        ))}
      </select>

      <Table  dell_item = {dell_item} edit_item = {edit_item}
        users={arr.filter((user) => {
          if (user.email.includes(targetEmail)) {
            return true;
          }
        })}
      />
    </div>
  );
}

export default Home;

