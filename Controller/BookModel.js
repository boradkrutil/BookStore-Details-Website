const { default: mongoose } = require("mongoose");

class BookModel{
    constructor(){
        this.schema = new mongoose.Schema({
            title:{type:String, required:true},
            author:{type:String, required:true},
            genre:{type:String, required:true},
            published_year:{type:Number, required:true},
            isbn:{type:String, required:true},
            price:{type:String, required:true},
            stock_quantity:{type:Number, required:true},

        })

        this.model = mongoose.model("tbl_BookDetails", this.schema)
    }
}

const bookModel = new BookModel()
module.exports = bookModel
