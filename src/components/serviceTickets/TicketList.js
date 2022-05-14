import React, { useEffect, useState } from "react"
import { API } from "../.."

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])

    useEffect(
        () => {
            fetch (`${API}/serviceTickets?_expand=employee&_expand=customer`)
            .then(res => res.json())
            .then(
                (tickets) => {
                    updateTickets(tickets)
                }
            )
        },
        []
    )

    return (
        <>
            {
                tickets.map(
                    (ticket) => {
                        return <p key={`ticket--${ticket.id}`}>
                            {ticket.description} submitted by {ticket.customer.name} and worked by {ticket.employee.name}
                        </p>
                    }
                )
            }
        </>
    )
}