import React from "react";
import { useState } from "react";
export default function PracticeQ() {
  const [paymentMethod, setPaymentMethod] = useState({
    id: "UPI",
    info: "instant transfer via UPI apps",
  });
  let payments = [
    { id: "UPI", info: "instant transfer via UPI apps " },
    { id: "Card", info: "Pay using debit or credit card" },
    { id: "COD", info: "Pay when the order arrived" },
  ];

  // function onchange(e) {
  //   const id = e.target.value;
  //   const info = e.target.dataset.info;
  //   setPaymentMethod((prev) => ({ ...prev, id, info }));
  // }

  // best method

  function onchange(payment) {
    setPaymentMethod(payment);
  }
  // 3rd way: you can also use find arrow method which will return object

  return (
    <>
      {payments.map((payment) => {
        return (
          <label key={payment.id} htmlFor={payment.id}>
            <input
              type="radio"
              name="payment"
              value={payment.id}
              checked={paymentMethod.id === payment.id}
              // data-info={payment.info}
              id={payment.id}
              onChange={() => onchange(payment)}
            />
            {payment.id}
          </label>
        );
      })}
      <p>Mode of payment: {paymentMethod.id}</p>
      <p>Details : {paymentMethod.info}</p>
    </>
  );
}
