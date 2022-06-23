import React from 'react'

function List({ employees }) {

    

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>

                        <th>user Name</th>
                        <th>Last Name</th>
                        <th>address</th>
                        <th>phonenumber</th>
                        <th>address</th>
                        <th>aadharno</th>
                        <th>panno</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.value.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.address}</td>
                                <td>{employee.phonenumber}</td>
                                <td>{employee.aadharno} </td>
                                <td>{employee.panno} </td>

                                
                                
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List