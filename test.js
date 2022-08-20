const obj = {
  breakfast: [
    {
      name: "bread",
      price: "10",
    },
    {
      name: "butter",
      price: "11",
    },
  ],
  lunch:[
    {
        name:'potato',
        price:'5'
    }
  ],
  dinner:[
    {
        name:"cheese",
        price:'15'
    }
  ]
};
// Object.keys(obj).forEach(el=>{
//     console.log(el , " :")
//     obj[el].forEach(ele=>{
//         console.log(ele.name)
//     })
// })
// console.log(Object.values(obj)
// )
Object.values(obj).forEach(el=>{
    console.log(el," : ")
    el.forEach(ele=>{
        console.log(ele.name)
    })
})
