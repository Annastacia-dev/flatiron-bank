import React,{ useEffect, useState}  from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(()=>{
    fetch("http://localhost:8001/transactions")
    .then(res => res.json())
    .then(data => setTransactions(data))
  },[])

  function handleSubmission(transactionObj){
    fetch("http://localhost:8001/transactions", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(transactionObj)
      })
        .then(resp =>resp.json())
        .then(data => setTransactions((transactions) =>[...transactions,data]))
        .catch(error => alert(error)) 
  }
  return (
    <div>
      <Search 
      search={search} 
      onSearchChange={setSearch}
      />
      <AddTransactionForm onTransactionSubmit={handleSubmission} />
      <TransactionsList 
      transactions={transactions} 
      search={search}
      />
    </div>
  );
}

export default AccountContainer;
