import React, {useState} from "react";

function AddTransactionForm({onTransactionSubmit}) {

    const [date,setDate] = useState('')
    const [description,setDescription] = useState('')
    const [category,setCategory] = useState('')
    const [amount,setAmount] = useState(0)

  function handleSubmit (e){
    e.preventDefault()
    const newTransaction = {
      date: date,
      description: description,
      category: category,
      amount:amount
    }
  
    onTransactionSubmit(newTransaction)
    setDate('')
    setDescription('')
    setCategory('')
    setAmount(0)

  }
  return (
    <div className="ui segment">
      <form 
      className="ui form"
      onSubmit={handleSubmit}
      >
        <div className="inline fields">
          <input 
            type="date" 
              name="date" 
              value={date}
              onChange={e => setDate(e.target.value)} />
          <input 
            type="text" 
            name="description" 
            value={description} 
            placeholder="Description"
            onChange={e => setDescription(e.target.value)} />
          <input 
            type="text" 
            name="category" 
            value={category} 
            placeholder="Category"
            onChange={e => setCategory(e.target.value)} />
          <input 
            type="number" 
            name="amount" 
            value={amount} 
            placeholder="Amount"
            onChange={e => setAmount(e.target.value)} 
            step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
