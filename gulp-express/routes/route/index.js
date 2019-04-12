const mongoose = require('mongoose');

mongoose.connect('mongodb://wkd:kong123456@ds139534.mlab.com:39534/my');

const Schema = mongoose.Schema;

var todoSchema = new mongoose.Schema({
    item: String
});
var Todo = mongoose.model('Todo',todoSchema);

var itemOne = Todo({item:'buy flowers'}).save(function (err) {
    if(err) throw err;
    console.log('item saved');
});


module.exports = function(router){
	router.get('/index.html', function(req, res) {
        res.render('index',{
            title: '首页111'
        })
    });
    router.get('/', function(req, res) {
        Todo.find({},function (err,data) {
            if(err) throw err;
            res.render('index',{
                title: '首页111'
            })
        })
    });
}