"use strict";
const {response} = require("express");
//const UserStorage = require("./UserStorage");
const db = require("../config/db");
class Cart {
    constructor(body) {
        // this.body에는 req.params가 들어가있음
        // this.body = req.body;
        this.body= body;
      }
    async add() {
        const response = await Cart.save(this.body);
        return response;
    }
    static async save(Info) {
        return new Promise((resolve, reject) => {
          db.query("USE CAPSTONE", (err, result) => {
            if (err) {
              reject(err);
              return;
            }
            let query = "INSERT INTO cart(CART_ID, PRODUCT_ID, cart_num, S_ID) VALUES ?";
            let values = [];
            const keys = Object.keys(Info); //객체의 배열화
            
            for (let i = 1; i < keys.length; i++) {
                //const values = [];
                // const productId = `P${i}`; //p1
                const cartNum = parseInt(Info[keys[i]]); //Info.p1
                values.push([Math.random(), keys[i], cartNum, Info.laundryId]);
                console.log(values);
                //query += values.join(", ");
              }          
              db.query(query, [values], (err, result) => {
                if (err) {
                  reject(err);
                } else {
                  resolve({ success: true });
                }
             } );
          });
        });
      }
}


module.exports = Cart;