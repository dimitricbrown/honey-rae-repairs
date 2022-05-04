import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"

//Edited the vanilla Repairs function from instruction video - Step 3 Mod 

export const Repairs = () => {

    return (
        <>
            <h1>Honey Rae's Repair Shop</h1>

            <h2>Customer List</h2>
            <CustomerList />

            <h2>Employee List</h2>
            <EmployeeList />
        </>
    )
}