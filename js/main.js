
  import LoginComponet from'./components/LoginComponet.js',
  import UsersComponet from'./components/UsersComponet.js',
    const routes = [
      //  { path: '/', name: 'home', component: HomePageComponent },
      {path:'/',redirect { name:"login"} },
      {path: '/login', name:"login", component:LoginComponet}
      //  { path: '/users/:id', name: 'users', component: UsersPageComponent, props: true },
      //  { path: '/contact', name: 'contact', component: ContactPageComponent },
      //  { path: '/*', name: 'error', component: ErrorPageComponent }
    ];

    const router = new VueRouter({
        routes
    });

    const vm = new Vue({
        el: '#app',

        data: {
            message: "sup from vue!"
            authenticated: felse,
            mockAccount:{
              username: "Abaddi",
              password: "password",
            }
        },

        created: function() {
            console.log('parent is live');
        },

        methods: {
            logParent(message) {
                console.log("from the parent", message);
            },

            logMainMessage(message) {
                console.log("called from inside a child, lives in the parent", message);
                setActhenticated(satatus ){
                  this.authenticated= status;
                },
                logut()
                this.authenticated= fasle;


        },

      //  components: {
        //    'HomePageComponent': HomePageComponent,
          //  'UsersPageComponent': UsersPageComponent
      //  },

        router: router

    }).$mount"$app");
    router.beForeEach((to, from, next)=>{
      console.log("router guard fired");
      if (vm.authenticated==false){
      next("/login");
    }else{
      next();
    }
    });
