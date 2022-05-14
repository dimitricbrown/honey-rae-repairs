import React, { useEffect, useState } from "react"
import { API } from "../.."

export const EmployeeList = () => {
    const [employees, assignEmployees] = useState([])
    const [specialties, updateSpec] = useState("")

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

    useEffect(
        () => {
            const employSpec = employees.map(employee => employee.specialty)
            updateSpec(employSpec.join(", "))
        },
        [employees]
    )

    return (
        <>
            <div>
                Specialities: {specialties}
            </div>
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