module.exports = function(router){
	router.get('/index.html', function(req, res) {
        res.render('index',{
            title: '首页111'
        })
    });
    router.get('/', function(req, res) {
        res.render('index',{
            title: '首页10'
        })
    });
}