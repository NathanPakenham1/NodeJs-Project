const Customer = require('../models/customer');
const mongoose = require('mongoose');

// Get Homepage

exports.homepage = async (req, res) => {
    const locals = {
        title: 'Nodejs',
        description: 'Free Nodejs User Management System'
    }

    res.render('index', locals);
}

// Get New Customer

exports.addCustomer = async (req, res) => {
    const locals = {
        title: 'Add New Customer',
        description: 'Free Nodejs User Management System'
    }

    res.render('customer/add', locals);
}

// Post New Customer

exports.postCustomer = async (req, res) => {

    console.log(req.body);

    const newCustomer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        details: req.body.details,
        tel: req.body.tel,
        email: req.body.email
    })

   
    
    try {
        await Customer.create(newCustomer); 

        res.redirect('/');
    } catch (error) {
        console.log(error);
    }

}