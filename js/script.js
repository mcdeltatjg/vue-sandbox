new Vue({
    el: "#app",
    data: {
      message: "You are not logged in yet.",
      names: [],
      myName: ''
    },
    methods: {
      signIn: async function() {
        console.log('this.myName = ', this.myName)
        let serverResponse
        serverResponse = await fetch(`https://jonas-hello-world.azurewebsites.net/api/wsl-hello-world?name=${this.myName}`, 
            {mode: 'cors'})
        let response = await serverResponse.json()
        this.message = response.message
      }  
      
    }
  })