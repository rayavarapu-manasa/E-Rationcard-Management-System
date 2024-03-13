import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shopage.css';


function Shopage() {
    const [formData, setFormData] = useState({
        name: '',
        cost: '',
        quantity: '',
        action: ''
    });
    const [customers, setCustomers] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [bill, setBill] = useState([]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCustomers([...customers, formData]);
        setFormData({
            name: '',
            cost: '',
            quantity: '',
            action: ''
        });
        setShowForm(false); // Hide the form after submitting
    };

    const handleClose = () => {
        setShowForm(false); // Close the form
    };

    const handleEdit = (index) => {
        const productToEdit = customers[index];
        setFormData({
            name: productToEdit.name,
            cost: productToEdit.cost,
            quantity: productToEdit.quantity,
            action: productToEdit.action
        });
        setShowForm(true);
    };

    const handleDelete = (index) => {
        const updatedCustomers = [...customers];
        updatedCustomers.splice(index, 1);
        setCustomers(updatedCustomers);
    };

    const generateBill = () => {
        const newBill = customers.map((customer, index) => {
            return {
                id: index + 1,
                name: customer.name,
                quantity: customer.quantity,
                costPerUnit: customer.cost,
                totalCost: parseFloat(customer.quantity) * parseFloat(customer.cost)
            };
        });
        setBill(newBill);

        
    };

    return (
        <>
            <div className='shopnav'>
                <nav>
                    <ul className='shopleft'>
                        <li>Manage Products</li>
                    </ul>
                    <ul className='shopleft'>
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </nav>
            </div>

            <div className='main-content'>
                <h1>Manage Products</h1>
                <div className='searchbar'>
                    <input type='text' placeholder='Search...' />
                </div>
                <div className='add-button'>
                    <button onClick={() => setShowForm(true)}>Add Products</button>
                </div>

                {showForm && (
                    <div className="form-container">
                        <form onSubmit={handleSubmit} className="shop-form">
                            <h3>Add Shopkeeper</h3>
                            <label htmlFor="name">Product Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Enter Name' />

                            <label htmlFor="quantity">Quantity:</label>
                            <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} />

                            <label htmlFor="cost">Cost:</label>
                            <input type="text" name="cost" value={formData.cost} onChange={handleChange} placeholder='Enter cost' />

                            <button type="close" onClick={handleClose}>Close</button>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )}
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th> quantity</th>
                            <th>Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{customer.name}</td>
                                <td>{customer.quantity}</td>
                                <td>{customer.cost}</td>
                                <td>
                                    <button className='editbtn' onClick={() => handleEdit(index)}>Edit</button>
                                    <button className='delbtn' onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className='bill-button'>


                    <button onClick={generateBill}>Generate Bill</button>
                </div>
                {bill.length > 0 && (
                    <div className='bill'>
                        <h2>Bill</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Cost Per Unit</th>
                                    <th>Total Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bill.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.costPerUnit}</td>
                                        <td>{item.totalCost}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                )}

            </div>
        </>
    )
}

export default Shopage;


