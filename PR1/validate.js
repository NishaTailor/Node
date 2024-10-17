const isValid = (req, res, next) => {
    let { email, password, username } = req.body
    console.log(email, password, username);

    if (!email || !password || !username) {
        res.send("Invalid Data")
    } else {
        next()
    }
}
module.exports = isValid



