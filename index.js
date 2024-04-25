const express = require('express');
const cors = require('cors');
const path = require('path');
require('./db/config');
const Users = require('./db/modelSchema/users')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const Products = require('./db/modelSchema/productSchema')
const Jwt = require('jsonwebtoken');
const jwtKey = "e-commerce";


const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'))


// SINGUP & REGISTER API START HERE
app.post('/register', async (req, res) => {
    if (req.body.email || req.body.password) {
        let userData = new Users(req.body)
        let result = await userData.save();
        result = result.toObject();
        delete result.password;
        console.log(result);
        res.send(result);
    }
    else {
        res.send({ result: "invalid information" })
    }
})
// SINGUP & REGISTER API END HERE


// LOGIN  API START HERE
app.post('/login', async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await Users.findOne(req.body).select("-password");
        if (user) {
            Jwt.sign({ user }, jwtKey, { expiresIn: "3h" }, (err, token) => {
                if (err) {
                    res.send.statu({ result: "Something want to wrong, Pleace Try again" });
                } else {
                    res.send({ user, auth: token })
                }
            })
        } else {
            res.send({ result: "No User Found!" })
        }
    } else {
        res.send({ result: "User not Found" })
    }
})
// LOGIN  API END HERE



// ADD-PRODUCT API START HERE
// app.post("/add-product", upload.single('images'), async (req, res) => {
//     let product = new Products(req.body , req.file);
//     let result = await product.save();
//     res.send(result);
//     console.log(req.body, req.file);
// })
// index.js


app.post("/add-product", upload.single('images'), async (req, res) => {

    let productData = {
        name: req.body.name,
        price: req.body.price,
        catogary: req.body.catogary,
        compony: req.body.compony,
        gender: req.body.gender,
        description: req.body.description,
        usertId: req.body.usertId,
        imageUrl: req.file.path
    };
    let product = new Products(productData);
    try {
        let result = await product.save();
        res.send(result);
        console.log(req.body, req.file);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error saving product");
    }
});
// ADD-PRODUCT API END HERE


// GET-ALL-PRODUCT API START HERE
app.get("/get-product", async (req, res) => {
    let product = await Products.find();
    if (product.length > 0) {
        res.send(product);
    } else {
        res.send({ result: "Product not found!" })
    }
})
// GET-ALL-PRODUCT API END HERE




// DELETE-SINGLE-PRODUCT API START HERE
app.delete("/delete-product/:id", async (req, res) => {
    const result = await Products.deleteOne({ _id: req.params.id })
    res.send(result);
})
// DELETE-SINGLE-PRODUCT API END HERE



// GET-SINGLE-PRODUCT API START HERE
app.get("/get-single-group/:id", async (req, res) => {
    let result = await Products.findOne({ _id: req.params.id })
    if (!result) {
        res.send({ result: "Product not Found !" })
    } else {
        res.send(result);
    }
})
// GET-SINGLE-PRODUCT API END HERE


// UPDATE-PRODUCT API START HERE
app.put("/update-Product/:id", async (req, res) => {
    let result = await Products.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.send(result);
})
// UPDATE-PRODUCT API END HERE



//SEARCH PRODUCCT API START HERE
app.get("/search-product/:key", async (req, res) => {
    let result = await Products.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { compony: { $regex: req.params.key } }
        ]
    })
    res.send(result);
})
//SEARCH PRODUCCT API END HERE 


// MIDDLE WARE JWT TOKEN CODE 
function tokenValidation(req, res, next) {
    let token = req.headers['authorization'];
    if (token) {
        token = token.split(' ')[1];
        Jwt.verify(token, jwtKey, (err, valid) => {
            if (err) {
                res.status(401).send({ result: "Please Provide Valid token !" })
            } else {
                next();
            }
        })
    }
    else {
        res.status(403).send({ result: "Pleace add token in headers !" })
    }
}


app.use(express.static(path.join(__dirname, '/EcommercePrac/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Back-end/EcommercePrac/dist/index.html'))
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});