import React, { useEffect, useState } from "react"
import { API } from "../.."

//Edited the vanilla CustomerList function from instruction video - Step 4 Mod 

export const CustomerList = () => {
    const [customers, assignCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            fetch(`${API}/customers`)
                .then(res => res.json())
                .then(
                    (customers) => {
                        assignCustomers(customers)
                     }
                )
        },
        []
    )

    useEffect(
        () => {
            if (customers.length === 1) {
                updateMessage("You have 1 customer")
            }
            else {
                updateMessage(`You have ${customers.length} customers`)
            }
        }, 
        [customers]
    )

    return (
        <>
            <div>{totalCustomerMessage}</div>
            {
                customers.map(
                    (customerObject) => { 
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                    }
                )
            }
        </>
    )
}