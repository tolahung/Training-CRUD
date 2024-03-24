import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Table = () => {
    const [data, setData] = useState([]);
    const [email, setEmail] = useState([]);
    const [fname, setFname] = useState([]);
    const [lname, setLname] = useState([]);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:3000/User');
                setData(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchUser()
    }, [])

    const handleSubmit = (e)=>{
        e.preventDefault();
        const id  = data.length + 1; 
        console.log(data.length);
        console.log(id);
        axios.post('http://localhost:3000/User', {
            id: id,
            email: email,
            first_name: fname,
            last_name: lname
        }) 
        .then(res => {
           window.location.reload();
        })
        .catch(er => console.log(er))
    }
    return (
        <div>
            <div className='my-[20px]'>
                <form onSubmit={handleSubmit}>
                    <input 
                    className='border-2 border-[gray] w-[200px] mr-[10px] p-[10px]' 
                    type='text' 
                    placeholder='Enter your email..'
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <input 
                    
                    className='border-2 border-[gray] w-[200px] mr-[10px] p-[10px]' 
                    type='text' 
                    placeholder='Enter your First_name..'
                    onChange={(e)=>{setFname(e.target.value)}}
                    />

                    <input 
                    className='border-2 border-[gray] w-[200px] mr-[10px] p-[10px]' 
                    type='text' 
                    placeholder='Enter your Last_Name..'
                    onChange={(e)=>{setLname(e.target.value)}}
                    />
                    <button className='p-[10px] bg-[#b8b8ff]'>Submit</button>
                </form>
            </div>
            <div className=''>
                <table className='border-collapse border border-gray-400 w-[700px]'>
                    <thead>
                        <tr>
                            <th className='border border-gray-400 p-3'>ID</th>
                            <th className='border border-gray-400 p-3'>Email</th>
                            <th className='border border-gray-400 p-3'>First_Name</th>
                            <th className='border border-gray-400 p-3'>Last_Name</th>
                            <th className='border border-gray-400 p-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((users, index) => {
                            return (
                                <tr key={index}>
                                    <td className='border border-gray-400 p-3'>{users.id}</td>
                                    <td className='border border-gray-400 p-3'>{users.email}</td>
                                    <td className='border border-gray-400 p-3'>{users.first_name}</td>
                                    <td className='border border-gray-400 p-3'>{users.last_name}</td>
                                    <td className='border border-gray-400 p-3'>
                                        <button className='bg-[#9fd7ff] p-[10px] mr-[10px]'>Edit</button>
                                        <button className='bg-[#ff8080] p-[10px]'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;