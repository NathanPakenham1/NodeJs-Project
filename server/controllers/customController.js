
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

    const locals = {
        title: 'New Customer Added',
        description: 'Free Nodejs User Management System'
    }

    res.render('customer/add', locals);
}