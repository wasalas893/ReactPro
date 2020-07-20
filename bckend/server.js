const express=require('express');
const connectDB=require('./config/db');
const app=express();

app.use(express.json());

//Connect Database
connectDB();


app.get('/',(req,res)=>res.send('API Running'));

//define routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/posts',require('./routes/api/posts'));
  


//port
const port=process.env.PORT || 8000

app.listen(port,()=>console.log(`port is ${port}`));