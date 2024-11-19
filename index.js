// console.log(fetch('https://pimpkicks.com.ph/cdn/shop/products/Jordan1LowFootballGreyAluminumWomen_s1.png?v=1651565540')

// .then(response => {
//     console.log(response)
//     return response.blob();
// })

// .then(blob =>{
//     console.log(blob)
//     document.querySelector('#myImage').src=URL.createObjectURL(blob)
// })

// .catch(error =>{
//     console.log(error)
// })

// )




//id selector
const content=document.querySelector("#content")

//loading page
window.addEventListener("load", () =>{
    getUsers()
})

function getUsers(){
    let html=""

    // https://bscs3a-crud-api.onrender.com/api/members , {mode: "cors"})
    fetch("https://bscs3a-crud-api.onrender.com/api/members" , {mode: "cors"})
    .then((response) =>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        data.forEach((element) =>{
            html += `<li>${element.first_name} ${element.last_name}</li>`
        })

        content.innerHTML = html
    })
    .catch((error) =>{
        console.log(error)
    })

}