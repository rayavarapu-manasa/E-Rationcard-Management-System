import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Adminpage.css';


function Managepage() {
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        contactNo: '',
        city: '',
        address: '',
        email: '',
        gender: ''
    });
    const [customers, setCustomers] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCustomers([...customers, formData]);
        setFormData({
            name: '',
            dateOfBirth: '',
            contactNo: '',
            city: '',
            address: '',
            email: '',
            gender: ''
        });
        setShowForm(false); // Hide the form after submitting
    };

    const handleClose = () => {
        setShowForm(false); // Close the form
    };

    return (
        <>
            <div className='nav'>
                <nav>
                    <ul className='leftside'>
                        <li>Manage Customer</li>
                        <li>Manage Shopkeeper</li>
                    </ul>
                    <ul className='rightside'>
                    <li><Link to="/adminlogin">Logout</Link></li> 
                </ul>
                </nav>
            </div>
            <h1 className='ration'>E-Ration Card Management System</h1>
            <div className='main-content'>
                <h1>Manage Shopkeeper</h1>
                <div className='searchbar'>
                    <input type='text' placeholder='Search...' />
                </div>
                <div className='add-button'>
                    <button onClick={() => setShowForm(true)}>Add</button>
                </div>
                {showForm && (
                    <div className="form-container">
                        <form onSubmit={handleSubmit} className="add-form">
                            <h3>Add Shopkeeper</h3>
                            <label htmlFor="name">Handler Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Enter Name' />
                            
                            <label htmlFor="name">Store Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Enter Name' />
                            
                            <label htmlFor="contactNo">Contact No:</label>
                            <input type="contact" name="contactNo" value={formData.contactNo} onChange={handleChange} placeholder='Enter Phonenumber' />

                            <label htmlFor="city">City:</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder='Enter city'/>

                            <label htmlFor="address">Address:</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange}  placeholder='Enter Address'/>

                            <button type="close" onClick={handleClose}>Close</button>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )}
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th> Handler Name</th>
                            <th>Store Name</th>
                            <th>Contact Number</th>
                            <th>City</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{customer.name}</td>
                                <td>{customer.name}</td>
                                <td>{customer.contactNo}</td>
                                <td>{customer.city}</td>
                                <td>{customer.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Managepage;

