import React, {useState} from 'react';

function MyComponent()
{
    const [name,setName]=useState("Guest");
    const [quantity,setQuantity]=useState(1);
    const [comment,setComment]=useState("");
    const [payment,setPayment]=useState("");
    const [shipping,setShipping]=useState("");


    function changeName(e){
        setName(e.target.value);
    }
    
    function changeQuantity(e){
        setQuantity(e.target.value);
    }
    
    function changeComment(e){
        setComment(e.target.value);
    }

    function changePayment(e){
        setPayment(e.target.value);
    }

    function changeShipping(e){
        setShipping(e.target.value);
    }

    return(
        <div>
            <input value={name} onChange={changeName}></input>
            <p>Name: {name}</p>
            <input value={quantity} onChange={changeQuantity} type="number"></input>
            <p>Quantity: {quantity}</p>
            <textarea value={comment} onChange={changeComment} placeholder='Enter Delivery instruction'></textarea>
            <p>Comment: {comment}</p>
            <select value={payment} onChange={changePayment}>
                <option value="">
                    Select Payment Method
                </option>
                <option value="cod">
                    Cash on Delivery
                </option>
                <option value="online">
                    Online Payment
                </option>
                <option value="card">
                    Credit/Debit Card
                </option>
                <option value="paypal">
                    PayPal
                </option>
                <option value="applepay">
                    Apple Pay
                </option>
            </select>
            <p>Payment Method: {payment}</p>
            <label>
                <input type="radio" value="Pick Up" checked={shipping==="Pick Up"} 
                        onChange={changeShipping}></input>
                        Pick Up
            </label>
            <br></br>
            <label>
                <input type="radio" value="Delivery" checked={shipping==="Delivery"} 
                        onChange={changeShipping}></input>
                        Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
 
}
export default MyComponent;