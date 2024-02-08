const baseUrl = "http://localhost:5000"
async function UpdateHandler(id) {
    const Titles = document.getElementsByName("title")
    const Authors = document.getElementsByName("author")
    const Genres = document.getElementsByName("genre")
    const Published_years = document.getElementsByName("published_year")
    const Isbns = document.getElementsByName("isbn")
    const Prices = document.getElementsByName("price")
    const Stock_quantitys = document.getElementsByName("stock_quantity")


    let i = 0;
    let title = ""
    let author = ""
    let genre = ""
    let published_year = ""
    let isbn = ""
    let price = ""
    let stock_quantity = ""

    while (i < Titles.length) {
        if ($(Titles[i]).attr("data-titleId") === id) {
            title = Titles[i].value
        }
        if ($(Authors[i]).attr("data-authorId") === id) {
            author = Authors[i].value
        }
        if ($(Genres[i]).attr("data-genreId") === id) {
            genre = Genres[i].value
        }
        if ($(Published_years[i]).attr("data-publishedYearId") === id) {
            published_year = Published_years[i].value
        }
        if ($(Isbns[i]).attr("data-isbnId") === id) {
            isbn = Isbns[i].value
        }
        if ($(Prices[i]).attr("data-priceId") === id) {
            price = Prices[i].value
        }

        if ($(Stock_quantitys[i]).attr("data-stockQuantityId") === id) {
            stock_quantity = Stock_quantitys[i].value
        }

        i++
    }

    let UpdateDetails = {
        title,
        author,
        genre,
        published_year,
        isbn,
        price,
        stock_quantity,
        _id: id.split("id")[1]

    }


    const Options = {
        method: 'PUT', // HTTP method
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json', // Request headers
            'Authorization': 'Bearer your-access-token', // Optional authorization header
        },
        body: JSON.stringify(UpdateDetails)
    }

    const result = await fetch(`${baseUrl}/update`, Options)

    if (result) {
        window.location.reload()
    }

}


async function DeleteHandler(id) {
    const Options = {
        method: 'DELETE', // HTTP method
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json', // Request headers
            'Authorization': 'Bearer your-access-token', // Optional authorization header
            // Add any other headers as needed
        },
    }
    let result = await fetch(`${baseUrl}/user/${id}`, Options)
    if (!window.confirm("Are you sure to Delete this user?")) {
        return
    }
    if (result) [
        window.location.reload()
    ]
}

async function AddUser(){
    let titles = document.getElementById("title1")
    let authors = document.getElementById("author1")
    let genres = document.getElementById("genre1")
    let published_years = document.getElementById("published_year1")
    let isbns = document.getElementById("isbn1")
    let prices = document.getElementById("price1")
    let stock_quantitys = document.getElementById("stock_quantity1")

    const data = {
        title : titles.value,
        author : authors.value,
        genre : genres.value,
        published_year : published_years.value,
        isbn : isbns.value,
        price : prices.value,
        stock_quantity : stock_quantitys.value,

    }

    const Options = {
        method: 'POST', // HTTP method
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json', // Request headers
            'Authorization': 'Bearer your-access-token', // Optional authorization header
            // Add any other headers as needed
        },
        body:JSON.stringify(data)
    }
    
    const result = await fetch(`${baseUrl}/create`, Options)
    if (result && result.status === 200) {
        window.location.reload()
    }
}