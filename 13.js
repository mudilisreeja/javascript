let DATA="secret information";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("data: ",  DATA );

    }
}
let user1=new user("srija","sree2chuby@gmail.com");
let user2=new user("anil","anshu@gmail.com");
console.log(user2);
user1.viewdata();

class Admin extends user{
   
    editData(){
        DATA="some new data";
        console.log("data:", DATA);
    }
    
}
let admin1=new Admin("admin1","admin@gmail.com");
console.log(admin1);
admin1.viewdata();
admin1.editData();