import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions, search}) {

  const filteredTransactions = transactions
  .filter((transaction) => transaction.description.toLowerCase().includes(search.toLowerCase()))
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {filteredTransactions.map(transaction => {
          return (<Transaction
            key={transaction.id}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}

          />)
        })}
        {/* render a list of <Transaction> components here */}
      </tbody>
    </table>
  );
}

export default TransactionsList;
