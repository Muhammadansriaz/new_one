import React from 'react'
import { useState } from 'react'
const Trasaction = () => {
    let [total ,set_total] = useState(0)
    let [income,set_income] = useState()
     income = parseInt(income, 10);

    return (
        <div>
         <h1>Total Amount {total}$ </h1>
         Amount
         <input  value={income} onChange={(p) => {set_income(p.target.value)}} type="number"
          placeholder="Amount"/>
         <button onClick = {()=>{set_total(income + total)}} >Deposite</button>
         <button onClick = {()=>{set_total(total - income)}} >Withdraw</button>

        </div>
    )
}

export default Trasaction
