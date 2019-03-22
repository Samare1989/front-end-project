export class User
{
    id: number;
    userName : string;
    firstName : string;
    lastName : string;
    phone :string;
    password : string;
    email : string;
    isAdmin: boolean;
    isReviwer: boolean;
    Active : boolean;

     constructor(userName:string,firstName:string,lastName:string,phone:string,password:string,
      email:string,isAdmin:boolean=false,isReviwer:boolean=false){
        this.id = 0;
        this.userName =userName;
        this.firstName=firstName;
        this.lastName =lastName;
        this.phone =phone;
        this.password = password;
        this.email =email;
        this.isAdmin= isAdmin;
        this.isReviwer= isReviwer;
        this.Active= true;
      //   this.isAdmin="isAdmin? "yes":"No";
      //   this.isReviwer="isreviwer? "yes":"No";
      //   this.Active= "";
        
   
     }
}








