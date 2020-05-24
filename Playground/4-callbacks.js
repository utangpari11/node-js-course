// setTimeout(()=>{
//     console.log("Two seconds are up")
// },2000)

// // const names = ['Andrew','Jen','jess']
// // const shortNames = names.filter((name)=>{
// //     return name.length <= 4
// // })

// const geocode = (address,callback) =>{
//     setTimeout(()=>{
//         const data ={
//             latitude:0,
//             longitude:0
//         }
//         callback(data)
//     },2000)
// }
// geocode('philadelphia',(data)=>{
//     console.log(data)
// })


//Challenge

const add = (num1,num2,callback) =>{
    setTimeout(()=>{
        console.log('after 2 secs')        
        callback(num1+num2)
    },2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})