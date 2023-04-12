class Cart {
    constructor(productId, quantity) {
        // this.body에는 req.params가 들어가있음
        // this.body = req.body;
        this.productId = productId;
        this.quantitiy = quantity;
      }

    async add() {
        console.log(this.productId);
        
    }
}


module.exports = Cart;
