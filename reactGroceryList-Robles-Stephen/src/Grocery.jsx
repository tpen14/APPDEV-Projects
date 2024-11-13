import React, { useState } from 'react';

export default function Shop(props) {
    const shopItems = props.items;
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [pay, setPay] = useState(0);  
    const [showReceipt, setShowReceipt] = useState(false);  

    function AddItem(item) {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, item];
            calculateTotal(updatedCart); 
            return updatedCart;
        });
    }

 
    function calculateTotal(cart) {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price;  
        }
        setTotal(total);  
    }

    function handlePayment() {
        if (pay >= total) {
            setShowReceipt(true);  
        } else {
            alert("Insufficient payment. Please pay the full amount.");
        }
    }

    const renderItems = () => {
        return shopItems.map((item) => (
            <div key={item.id} class="card">
                <p>{item.name}</p>
                <p>Price/kilo: Php {item.price}</p>
                <button onClick={() => AddItem(item)}>Add to Cart</button>
            </div>
        ));
    };

    const renderCart = () => {
        return cart.map((item) => (
            <div key={item.id}>
                <p>{item.name}</p>
                <p>Price/kilo: Php {item.price}</p>
            </div>
        ));
    };

    const change = () => {
        return pay - total;
    };

    const renderReceipt = () => {
        return (
            <div class="recCon">
                <h4>Receipt:</h4>
                <ul class="ulRec">
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - Php {item.price}
                        </li>
                    ))}
                </ul>
                <p>Total: Php {total}</p>
                <p>Amount Paid: Php {pay}</p>
                <p>Change: Php {change() >= 0 ? change() : 0}</p>
            </div>
        );
    };

    return (
        <>
            <h1>Grocery</h1>
            <div class = "container">
            <ul class="cart">{renderItems()}</ul>
            </div>
            <h4>Cart:</h4>
            {cart.length > 0 ? (
                <ul>{renderCart()}</ul>
            ) : (
                <ul>
                    <p>There are no items in the cart!</p>
                </ul>
            )}

            <h4>Total:</h4>
            {total > 0 ? (
                <p>Php{total}</p>
            ) : (
                <p>Php 0</p>
            )}

            <div>
                <input
                    type="number"
                    placeholder="Enter amount paid"
                    value={pay}
                    onChange={(e) => setPay(parseFloat(e.target.value))}
                />
                <button onClick={handlePayment}>Pay</button>
            </div>

            {showReceipt && renderReceipt()}
        </>
    );
}