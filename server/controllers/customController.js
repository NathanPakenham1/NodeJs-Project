
// Get Homepage

exports.homepage = async (req, res) => {
    const locals = {
        title: 'Nodejs',
        description: 'Free Nodejs User Management System'
    }

    res.render('index', locals);
}