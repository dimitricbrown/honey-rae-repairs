import React, { useEffect, useState } from "react"
import { API } from "../.."

//Edited the vanilla CustomerList function from instruction video - Step 4 Mod 

export const CustomerList = () => {
    const [customers, assignCustomers] = useState([])

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

    return (
        <>
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