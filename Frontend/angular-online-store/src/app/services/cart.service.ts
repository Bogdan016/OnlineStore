// import { Injectable } from '@angular/core';
// import { CartItem } from '../common/cart-item';
// import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   cartItems: CartItem[] = [];  // an array of items
//   totalPrice: Subject<number> = new Subject<number>();
//   totalQuantity: Subject<number> = new Subject<number>();

//   constructor(theCartItem: CartItem) {

//     let alreadyInCart: boolean = false; // check if the item is already in cart
//     let existingCartItem: CartItem | undefined = undefined;


//     if(this.cartItems.length > 0) {
//       //  find the item based on id
//       for(let tempCartItem of this.cartItems) {
//         if(tempCartItem.id == theCartItem.id) {
//           existingCartItem = tempCartItem;
//           break;
//         }
//       }
//       alreadyInCart = (existingCartItem != undefined);
//     }

//     if(alreadyInCart && existingCartItem !== undefined) {
//       existingCartItem.quantity++;
//     } else {
//       // add the item to the array
//       this.cartItems.push(theCartItem); 
//     }
//     this.computeCartTotals();
//   }

//   computeCartTotals() {
//     let totalPriceVal: number = 0;
//     let totalQuantityVal: number = 0;

//     for(let currentCartItem of this.cartItems) {
//       totalPriceVal += currentCartItem.quantity * currentCartItem.unitPrice;
//       totalQuantityVal += currentCartItem.quantity;
//     }

//     this.totalPrice.next(totalPriceVal);
//     this.totalQuantity.next(totalQuantityVal);

//     this.logCartData(totalPriceVal, totalQuantityVal);

//   }

//   logCartData(totalPriceVal: number, totalQuantityVal: number) {

//     console.log('Contents of the cart: ');
//     for(let tempCartItem of this.cartItems) {
//       const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
//       console.log(`name: ${tempCartItem.name}, quantity: ${tempCartItem.unitPrice}, subtotalPrice=${subTotalPrice}`);
//     }

//     console.log(`totalPrice: ${totalPriceVal.toFixed(2)}, totalQuantity: ${totalQuantityVal}`);
//     console.log('------------------------------');
//   }
// }
import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // add the item to the array
  cartItems: CartItem[] = [];  // an array of items
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem) {
    let alreadyInCart: boolean = false;
    let existingCartItem: CartItem | undefined = undefined;

    if (this.cartItems.length > 0) {
      //  find the item based on id

      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);

      alreadyInCart = (existingCartItem !== undefined);
    }

    if (alreadyInCart && existingCartItem !== undefined) {
      existingCartItem.quantity++;
    } else {
      // add the item to the array
      this.cartItems.push(theCartItem);
    }

    this.computeCartTotals();
  }

  computeCartTotals() {
    let totalPriceVal: number = 0;
    let totalQuantityVal: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceVal += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityVal += currentCartItem.quantity;
    }

    this.totalPrice.next(totalPriceVal);
    this.totalQuantity.next(totalQuantityVal);

    this.logCartData(totalPriceVal, totalQuantityVal);
  }

  logCartData(totalPriceVal: number, totalQuantityVal: number) {
    console.log('Contents of the cart: ');
    for (let tempCartItem of this.cartItems) {
      const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
      console.log(`name: ${tempCartItem.name}, quantity: ${tempCartItem.quantity}, subtotalPrice = ${subTotalPrice}`);
    }

    console.log('-----------------------------------------');
    console.log(`totalPrice: ${totalPriceVal.toFixed(2)}, totalQuantity: ${totalQuantityVal}`);
    console.log('-----------------------------------------');
  }
  decrementQuantity(theCartItem: CartItem) {
    theCartItem.quantity--;
    if (theCartItem.quantity === 0) {
      this.remove(theCartItem);
    } else {
      this.computeCartTotals();
    }
  }

  remove(theCartItem: CartItem) {
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id === theCartItem.id);

    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals();
    }
  }
}
