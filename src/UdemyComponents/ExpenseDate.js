import React from "react";
import "./ExpenseDate.css";
import Alert from "react-bootstrap/Alert";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { year: "2-digit" });
  return (
    <div>
      <Alert key="primary" variant="primary" className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </Alert>
    </div>
  );
}

export default ExpenseDate;
