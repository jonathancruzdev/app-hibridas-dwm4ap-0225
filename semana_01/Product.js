class Product {
    products = [];

    constructor(products=[]){
        this.products = products;
    }

    addProduct( product ){
        if( product.name === ""){

        }
        const id = crypto.randomUUID();
        console.log(id);
    }
}

module.exports = Product;