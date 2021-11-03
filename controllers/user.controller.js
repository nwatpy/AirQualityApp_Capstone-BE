//Import our model so we can us it to interact with the realated data in MongoDB
const User = require("../models/user.model")


//build our controller that will have our CRUD and other methods for our users
const userController = {

    //method to get all users using async/await syntax
    getUsers: async function(req, res){

        //using a try/catch since we are using asyn/await and want to catch any errors if the code in the try block fails
        try {
            
            //use our model to find recipes that match a query.
            //{} is the current query which really mean find all the recipes
            //we use await here since this is an async process and we want the code to wait for this to finish before moving on to the next line of code
            let allUsers = await User.find({})
            
            //return all the users that we found in JSON format
            res.json(allUsers)
            
        } catch (error) {

            //if any code in the try block fails, send the user a HTTP status of 400 and a message stating we could not find any recipes
            res.status(400).send("error getting all users: " + error)

        }
    },
    createUser: async function(req, res){

        try {

            const userData = req.body;

            let newUser = await User.create(userData)

            res.json(newUser)
            
        } catch (error) {
            console.log("failed to create user: " + error)
            res.status(400).send("failed to create user")
        }

    },
    updateUser: async function(req, res, next){

        try {

            const email = req.params.email;

            const newUserData = req.body;

            const user = await User.findOne({email: email})

            if(user){
                Object.assign(user, newUserData)
                await user.save()
            }else{
                res.status(404).send({message: "User not found", statusCode: res.statusCode});
            }

            res.json(await User.findById(user._id))
            
        } catch (error) {
            console.log("failed to update user: " + error)
            res.status(400).send("failed to update user")
        }

    }
    

}

module.exports = userController;
