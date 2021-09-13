const { response } = require('express');
const express =  require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app=express();
app.use(express.json());
app.use(cors());
const {MongoClient, ObjectId}=require("mongodb");
const e = require('express');
 const client=new MongoClient("mongodb://localhost:27017", {
     useNewUrlParser: true,
      useUnifiedTopology: true});

      let db, collection;

client.connect().then(()=>{
    console.log('connected to mongoDB');
    db=client.db('Firstdb');
    collection=db.collection('user');
}).catch(()=>{
    console.log('There is some error in connection');
});
app.post('/authenticate', (req, res)=>{
const {email, password}=req.body;
let error={};
if(!email){
error.email='Invalid Email';
}if(!password){
  error.password='Invalid Password';
}
if(Object.keys(error).length>0){
  res.writeHead(401);
  res.end(JSON.stringify(error))
}
findByEmail(email).then((user)=>{
  if(!user){
    res.writeHead(401);
  res.end('Invalid authentication');
  }else{
    const { _id: userId }= user;
    res.end('generating token');
  }
});
});
async function findByEmail(username){
 return collection.findOne({email:username});
}

app.get('/users',async (req,res)=>{
    console.log('hello');
   
    const cursor = await collection.find();

  const users = await cursor.toArray();

  res.json(users);

});

app.get('/users/:userId',async (req,res)=>{
   const {userId}=req.params;
   
    collection.findOne({_id: ObjectId(userId)}).then((users)=>{
      // const users = await cursor.toArray();

      res.json(users);
    });

});


app.post('/users',async (req,res)=>{
const {firstName,lastName, email, password}=req.body;
findByEmail(email).then((response)=>{
  const salt=10;
  if (response!=null) {
    res.writeHead(409);
    res.end(JSON.stringify({error:"This Email already exist" }));
  }else{
    bcrypt.hash(password,salt).then((hashedPassword)=>{
      collection.insertOne({firstName,lastName, email, hashedPassword}).then((response)=>{
        const _id =response.insertedId;
        collection.findOne({ _id }).then((result)=>{
          res.json(result);
        }); 
    });
    
    });
  }
});


});
const PORT= process.env.PORT ||5000;
app.listen(PORT,()=>{
console.log(`Server listening on http://localhost:${PORT}`);
})