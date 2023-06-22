import React, {Component} from "react";

export class Student extends Component {
    constructor() {
        super();
        this.state = {
            studentList: [{id: 1, studentName: "Nguyễn Văn A", age: 30, address: "Hà Nội"}]
        }
    }

    render() {
        return (
            <>
                <h1>StudentList</h1>

                <table border={1}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.studentList.map((students, index) => (
                        <tr key={index}>
                            <td>{students.id}</td>
                            <td>{students.studentName}</td>
                            <td>{students.age}</td>
                            <td>{students.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </>
        )
    }


}