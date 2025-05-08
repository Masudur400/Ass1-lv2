"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    //   Problem 1 
    // <------------>
    function formatString(input, toUpper) {
        if (toUpper === false) {
            return input.toLowerCase();
        }
        else {
            return input.toUpperCase();
        }
    }
    console.log(formatString("Hello"));
    console.log(formatString("Hello", true));
    console.log(formatString("Hello", false));
    //    Problem 2 
    // <-------------> 
    function filterByRating(items) {
        return items.filter((item) => item.rating >= 4);
    }
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ];
    const result = filterByRating(books);
    console.log(result);
    // <-----#another example#----->
    // type Book = {
    //     title: string;
    //     rating: number;
    //   };
    // function filterByRating(items: Book[]): Book[] {
    //     return items.filter((item) => item.rating >= 4);
    // }
    // const books = [
    //     { title: "Book A", rating: 3 },
    //     { title: "Book B", rating: 3.2 },
    //     { title: "Book C", rating: 5.0 }
    // ];
    // const result = filterByRating(books);
    // console.log(result); 
    //   Problem 3 
    // <----------->
    function concatenateArrays(...arrays) {
        return arrays.reduce((acc, curr) => acc.concat(curr), []);
    }
    const result1 = concatenateArrays(["a", "b"], ["c"]);
    const result2 = concatenateArrays([1, 2], [3, 4], [5]);
    console.log(result1);
    console.log(result2);
    //      Problem 4
    // <---------------->
    class Vehicle {
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }
    class Car extends Vehicle {
        constructor(make, year, model) {
            super(make, year);
            this.model = model;
        }
        getModel() {
            return `Model: ${this.model}`;
        }
    }
    const myCar = new Car("Toyota", 2020, "Corolla");
    console.log(myCar.getInfo());
    console.log(myCar.getModel());
    //      Problem 5 
    // <----------------->
    function processValue(value) {
        if (typeof value === "string") {
            return value.length;
        }
        return value * 2;
    }
    console.log(processValue("hello"));
    console.log(processValue(10));
    function getMostExpensiveProduct(products) {
        if (products.length === 0) {
            return null;
        }
        return products.reduce((expensiveProduct, currentProduct) => {
            return currentProduct.price > expensiveProduct.price ? currentProduct : expensiveProduct;
        });
    }
    const products = [
        { name: "Pen", price: 100 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 0 }
    ];
    const mostExpensiveProduct = getMostExpensiveProduct(products);
    console.log(mostExpensiveProduct);
    //      Problem 7 
    // <---------------->
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    function getDayType(day) {
        if (day === Day.Saturday || day === Day.Sunday) {
            return "Weekend";
        }
        else {
            return "Weekday";
        }
    }
    console.log(getDayType(Day.Monday));
    console.log(getDayType(Day.Saturday));
    console.log(getDayType(Day.Sunday));
    //       Problem 8 
    // <------------------->
    function squareAsync(n) {
        return __awaiter(this, void 0, void 0, function* () {
            if (n < 0) {
                return Promise.reject(new Error("Negative number not allowed"));
            }
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(n * n);
                }, 1000);
            });
        });
    }
    squareAsync(4)
        .then((result) => {
        console.log(result);
    });
    squareAsync(-3)
        .then((result) => {
        console.log(result);
    });
}
