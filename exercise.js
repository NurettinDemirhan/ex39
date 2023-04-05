const isLogged = true;

const promise1 = (isLogged) => {
    return new Promise((resolve,reject) => {
        if (isLogged) {
            resolve( Math.floor(Math.random() * 10));
        }
        else {
            reject(new Error("rejected"));
        }
    })
}
const promise2 = (randomNumber) => {
    return new Promise((resolve,reject)=> {
        if(randomNumber > 0.5){
            let userData = {name: "John", age: 24};
            resolve(userData);
        }
        else{
            reject(new Error("number is not okay"));
        }
    })
}
promise1(isLogged)
.then((result)=> promise2(result))
.then((result)=> console.log(result))
.catch((error)=> console.error(error))
.finally(()=> console.log("done"))
