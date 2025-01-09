{
    let testimonal_data1 =[
    {
        "name": "Profile-Card-Component",
        "image":"https://github.com/rakks1/Profile-Card-Component/blob/main/design/desktop-preview.jpg?raw=true",
        "text":""
    },
    {
        "name": "Product-preview-card-component",
        "image":"https://github.com/rakks1/product-preview-card-component/blob/main/design/desktop-preview.jpg?raw=true",
        "text":""
    },
    {
        "name": "3-column-preview-card-component",
        "image":"https://github.com/rakks1/3-column-preview-card-component/blob/main/design/desktop-preview.jpg?raw=true",
        "text":""
    }
]
//sync js with html
let data=0
let name = document.querySelector(".container_name1")
let image = document.querySelector(".container_img1")
let text= document.querySelector(".container_text1")

//sync current data with html
function testimonal() {
     let current=testimonal_data1[data]
     image.src=current.image   
     name.textContent=current.name   
     text.textContent=current.text  
     data++

//loop
if(data===testimonal_data1.length){
    data=0
}
}
testimonal()

//looptiming
setInterval(()=>{
    testimonal()
},1500);


}

{
    let testimonal_data1 =[
    {
        "name": "Handicap Website",
        "image":"https://github.com/rakks1/Public/blob/main/Handicap/handi.jpeg?raw=true",
        "text":"Visit My Page",
        "link":"https://rakks1.github.io/Handicap-Empowerment/index.html"
    },
    {
        "name": "Portfolio Website",
        "image":"https://github.com/rakks1/Public/blob/main/HTML/Screenshot_15-12-2024_202850_127.0.0.1.jpeg?raw=true",
        "text":"You're Here",
        "link":"index.html"

    },
  
]
//sync js with html
let data=0
let name = document.querySelector(".container_name2")
let image = document.querySelector(".container_img2")
let text= document.querySelector(".container_text2")
let link= document.querySelector(".container_text2")

//sync current data with html
function testimonal() {
     let current=testimonal_data1[data]
     image.src=current.image   
     name.textContent=current.name   
     text.textContent=current.text  
     link.href=current.link
     data++

//loop
if(data===testimonal_data1.length){
    data=0
}
}
testimonal()

//looptiming
setInterval(()=>{
    testimonal()
},1500);


}


{
    let testimonal_data1 =[
    {
        "name": "Apple Blog Website Design",
        "image":"https://raw.githubusercontent.com/rakks1/Public/refs/heads/main/wpapple1.png",
        "text":""
    },
    {
        "name": "Apple Blog Website Design",
        "image":"https://raw.githubusercontent.com/rakks1/Public/refs/heads/main/wpapple2.png",
        "text":""
    }
]
//sync js with html
let data=0
let name = document.querySelector(".container_name3")
let image = document.querySelector(".container_img3")
let text= document.querySelector(".container_text3")

//sync current data with html
function testimonal() {
     let current=testimonal_data1[data]
     image.src=current.image   
     name.textContent=current.name   
     text.textContent=current.text  
     data++

//loop
if(data===testimonal_data1.length){
    data=0
}
}
testimonal()

//looptiming
setInterval(()=>{
    testimonal()
},1500);


}



