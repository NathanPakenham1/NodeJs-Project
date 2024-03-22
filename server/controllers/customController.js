const Customer = require('../models/customer');
const mongoose = require('mongoose');

// Get Homepage



exports.homepage = async (req, res) => {
    try {
        const message = req.flash('info'); // Retrieve flash m

        const locals = {
            title: 'Nodejs',
            description: 'Free Nodejs User Management System'
        };

        const customers = await Customer.find({}).limit(22);
        res.render('index', { locals, messages: message, customers }); // Pass messages to the view
    } catch (error) {
        console.error(error);
        req.flash('error', 'An error occurred while loading the homepage.'); // Flash error message
        res.redirect('/'); // Redirect to homepage or handle error appropriately
    }
};

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


    const newCustomer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        details: req.body.details,
        tel: req.body.tel,
        email: req.body.email
    })

   
    
    try {
        await Customer.create(newCustomer); 
        await req.flash('info', 'New Customer Has Been Added')

        res.redirect('/');
    } catch (error) {
        console.log(error);
    }

}