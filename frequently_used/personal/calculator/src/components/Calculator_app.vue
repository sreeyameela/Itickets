<template>
  <div class="calculator">
    <div class="display">{{current || 0 }}</div>
    <div @click="clear" class="btn">C</div>
    <div @click="op" class="btn">+/-</div>
    <div @click="percent" class="btn">%</div>
    <div @click="divide" class="btn operator">/</div>
    <div @click="append('7')" class="btn">7</div>
    <div @click="append('8')" class="btn">8</div>
    <div @click="append('9')" class="btn">9</div>
    <div @click="multiply" class="btn operator">X</div>
    <div @click="append('4')" class="btn">4</div>
    <div @click="append('5')" class="btn">5</div>
    <div @click="append('6')" class="btn">6</div>
    <div @click="minus" class="btn operator">-</div>
    <div @click="append('1')" class="btn">1</div>
    <div @click="append('2')" class="btn">2</div>
    <div @click="append('3')" class="btn">3</div>
    <div @click="add" class="btn operator">+</div>
    <div @click="append('0')" class="zero">0</div>
    <div @click="dot" class="btn">.</div>
    <div @click="equals" class="btn operator">=</div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      previous:null,
      current:'',
      operator : null,
      operatorClicked: false,
      
    }
  },
  methods:{
        clear(){
          this.current='';
        },
        op() {
  if (this.current.charAt(0) === '-') {
    this.current = this.current.slice(1);
  } else {
    this.current = `-${this.current}`;
  }
},
        percent(){
          this.current= `${parseFloat(this.current)/100}`
          
        },
        append(number){
          if(this.operatorClicked){
            this.current= '';
            this.operatorClicked=false;
          }
          this.current= `${this.current}${number}`
        },
        dot(){
          if( this.current.indexOf('.') === -1 ){
            this.append('.');
          }
        },
        setPrevious(){
          this.previous=this.current;
          this.operatorClicked=true;
        },
        divide(){
          this.operator= (a,b) => b/a;
          this.setPrevious();
        },
        multiply(){
          this.operator= (a,b) => a*b;
          this.setPrevious();
        },
        minus(){
          this.operator= (a,b) => b-a;
          this.setPrevious();
        },
        add(){
          this.operator= (a,b) => a+b;
          this.setPrevious();
        },
        equals(){
          this.current= `${this.operator(
            parseFloat(this.current),
            parseFloat(this.previous)
          )}`
          this.previous=null;
        }
      }
  
}
</script>

<style scoped>
  .calculator{
    margin: 0 auto;
    width: 400px;
    display:grid;
    font-size: 40px;
    grid-template-columns: repeat(4,1fr);
    grid-row: mimmax(50px,auto);
  }
  .display{
    grid-column: 1/5;
    background-color: rgb(0, 145, 255);
    color: rgba(0, 0, 0, 0.609);
  }
  .zero{
    grid-column: 1/3;
    border: 1px solid;

  }
  .btn{
    background-color: #eee;
    border: 1px solid #999;
  }
  .operator{
    background-color: rgb(114, 153, 51);
    color: white;
  }
</style>
