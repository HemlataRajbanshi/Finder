
const httpServer = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./database');
const server = httpServer.createServer(app);


app.use(express.json());
app.use(cors());





// Routing pages and sign up log in form validation from here


app.post('/signup', (req,res)=>{

    const { email, name, password } = req.body;
    console.log(name);
    console.log(email);
    console.log(password);

    try {
        connection.query("SELECT * FROM sign_up WHERE U_email =?", [email], function (err, data) {
            if (err) {
                console.log(err);
                res.send("An error occured")
                res.status(404);
            }
            else if (data.length > 0) { //checking if user with same email exits or not in the database
                console.log("User alredy exists");
                console.log(`${data.length}`);
                res.send("User alredy exists");
                res.status(404);

            }
        else if(!email || !password){
                res.send('Please fill all the fields')
                console.log("Please fill all the fields");
                
            }
        else if(email.split("@").length ==1){
            res.send('Please enter valid email')
        }
        else {

            connection.query("INSERT INTO sign_up (U_name, U_email, U_password) VALUES(?,?,?)", [name, email, password], function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("User Registered Successfully");
                        res.send("User Registration Successfully")
                    }
                });

            }
        })

    } catch (error) {
        console.log("An error occurred:", error);
    }


})

app.post('/login', (req,resp)=>{

    const { email, password } = req.body;
    console.log(email);
    console.log(password);



    try {

        connection.query("SELECT * FROM sign_up WHERE U_email=? && U_password =?", [email, password], function (err, data) {
            if (err) {
                console.log(err);
                resp.send("An error occured")
            }
            else if (!email || !password){
                resp.send('Please Fill all the fields');
                console.log("Please Fill all the fields");

            }
            else if (data.length > 0) { //checking if user with same email exits or not in the database
                console.log("Log in Successful");


                resp.send("Log in Successful");
            }
            else if(email.split("@").length ==1){
                res.send('Please enter valid email')
            }
            else 
            {
                console.log("User doesn't Exist Please register first")
                resp.send("User doesn't exist");


            }
        })

    } catch (error) {

    }

})



app.post('/upload', (req,res)=>{

    const { cname, caddress, cmail,course, wlink, cimage} = req.body;

    try {
        connection.query("SELECT * FROM college WHERE cname =?", [cname], function (err, data) {
            if (err) {
                res.send("An error occured")
                res.status(404);
            }
            else if (  !cname || !caddress || !cmail || !course || !wlink || !cimage){
                res.send('Please Fill all the fields');
                console.log("Please Fill all the fields");

            }
            else if (data.length > 0) { //checking if user with same email exits or not in the database

                res.send("Successful");
            }
            else if(cmail.split("@").length ==1){
                res.send('Please enter valid email')
            }
            else {

            connection.query("INSERT INTO college (cname, caddress, cmail, course, wlink, cimage) VALUES(?,?,?,?,?,?)", [cname, caddress, cmail,course, wlink, cimage], function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Successfully added");
                        res.send("Successfully added")
                    }
                });

            }
        })

    } catch (error) {
        console.log("An error occurred:", error);
    }


})

app.get('/colleges', (req, res) => {
    try {
        connection.query("SELECT * FROM college", function (err, data) {
            if (err) {
                res.send("An error occured")
                res.status(404);
            }
        else {
            if(data.length > 0){
                console.log('Data retreived')
                return res.send(data)
            }
            }
        })

    } catch (error) {
        console.log("An error occurred:", error);
    }
})



// httpServer,ukg
server.listen(8081, ()=>{
    console.log("Server is running of port 8081 Successfully");
})