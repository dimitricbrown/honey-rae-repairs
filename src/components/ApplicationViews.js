import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"

export const ApplicationViews = () => {
    return (
        <>
             <Route path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/customers">
                <CustomerList />
            </Route>
            
            <Route path="/tickets">
                <TicketList />
            </Route>
        </>
    )
}