import React from 'react'

export default function Student() {
 const students=[
    {
        id:"SV001",
        name:"Nguyễn Văn A",
        age:20,
        gender:"Nam"
    },
    {
        id:"SV002",
        name:"Nguyễn Văn B",
        age:22,
        gender:"Nam"

    },
    {
        id:"SV003",
        name:"Nguyễn Văn C",
        age:23,
        gender:"Nam"

    },
    {
        id:"SV004",
        name:"Nguyễn Văn D",
        age:23,
        gender:"Nam"
    }
 ]
  return (
        <>
            {students.map(item=>
                  <tr key={item.id}>
                            <td>1</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                            <td>
                            <div className="template-demo">
                                <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                                >
                                Xem
                                </button>
                                <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                                >
                                Sửa
                                </button>
                                <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                                >
                                Xóa
                                </button>
                            </div>
                            </td>
                         </tr>

            )}
        </>
  )
}
