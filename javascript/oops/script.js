class User{
    constructor(name,address,username,email){
        this.name=name;
        this.address=address;
        this.username=username;
        this.email=email;
        this.role="user";
    }

    write(text){
        let h1=document.createElement("h1");
        h1.textContent=`${this.name}:${text}`
        document.body.appendChild(h1)
    }
}

class Admin extends User{
    super(name,address,username,email){
        constructor(name,address,username,email)
        this.role="admin"
    }

    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        });
    }


}

let u1 = new User("Danush","Annur","danu2422","danush8747@gmail.com")
u1.write("Are you ready!")

let u2 = new User("Dhanush","Annuru","danu242211","danush11@gmail.com")
u2.write("finish it")

let a1 = new Admin("Danu","Annur","danu2422","danush8747@gmail.com")
