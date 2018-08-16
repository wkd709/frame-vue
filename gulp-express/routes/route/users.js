module.exports = function(router){
	router.get('/users.html', function(req, res) {
        res.render('users',{
            title: 'users',
            content: 1
        })
    });
}