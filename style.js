var audioclick = new Audio('https://allfile.club/sound/click.mp3');
var audiolaststep = new Audio('https://allfile.club/sound/connected.mp3');
var audiopoinrunning = new Audio('');
var audioselected = new Audio('');
var audiosDiamondscess = new Audio('');

var gemsvalue=50;

function gemsAmountSelected(ramount,value){
audioselected.play();
gemsvalue=value;
  document.getElementById("selected-gems-text").classList.remove('gemstext');
  document.getElementById("selected-gems-text").innerHTML=value;


  document.getElementById("gemsAmountSelected1").classList.add('gems-Amount');
  document.getElementById("gemsAmountSelected2").classList.add('gems-Amount');
  document.getElementById("gemsAmountSelected3").classList.add('gems-Amount');
  document.getElementById("gemsAmountSelected4").classList.add('gems-Amount');
  document.getElementById("gemsAmountSelected1").classList.remove('gems-Amount-Selected');
  document.getElementById("gemsAmountSelected2").classList.remove('gems-Amount-Selected');
  document.getElementById("gemsAmountSelected3").classList.remove('gems-Amount-Selected');
  document.getElementById("gemsAmountSelected4").classList.remove('gems-Amount-Selected');

  document.getElementById(ramount).classList.add('gems-Amount-Selected');
    document.getElementById(ramount).classList.remove('gems-Amount');
myFunction();

}

function myFunction() {
setTimeout(function(){
  document.getElementById("selected-gems-text").classList.add('gemstext');
}, 50);
}

function proStep1(){
audioclick.play();
name=document.getElementById("uid").value;
if (name==""){
document.getElementById("uid").style.boxShadow ="0 0 7px red";
}else{
    document.getElementById("step1").style.display="none";
      document.getElementById("step2").style.display="block";
      document.getElementById("search-name").innerHTML=name;
      myFunHideSearching();
}

}

function proStep2(){
audioclick.play();
    document.getElementById("main2").style.display="none";

        document.getElementById("main3").style.display="block";
        var myVar2 = setInterval(UserTimer, 50);
        var linestep=1;
        function UserTimer() {
          if (linestep==1){
            document.getElementById("loading-step").innerHTML="Getting ready...";
                document.getElementById("pro-bar").classList.add('probar40');

          }else if(linestep==2){
                document.getElementById("pro-bar").classList.add('probar60');
            document.getElementById("loading-step").innerHTML='Adding <span style="font-size: 24px;font-weight: 900;">'+gemsvalue+'</span>$ for <span style="font-size: 24px;font-weight: 900;">' + name +'</span>' ;
        document.getElementById("gems-gen").style.display="block";
                    document.getElementById("main3").classList.add('main3up');
        document.getElementById("genname").innerHTML=name;
        var myVar2 = setInterval(UserTimerAddgems, 50);
        var gemstext=1;
        function UserTimerAddgems() {
          if (gemstext>gemsvalue){
          audiosDiamondscess.play();
              document.getElementById("gems-gen").classList.remove('gemsgenanimation');
              document.getElementById("gemsgen").innerHTML=gemsvalue;
              document.getElementById("settingicon").classList.remove('setting-icon');
              
              document.getElementById("settingicon").src="https://d266key948fg17.cloudfront.net/uploads/1636472786ee1905a53e0b903bb72600a288d20d03.png";
              document.getElementById("gemsicon").src="https://d266key948fg17.cloudfront.net/uploads/16348770448f7dcdea1b51ec4ab1d97b5a8abd5dc0.png";
              document.getElementById("gems-gen").classList.add('sake');
          clearInterval(myVar2);

          var myVar3= setInterval(UserTimerAddgems3, 50);
        var linestep=1;
          function UserTimerAddgems3() {
            if (linestep==2){
              document.getElementById("main3").classList.add('main3down');
              document.getElementById("gems-gen").style.display="none";
        }else if(linestep==3){
            document.getElementById("loading-step").innerHTML="Finalizing...";
            document.getElementById("pro-bar").classList.add('probar40-75');
        }else if(linestep==4){
          document.getElementById("loading-step").innerHTML="Loading last step...";
          document.getElementById("pro-bar").classList.add('probar75-90');
        }else if(linestep==5){

            document.getElementById("sloading").style.display="block";
        }else if(linestep==7){

              clearInterval(myVar3);

myFunNext()


        }


        linestep++;
          }

          }else{
            document.getElementById("gemsgen").innerHTML=gemstext;
            gemstext=gemstext+11;
            audiopoinrunning.play();
          }


        }
          }
              linestep++;
        }

}

function myFunHideSearching() {
setTimeout(function(){
  document.getElementById("step2").style.display="none";
audiosDiamondscess.play();
    document.getElementById("step3").style.display="block";
    myFunHideUserFound()
}, 50);

}

function myFunHideUserFound() {
setTimeout(function(){

    document.getElementById("main").style.display="none";
    document.getElementById("main2").style.display="block";
}, 50);
}

function myFunNext(){
  var myVar4= setInterval(UserTimerAddgems4, 1000);
  var linestep=1;
  function UserTimerAddgems4() {

  audiolaststep.play();
      document.getElementById("main3").style.display="none";
    document.getElementById("main4").style.display="none";
        document.getElementById("main5").style.display="block";
document.getElementById("lastStep-gems").innerHTML=gemsvalue + " $";
    document.getElementById("lastStep-name").innerHTML=name;
document.getElementById("lastStep-gems2").innerHTML=gemsvalue;
    document.getElementById("lastStep-name2").innerHTML="$";
    clearInterval(myVar4);
  }
}
