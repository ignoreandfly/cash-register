import { useState } from "react";
import "./styles.css";

export default function App() {
  function GIF(n) {
    return Math.floor(n);
  }

  // const database = {};
  var [billAmount, setbillAmount] = useState("0");
  var [cashAmount, setcashAmount] = useState("0");
  var [returnAmount, setreturnAmount] = useState("0");
  var [returnotes2000, setreturnnotes2000] = useState("0");
  var [returnotes500, setreturnnotes500] = useState("0");
  var [returnotes100, setreturnnotes100] = useState("0");
  var [returnotes50, setreturnnotes50] = useState("0");
  var [returnotes20, setreturnnotes20] = useState("0");
  var [returnotes10, setreturnnotes10] = useState("0");
  var [returnotes5, setreturnnotes5] = useState("0");
  var [returnotes1, setreturnnotes1] = useState("0");

  var returnAmountfinal = cashAmount - billAmount;
  function returnHandler() {
    if (returnAmountfinal < "0") {
      setreturnAmount("Do you want to wash the dishes?");
    } else {
      var notes2000 = GIF(returnAmountfinal / "2000");
      var tobepassed1 = returnAmountfinal - notes2000 * "2000";
      setreturnnotes2000(notes2000);
      var notes500 = GIF(tobepassed1 / "500");
      var tobepassed2 = tobepassed1 - notes500 * "500";
      setreturnnotes500(notes500);
      var notes100 = GIF(tobepassed2 / "100");
      var tobepassed3 = tobepassed2 - notes100 * "100";
      setreturnnotes100(notes100);
      var notes50 = GIF(tobepassed3 / "50");
      var tobepassed4 = tobepassed3 - notes50 * "50";
      setreturnnotes50(notes50);
      var notes20 = GIF(tobepassed4 / "20");
      var tobepassed5 = tobepassed4 - notes20 * "20";
      setreturnnotes20(notes20);
      var notes10 = GIF(tobepassed5 / "10");
      var tobepassed6 = tobepassed5 - notes10 * "10";
      setreturnnotes10(notes10);
      var notes5 = GIF(tobepassed6 / "5");
      var tobepassed7 = tobepassed6 - notes5 * "5";
      setreturnnotes5(notes5);
      var notes1 = GIF(tobepassed7 / "500");
      setreturnnotes1(notes1);
    }
  }
  function billAmountHandler() {
    var billAmount = event.target.value;
    setbillAmount(billAmount);
  }
  function cashGivenHandler() {
    var cashGiven = event.target.value;
    setcashAmount(cashGiven);
  }

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Cash Register Manager</h1>
      <h3>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.{" "}
      </h3>
      <p> Bill Amount </p>
      <input onChange={billAmountHandler} />
      <hr />
      <p> Cash Given </p>
      <input onChange={cashGivenHandler} />
      <hr />
      <button onClick={returnHandler}> Calculate </button>
      <h2> Return Change </h2>
      <h3> {returnAmount} </h3>
      <h3> Number of 2000 rs notes: {returnotes2000} </h3>
      <h3> Number of 500rs notes: {returnotes500} </h3>
      <h3> Number of 100rs notes: {returnotes100} </h3>
      <h3> Number of 50rs notes: {returnotes50} </h3>
      <h3> Number of 20rs notes: {returnotes20} </h3>
      <h3> Number of 10rs notes: {returnotes10} </h3>
      <h3> Number of 5rs notes: {returnotes5} </h3>
      <h3> Number of 1rs notes: {returnotes1} </h3>

      <table style={{ border: "1px solid black" }}></table>
    </div>
  );
}
