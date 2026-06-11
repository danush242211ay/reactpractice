// Event and Eventlistener

//---add and remove event listener

// let h1=document.querySelector("h1")
// function click(){
//     h1.style.color="red";
// }
// h1.addEventListener("dblclick",click)
// h1.removeEventListener("dblclick",click)

//---types of events
// ->click, input, change, mouse, keypadup

// let inp=document.querySelector("input")
// inp.addEventListener("input",function(evt){
//     console.log(evt.data)
// })

// let h1=document.querySelector("h1")
// let sel=document.querySelector("select")
// sel.addEventListener("change",function(vt){
//     h1.textContent=`${vt.target.value} Selected`;
// })

// --- submit

// let form = document.querySelector("form")
// let inputs=document.querySelectorAll("input")
// let st=document.querySelector("#struct")

// form.addEventListener("submit",function(det){
// det.preventDefault()

// let div=document.createElement("div")
// div.classList.add("card")

// let inp=document.createElement("img")
// inp.classList.add("imaged")
// inp.setAttribute("src",inputs[1].value)

// let h3=document.createElement("h3")
// h3.classList.add("h3a")
// h3.textContent=inputs[0].value

// let p=document.createElement("p")
// p.textContent=inputs[2].value

// div.appendChild(inp)
// div.appendChild(h3)
// div.appendChild(p)
// st.appendChild(div)
// })

//---mouse

// let mouseel=document.createElement("div")
// mouseel.classList.add("mousee")

// let div=document.querySelector("div")
// div.appendChild(mouseel)

// mouseel.addEventListener("mouseover",function(){
//     mouseel.style.background="yellow"
// })
// mouseel.addEventListener("mouseout",function(){
//     mouseel.style.background="red"
// })
