const express=require("express");
const mysql=require("mysql");
const cors=require("cors");

const app=express();

app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    username:"root",
    host :"localhost",
    password:"password",
    database:"LoginSystem"
});

app.post('/register',{req,res}=>{
    const username=req.body.username;
    const password=req.body.password;
    db.query(
        "Insert into user {username,password} values (?,?)",
        {username,password},
        (err,result)=>{
            console.log(err);
        }
    );
});

app.post("/login",{req,res}=>{
    const username=req..body.username;
    const password=req.body.password;
    db.query(
        "Select * FROM users WHERE username = ? AND password=?",
        {username,password},
        (err,result)=>{
            if (errr){
                res.send({err:err});
            }

            if(result.length>0){
                res.send(result);
            }
            else{
                res.send({message : "Wrong username/password combination"});
            }
        }
    )
});

app.listen(3001,()=>{
    console.log("running server");
})
