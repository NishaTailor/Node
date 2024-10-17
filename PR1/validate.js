const isValid = (req, res, next) => {
    let { Description, Status, TaskName } = req.body
    console.log(Description, Status, TaskName);

    if (!Description || !Status || !TaskName) {
        res.send("Invalid Data")
    } else {
        next()
    }
}
module.exports = isValid



