// const allUser = [{
//     firstname: "avi",
//     lastname: "bega",
//     gender: "male",
// },
// {
//     firstname: "mehak",
//     lastname: "mander",
//     gender: "female",
// },
// {
//     firstname: "anmol",
//     lastname: "bega",
//     gender: "male",
// }
// ]

// for(let i = 0;i<allUser.length;i++)
// {
//     if(allUser[i]["lastname"]=="bega"||allUser[i]["gender"]=="female")
//     {
//         console.log(allUser[i]['firstname']);
//     }
// }


// function sum(a,b)
// {
//     return a +b;
// }

// console.log(sum(5,6));


// let sum = 0;
// for(let i = 0;i<1000000000000000000;i++)
// {
//     sum += i;
// }
// console.log(sum);


// function sum(a,b)
// {
//     return a+b;
// }

// function displayResult(data)
// {
//     console.log("The Sum is give by: ",data);
// }
// displayResult(sum(1,2));


// class Animal
// {
//     constructor(name,legCount,speaks)
//     {
//         this.name = name;
//         this.legCount = legCount;
//         this.speaks = speaks;
//     }
//     bolda()
//     {
//         console.log(this.name + " have " + this.legCount + " Legs and make noise of " + this.speaks) 
//     }
// }

// let dog =  new Animal("Dog",4,"Bow Bow");
// dog.bolda()


// function makeSum(a,b)
// {
//     console.log(a+b);
// }

// setTimeout(makeSum,3*1000,5,10);
// console.log("Hello world");

// //cleaner way
// function aviBega(fn)
// {
//     return new Promise(function (fn)
//     {
//         fn(2);
//     }); 
// }
// function sum(a)
// {
//     console.log(a+1);
// }
// aviBega().then(sum);

// // ugly way
// function aviBega(fn)
// {
    
//         fn(2)
// }
// function sum(a)
// {
//     console.log(a+1);
// }
// aviBega(sum);