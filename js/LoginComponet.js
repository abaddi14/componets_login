export default {
template '
<div  id="login">
<h1>log in </h1>
<input type="text" name="username" v-model="input.username" placeholder="username">
<Input type="password" name="password" v-model="input.password" placeholder="password/">
<button type="button" v-on:click="login"()"> Log in <button>
</div>
',
data(){
  return{
    input: {
      username:"",
      password:""
    }
  }
},
methods:{
  login() {
    console.log("trying tp log in");
if(this,input.username !="" &&.this,input.password !="") {
  if(this.input.password== this.$parent.mockAccount.password) {
    console.log("logged in")
    this.$emit("authenticated",true);

  this.$router.replace {name: "users"});

}else{
console.log ("login failed");

  }
}else{
  console.log("username and password cant be blank" )
}
}
}
