{
    //   Problem 1 
    // <------------>


    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === false) {
            return input.toLowerCase();
        } else {
            return input.toUpperCase();
        }
    }


    console.log(formatString("Hello"));
    console.log(formatString("Hello", true));
    console.log(formatString("Hello", false));


    //    Problem 2 
    // <-------------> 

    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
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


    function concatenateArrays<T>(...arrays: T[][]): T[] {
        return arrays.reduce((acc, curr) => acc.concat(curr), []);
    }
    const result1 = concatenateArrays(["a", "b"], ["c"]);
    const result2 = concatenateArrays([1, 2], [3, 4], [5]);
    console.log(result1);
    console.log(result2);


    //      Problem 4
    // <---------------->


    class Vehicle {
        private make: string;
        private year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }

        getInfo(): string {
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }

    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }

        getModel(): string {
            return `Model: ${this.model}`;
        }
    }


    const myCar = new Car("Toyota", 2020, "Corolla");
    console.log(myCar.getInfo());
    console.log(myCar.getModel());


    //      Problem 5 
    // <----------------->

    function processValue(value: string | number): number {
        if (typeof value === "string") {
            return value.length;
        }
        return value * 2;
    }

    console.log(processValue("hello"));
    console.log(processValue(10));


    //      Problem 6
    // <----------------->



    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {

        if (products.length === 0) {
            return null;
        }

        return products.reduce((expensiveProduct, currentProduct) => {
            return currentProduct.price > expensiveProduct.price ? currentProduct : expensiveProduct;
        });
    }


    const products: Product[] = [
        { name: "Pen", price: 100 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 0 }
    ];

    const mostExpensiveProduct = getMostExpensiveProduct(products);
    console.log(mostExpensiveProduct);


    //      Problem 7 
    // <---------------->


    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }


    function getDayType(day: Day): string {

        if (day === Day.Saturday || day === Day.Sunday) {
            return "Weekend";
        } else {
            return "Weekday";
        }
    }


    console.log(getDayType(Day.Monday));
    console.log(getDayType(Day.Saturday));
    console.log(getDayType(Day.Sunday));


    //       Problem 8 
    // <------------------->


    async function squareAsync(n: number): Promise<number> {
        if (n < 0) {
            return Promise.reject(new Error("Negative number not allowed"));
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        });
    }

    squareAsync(4)
        .then((result) => {
            console.log(result);
        })
    squareAsync(-3)
        .then((result) => {
            console.log(result);
        })






}