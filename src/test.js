const string = `
/*你好，我是一名前端新人*/
/*接下来我将用CSS来画一只龙猫*/
/*首先，准备好一个背景*/
#wrapper{
    width:100%;
    background-color: #eff2cc;
    height:50vh;
    position:relative;
}
/*让我们开始画龙猫的脑袋*/
.head-mask {
    background-color: #eff2cc;
  }
  .plant .back {
    float: left;
    width: 100%;
    height: 2px;
    background-color: #24551b;
  }
  .leaf {
    position: absolute;
    z-index: 60;
    background-color: #6ba03c;
  }
  .plant .back:before{
  border-bottom: 2px solid #24551b;
  }

  .head {
    float: left;
    width: 150px;
    height: 130px;
    margin-left: 42px;
    position: relative;
  }
  /*给它画上耳朵*/
  .ear {
    width: 14px;
    height: 46px;
    top: -30px;
    position: absolute;
    z-index:1;
  }
  .ear::before,
  .ear::after {
    width: 0;
    height: 0;
    position: absolute;
    content: "";
    border-bottom: 30px solid #afa5a0;
    top: 0;
  }
  .ear .top {
    width: 14px;
    height: 20px;
    position: absolute;
    top: -6px;
  }
  .ear .bottom {
    width: 30px;
    height: 14px;
    position: absolute;
    bottom: 9px;
    left: -8px;
  }
  /*添上眼睛*/
  .eye {
    width: 18px;
    height: 18px;
    overflow: hidden;
    top: 30px;
    position: absolute;
    background-color: #fff;
  }
  .eye .pupil {
    width: 12px;
    height: 12px;
    position: absolute;
    left: 5px;
    top: 5px;
    background-color: #6c5f57;
  }
  /*补上鼻子*/
  .nose {
    width: 24px;
    height: 10px;
    top: 34px;
    left: 50%;
    margin-left: -12px;
    position: absolute;
    background-color: #5e5244;
  }
  /*给它加点胡须*/
  .moustache .line1,
  .moustache .line2,
  .moustache .line3 {
    height: 2px;
    clear: both;
    background-color: #464b4d;
    margin-bottom: 5px;
  }
  /*接下来画龙猫胖乎乎的身体*/
  .body {
    float: left;
    width: 220px;
    height: 230px;
    margin: -78px 0 0 7px;
    position: relative;
  }
  /*添上手臂*/
  .arm {
    width: 70px;
    height: 124px;
    position: absolute;
  }
  .hand {
    position: absolute;
    bottom: 0;
    width: 70px;
    height: 80px;
  }
  .forearm {
    width: 24px;
    height: 70px;
    position: absolute;
    margin-top: -3px;
  }

  /*给它的腹部填上花纹*/
  .belly {
    width: 200px;
    height: 190px;
    top: 10px;
    left: 50%;
    margin-left: -100px;
    position: absolute;
    background-color: #f8ddcc;
  } 
  .marking {
    width: 30px;
    height: 14px;
    position: absolute;
    background-color: #91838e;
  }
  .marking:before {
    width: 30px;
    height: 20px;
    top: 3px;
    left: 0;
    position: absolute;
    content: "";
    background-color: #f8ddcc;
    border-radius: 50%;
  }

  /*最后是龙猫的脚*/
  .foot {
    width: 150px;
    height: 18px;
    background-color: #eff2cc;
    position: absolute;
    z-index: 60;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
  } 
  .foot:before,
  .foot:after {
  border-bottom: 4px solid #eff2cc;
  }
  /*好了，大功告成！*/ 
`
 
const player ={
    id : undefined,
    speed : 50,
    n : 1,
    ui:{
        demo : document.querySelector('#demo'),
        demo2 :  document.querySelector('#demo2')
    },
    events : {
        '#btnPause':'pause',
        '#btnPlay':'play',      
        '#btnSlow':'slow',        
        '#btnNormal':'normal',
        '#btnFast':'fast'        
    },
    init : ()=>{
        player.ui.demo.innerText = string.substring(0,player.n)
        player.ui.demo2.innerHTML = string.substring(0,player.n)
        player.play()
        player.bindEvents()
    },
    bindEvents:()=>{
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
     run : ()=>{
        player.n+=1
        if(player.n>string.length){
            window.clearInterval(player.id)
            return
        }
    player.ui.demo.innerText = string.substring(0,player.n)
    player.ui.demo2.innerHTML = string.substring(0,player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play : ()=>{
        player.id = setInterval(player.run,player.speed)
    },
    pause : ()=>{
        window.clearInterval(player.id) 
    },
    slow : ()=>{
        player.pause()
        player.speed = 150
        player.play()
    },
    normal : ()=>{
        player.pause()
        player.speed = 75
        player.play()
    },
    fast : ()=>{
        player.pause()
        player.speed = 5
        player.play()
    }
    
}

player.init()
