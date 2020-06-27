new Vue({
    el: "#app",
    data: {
      response: {
          loggedIn: false,
          allNames: [],
          beenBefore: null,
          message: "You are not logged in yet."
      },
      myName: ''

    },
    methods: {
      signIn: async function() {
        let response = await (await fetch(`https://jonas-hello-world.azurewebsites.net/api/wsl-hello-world/${this.myName}`)).json()
        console.log(response)

        if(response)
            this.response = response
      }  
      
    }
  })