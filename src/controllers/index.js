const showHomePage = (req, res) => {
    res.render('index', {
        title: 'Home',
        year: new Date().getFullYear()
    });
};

export { showHomePage };