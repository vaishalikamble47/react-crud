import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
    const [users, setUsers] = useState([])

    const getData = async () => {
        setTimeout(async () => {
            const result = await axios.get("http://localhost:3004/student")
            setUsers(result?.data)
        }, 2000);
    }

    const Delete = async (id) => {
        const result = await axios.delete("http://localhost:3004/student/"+id)
        getData()
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>

            <div className="container py-3">

                <h1 className="text-center">home</h1>



                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>education</th>
                            <th>Course</th>
                            <th>Age</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.address}</td>
                                    <td>{user.education}</td>
                                    <td>{user.course}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to="'/addstudent/'+user.id">edit</Link>
                                    </td>
                                    <td>
                                        <button onClick={() => { Delete(user.id) }}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>


                </table>

            </div>
        </>
    )
}
export default Home;