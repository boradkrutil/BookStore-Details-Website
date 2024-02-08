const bookModel = require("./BookModel")

// const data = [
//     {
//        title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         genre: "Fiction",
//         published_year: 1925,
//         isbn: "978-0743273565",
//         price: "10.99",
//         stock_quantity: 50
//     },
//     {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         genre: "Fiction",
//         published_year: 1960,
//         isbn: "978-0061120084",
//         price: "12.99",
//         stock_quantity: 30
//     },
//     {
//         title: "1984",
//         author: "George Orwell",
//         genre: "Science Fiction",
//         published_year: 1949,
//         isbn: "978-0451524935",
//         price:" 9.99",
//         stock_quantity: 25
//     },
//     {
//         title: "The Catcher in the Rye",
//         author: "J.D. Salinger",
//         genre: "Fiction",
//         published_year: 1951,
//         isbn: "978-0316769174",
//         price: "11.99",
//         stock_quantity: 40,
//     },
//     {
//         title: "Harry Potter and the Philosopher's Stone",
//         author: "J.K. Rowling",
//         genre: "Fantasy",
//         published_year: 1997,
//         isbn: "978-0747532699",
//         price:" 14.99",
//         stock_quantity: 60,
//     }
// ]

class BookController{

    async InsertMany(req, res) {
        try {
            const result = await bookModel.model.insertMany(data)
            if(result) return res.status(200).send({message:"Success", result:result})
        } catch (error) {
            console.log(error);
        }
    }

    async listUser(req, res){
        try {
            const result = await bookModel.model.find({})
            if(result) return res.status(200).render("index", {data:result})
            return res.status(500).send({message:"Somthing went wrong"})
        } catch (error) {
            return res.status(500).send({message:"Internal Server Error"})
        }
    }
    async UpdateDetail(req, res){
        try {
            const {title,author,genre,published_year,isbn,price,stock_quantity,_id} = req.body
            const result = await bookModel.model.updateOne({_id:_id}, {title,author,genre,published_year,isbn,price,stock_quantity})
            if(!result || result.modifiedCount > 1){
                return res.status(500).send({message:"Somthing went wrong"})
            }
            return res.status(200).send({ message: 'Success' })
        
        } catch (error) {
            console.log(error);
        }
    }

    async CreateUser(req, res){
        try {
           const result = await bookModel.model.create(req.body)
           if (result)  return res.status(200).send({ message: 'Success' })
        } catch (error) {
            console.log(error);
        }
    }

    async DeleteUser(req, res){
        try {
            const {id} = req.params
            const result = await bookModel.model.deleteOne({_id:id})
            if(result || result.deletedCount>1){
                return res.status(200).send({message:"Success"})
            }
            return res.status(500).send({message:"Somthing went wrong"})
        } catch (error) {
            return res.status(500).send({message:"Internal Server Error"})
        }
    }

}

const bookController = new BookController()
module.exports = bookController