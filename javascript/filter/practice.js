const users = [
  {
    name: "Danush",
    pic: "https://i.pinimg.com/736x/7e/dd/fc/7eddfcef47fb69ef3d9f68a6bc4f708a.jpg",
    bio: "I am looking for a software developer job."
  },
  {
    name: "Aarav",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Passionate about web development and UI design."
  },
  {
    name: "Priya",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Frontend developer who loves creating beautiful interfaces."
  },
  {
    name: "Rohit",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "Computer science student exploring machine learning."
  },
  {
    name: "Ananya",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Aspiring full-stack developer and tech enthusiast."
  },
  {
    name: "Captain BugFix",
    pic: "https://randomuser.me/api/portraits/men/11.jpg",
    bio: "Fixes one bug and creates three new ones."
  }
];

function showusers(arr){
    arr.forEach(function(user){
        const card = document.createElement("div");
        card.classList.add("card");

// Image
const img = document.createElement("img");
img.src =user.pic;
img.classList.add("bg-img");

// Blurred layer
const blurredLayer = document.createElement("div");
blurredLayer.style.backgroundImage=`url(${user.pic})`;
blurredLayer.classList.add("blurred-layer");

// Content container
const content = document.createElement("div");
content.classList.add("content");

// Heading
const heading = document.createElement("h3");
heading.textContent = user.name;

// Paragraph
const para = document.createElement("p");
para.textContent =user.bio;

// Append content elements
content.appendChild(heading);
content.appendChild(para);

// Append all elements to card
card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);

// Add card to body (or any container)
document.querySelector(".cards").appendChild(card);
    })
}
showusers(users)

let inp=document.querySelector("input")
inp.addEventListener("input",function(){
    let newusers= users.filter((user)=>{
        return user.name.toLowerCase().startsWith(inp.value.toLowerCase());;
    })
    document.querySelector(".cards").innerHTML="";
    showusers(newusers);
})