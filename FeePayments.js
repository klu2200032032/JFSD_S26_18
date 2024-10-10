import React, { useState } from 'react';
import './FeePayments.css'; // Import CSS for styling

const FeePayments = () => {
  const [payments, setPayments] = useState([
    { id: 'S101', name: 'John Doe', totalFeePaid: 1500, due: 500 },
    { id: 'S102', name: 'Jane Smith', totalFeePaid: 2000, due: 0 },
    { id: 'S103', name: 'Alice Johnson', totalFeePaid: 1000, due: 1000 },
  ]);

  return (
    <div className="fee-payments-container">
      <h2>Fee Payments</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Total Fee Paid</th>
            <th>Due Amount</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.name}</td>
              <td>${payment.totalFeePaid}</td>
              <td>${payment.due}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeePayments;
