import React, { useEffect, useState } from "react"

//Edited the vanilla Repairs function from instruction video - Step 3 Mod 
const API = "http://localhost:8088"

export const Repairs = () => {
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
            <h1>Honey Rae's Repair Shop</h1>

            {
                customers.map(
                    (customerObject) => { 
                        return <h2>{customerObject.name}</h2>
                    }
                )
            }
        </>
    )
}