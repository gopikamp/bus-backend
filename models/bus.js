const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "busname":String,
        "route":String,
        "busno":String,
        "drivername":String
    }
)

let busmodel = mongoose.model("buses",schema)
module.exports = {busmodel}