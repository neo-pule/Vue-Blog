<template>
    <div class="row">
   
      <div class="column">
  
         <div id="backImg" for="Img">
           <input type="file" id="Img"  @change="onFileChange" accept=".png, .jpg, .jpeg" />
        </div>
         <div id="preview">
     <img v-if="url" :src="url" />
    </div>
        </div>
      <div class="column" style="position:absolute;right:0px">
       <div>
          <h5>Username :</h5>
          <input v-model="Username" />
        </div>
        <div>
           <h5>Caption :</h5>
          <input v-model="Caption" />
        </div>
        <div>
           <h5>Description :</h5>
         <input v-model="Description" />
        </div>
       
    </div>
  
     </div>
     <button @click="run">Test</button>
</template>
<script>
import axios from 'axios';
export default {
  
  name: "HelloWorld",
  data(){ 
    return {
      url: null,
      file:null,
      Username: null,
      Caption: null,
      Description: null,
      //  image: "../assets/logo.png",
  }
  },
  props: {
    msg: String,
  },
  methods: {
    run() {
      console.log(this.file);
    },
    onFileChange(e) {
      const File = e.target.files[0];
      this.url = URL.createObjectURL(File);
      this.file = File;
      console.log(this.file);
    }
  },
  mounted(){
   axios
      .get('http://localhost:3000/blog')
      .then(response => ( console.log(response.data)));
  }

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background-color: #e2e2e2;
}
#app {
  padding: 20px;
}
#backImg{
  background-image: url('../assets/logo.png');
  height: 100%;
  width: 100%;
  /* top:5%; */
}
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form{
  background-color: cadetblue;
}
.column{
   /* background-color: burlywood; */
   width: 50%;
   height: 40%;
   margin:  8px 8px 8px 8px;
   position: absolute;
   top: 15%;
}
#preview img {
  max-width: 100%;
  max-height: 500px;
}
</style>
