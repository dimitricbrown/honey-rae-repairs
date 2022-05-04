import React, { useEffect, useState } from "react"
import { API } from "../.."

export const EmployeeList = () => {
    const [employees, assignEmployees] = useState([])

    useEffect(
        () => {
            fetch(`${API}/employees`)
                .then(res => res.json())
                .then(
                    (employees) => {
                        assignEmployees(employees)
                    }
                )
        },
        []
    )

    return (
        <>
            {
                employees.map(
                    (employeeObject) => {
                        return <p key={`employee--${employeeObject.id}`}>{employeeObject.name}</p>
                    }
                )
            }
        </>
    )
}