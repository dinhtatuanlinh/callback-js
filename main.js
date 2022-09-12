const axios = require('axios')


// callback handle async
let asynchronous = (callback)=>{
    setTimeout(()=>{

        callback("abc")
    }, 1000)
    
}
let callbackFunc = (data)=>{
    console.log(data)
}
asynchronous(callbackFunc)



// handle request api async
let getData = (url, callback)=>{
    let config = {
        method: 'get',
        url: url,
        responseType: 'json'
    }
    axios(config).then(result=>{
        callback(result.data.data)
    }).catch(err=>console.log(err))
}

getData("https://reqres.in/api/users", log)
getData("https://reqres.in/api/users", result=>{
    log(result)
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
})



let c = (a, b, cb)=>{
    setTimeout(()=>{
        let sum = a+ b
        console.log(sum)
        cb(sum)
    }, 2000)
}
let d = (x)=>{
    console.log(x*2)
}
// callback sẽ return kết quả để đưa vào
c(1,2,(result)=>{
    d(result)
})
// gọi hàm setTimeout tính tổng của 2 số in kết quả sau đó lấy kết quả đưa vào hàm setTimeout dùng kết quả tổng nhân 2 rồi in ra kết quả cuối cùng
let handleAsync = (a, b)=>{
    setTimeout(()=>{
        let sum = a + b
        console.log(sum)
        setTimeout(()=>{
            console.log(sum*2)
        }, 1000)
    }, 1000)
}

let sum = (a, b, cb)=>{
    setTimeout(()=>{
        let s = a + b
        console.log("sum")
        cb(s)
    }, 1000)
}

let multiple = (x, cb)=>{
    setTimeout(()=>{
        let m = x*2
        console.log("multiple")
        cb(m)
    }, 2000)
}

sum(
    1, 
    2, 
    (resultOfSum)=>{
        multiple(
            resultOfSum, 
            (resultOfMultiple)=>{
                log(resultOfMultiple)
            }
        )
    }
)

sum(1,2, (resultOfSum)=>{console.log(resultOfSum)})

// bài toán 2 dùng hàm setTimeout tính tích 1 số với 2 dùng kết quả đưa vào 1 hàm setTimeout khác tính tổng của kết quả với 1 số đưa vào sau đó in kết quả bằng hàm log
let multiple2 = (x, a, cb, cb2) =>{
    setTimeout(()=>{
        let m2 = x * 2
        console.log("multiple 2!!")
        cb(m2, a, cb2)
    }, 1000)
}

let sum2 = (a, b, cb)=>{
    setTimeout(()=>{
        let s2 = a + b
        console.log("sum 2!!!")
        cb(s2)
    }, 1000)
}

multiple2(2,3, sum2, log)





let add = (a, b, cb)=>{
    setTimeout(()=>{
        let s = a + b
        cb(s)
    }, 2000)
}

function log(arg){
    console.log(arg)
}

let power = (x)=>{
    console.log(x * x)
}
add(1, 2, log)
add(1, 2, power)
add(1, 2, (result)=>{console.log(result)})
add(1, 2, (result)=>{console.log(result * result)})