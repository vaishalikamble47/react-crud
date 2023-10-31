import React, { useState,useEffect } from "react";

import axios from "axios";
import { useNavigate, useParams, } from "react-router-dom";


const AddStudent = () => {
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [education, setEducation] = useState()
    const [age, setAge] = useState()
    const [course, setCourse] = useState()

    const navigate = useNavigate()
    const param = useParams()

    const singleData = async () => {
        if (param.id) {
            const data = await axios.get("http://localhost:3004/student/" + param.id)
            console.log(data.data);
            setName(data?.data?.name)
            setAddress(data?.data.address)
            setEducation(data?.data.education)
            setAge(data?.data.age)
            setCourse(data?.data.course)
        }
    }
    const data = { name, address, education, age, course }
    const SubmitData = async (e) => {
        e.preventDfault();
        
        if (param.id) {
            await axios.put("http://localhost:3004/Student"+param.id, data)
            setTimeout(() => {
                navigate("/")
            }, 1000)
        } else {
            await axios.post("http://localhost:3004/student/", data)
            setTimeout(() => {
                navigate("/")
            }, 1000)
        }
        
    }
    useEffect(()=>{
        singleData()
    },[param.id])

    return (
        <>


            <div className="container py-3">
                <h1>Add Student</h1>
                <form onSubmit={SubmitData} class="row g-3">
                    <div class="col-md-12">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" value={name} id="name" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" value={address} id="inputAddress" onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div class="col-md-12">
                        <label for="education" class="form-label">Education</label>
                        <input type="text" class="form-control" value={education} id="education" onChange={(e) => setEducation(e.target.value)} />
                    </div>


                    <div class="col-md-6">
                        <label for="inputState" class="form-label">Age</label>
                        <select id="inputState" value={age} class="form-select" onChange={(e) => setAge(e.target.value)}>
                            <option selected>Choose...</option>
                            <option>21yr</option>
                            <option>22yr</option>
                            <option>23yr</option>
                            <option>24yr</option>
                            <option>25yr</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="inputState" class="form-label">Course</label>
                        <select id="inputState" value={course} class="form-select" onChange={(e) => setCourse(e.target.value)}>
                            <option selected>Choose...</option>
                            <option>java</option>
                            <option>mernstack</option>
                            <option>python</option>
                            <option>node</option>
                            <option>react</option>
                        </select>
                    </div>


                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">{param.id ? "Update User" : "Add User"}</button>
                    </div>
                </form >
            </div>


        </>
    )
}
export default AddStudent;