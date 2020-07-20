const express=require('express');

const app=express();

app.use(express.json());


app.use(function(req,res,next){
  console.log('Logging......');
  next();
});

app.use(function(req,res,next){
    console.log('Authentication......');
    next();
  });
  

const courses=[
    {id: 1, name:'courses 1'},
    {id: 2,name:'courses 2'},
    {id: 3,name:'courses 3'},
];

app.get('/',(req,res)=>{
    res.send('hello world')
});
app.get('/api/courses',(req,res)=>{
    res.send(courses)
});

//uda courses data tika gannna widiya 
app.get('/api/courses/:id',(req,res)=>{
      //url ake search karana id akaii uda courses wala id akeiii === kirima karaiii params waling url ake pass wana data tika ganiiii
const course=courses.find(c=>c.id===parseInt(req.params.id));

//id deka samana netiii nisa return karnnna oniii htttp response widiyata 404(object not found)
if(!course) res.status(404).send('give the id dont the mach')//404 haraha message ake display karagannna puluwen
res.send(course);

})
//port
const port=process.env.PORT || 3000

app.listen(port,()=>console.log(`port is ${port}`));