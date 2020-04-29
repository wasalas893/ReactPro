const express=require('express');
const app=express();

const morgan=require('morgan');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const checkAuth=require('./middleware/check-auth');


//mongodb connect
mongoose.connect('mongodb://localhost/videoServer',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.Promise=global.Promise;
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api/videos',express.static('media/uploads'));

//routers
app.use('/api/signUp',require('./router/signUp'));
app.use('/api/signIn',require('./router/signIn'));
app.use('/api/upload',checkAuth,require('./router/upload'));



module.exports=app;