const express = require("express")
const dbconnect = require("./db")
const User = require("./user.model");
const isValid = require("./validate");
const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
    let data = await User.find()
    res.send(data)
})
app.post("/",isValid,async (req, res) => {
    let data = await User.create(req.body)
    res.send(data)
})
app.delete("/:id", async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndDelete(id)
    res.send(data)
});
app.patch("/:id", async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndUpdate(id, req.body, { new: true })
    res.send(data)
})
app.listen(3500, () => {
    console.log("start on 3500");
    dbconnect()
})

let products = [];

const getData = async () => {
    let req = await fetch("http://http://localhost:3500/");
    let res = await req.json();
    products = res.products;
    console.log(products);
    mapper(products);
};

getData();

const mapper = (data) => {
    document.getElementById("productList").innerHTML = '';
    data.map((item) => {
        let title = document.createElement("h2");
        title.innerHTML = item.title;

        let description = document.createElement("span");
        description.innerHTML = item.description;

        let category = document.createElement("h2");
        category.innerHTML = item.category;

        let images = document.createElement("img");
        images.src = item.images[0];

        let price = document.createElement("h3");
        price.innerHTML = `Price: $${item.price}`;

        let rating = document.createElement("h4");
        rating.innerHTML = `Rating: ${item.rating}`;

        let brand = document.createElement("h4");
        brand.innerHTML = item.brand;

        document.getElementById("productList").append(title, description, category, images, price, rating, brand);
    });
};

// Sorting and filtering
const handleSort = (orderBy) => {
    let temp;
    if (orderBy === "lth") {
        temp = products.sort((a, b) => a.price - b.price);
    } else {
        temp = products.sort((a, b) => b.price - a.price);
    }
    mapper(temp);
};

const handleCategory = (category) => {
    let temp = products.filter((ele) => ele.category === category);
    mapper(temp);
};

document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("htl").addEventListener("click", () => handleSort("htl"));
document.getElementById("beauty").addEventListener("click", () => handleCategory("beauty"));
document.getElementById("fragrances").addEventListener("click", () => handleCategory("fragrances"));
document.getElementById("furniture").addEventListener("click", () => handleCategory("furniture"));
document.getElementById("groceries").addEventListener("click", () => handleCategory("groceries"));

// Searching
const search = (e) => {
    e.preventDefault();
    let searchValue = document.querySelector("#search").value;
    let temp = products.filter((ele) => ele.title.toLowerCase().includes(searchValue.toLowerCase()));
    mapper(temp);
};

document.getElementById("searching").addEventListener("submit", search);
document.getElementById("search").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        search(e);
    }
});


