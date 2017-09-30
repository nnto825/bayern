/**
 * Created by Administrator on 2017/7/21.
 */
window.onload = function () {
    var Shand = document.getElementById("secondHand");
    var Mhand = document.getElementById("minuteHand");
    var Hhand = document.getElementById("hourHand");
    var on_off = document.getElementById("on_off");
    var reset = document.getElementById("reset");
    var set = document.getElementById("set");
    var obtain = document.getElementById("obtain");
    var input = document.getElementsByTagName("input");
    input[0].value = "00";
    input[1].value = "00";
    input[2].value = "00";
    var Sdeg = 0,Mdeg = 0,Hdeg = 0,flag = 0;
    function repeatSecond() {
        Sdeg += 6;
        flag++;
        input[2].value = Number(input[2].value)+1;
        if(input[2].value == 60){
            input[2].value = 0;
            input[1].value = Number(input[1].value)+1;
            if(input[1].value == 60){
                input[1].value = 0;
                input[0].value = Number(input[0].value)+1;
                if(input[0].value == 24){
                    input[0].value = 0;
                }
            }
        }
        Shand.style.transform = "rotate("+Sdeg+"deg)";
        if(Sdeg === 360){
            Sdeg = 0;
        }
        if(Sdeg%60 === 0){
            Mdeg++;
            Mhand.style.transform = "rotate("+Mdeg+"deg)";
        }
        if(Mdeg === 360){
            Mdeg = 0;
        }
        if(flag === 120){
            flag = 0;
            Hdeg++;
            Hhand.style.transform = "rotate("+Hdeg+"deg)";
        }
        if(Hhand === 360){
            Hhand =0;
        }
        for(var j = 0;j<input.length;j++){
            if(input[j].value.length === 1){
                input[j].value = "0" + input[j].value;
            }
        }
    }
    function setting(){
        var gainH = Number(input[0].value);
        var gainM = Number(input[1].value);
        var gainS = Number(input[2].value);
        Sdeg = gainS*6;
        Mdeg = gainM*6+Math.floor(Sdeg/60);
        Hdeg = (gainH%12)*30+Math.floor((gainM*360+Sdeg)/720);
        Shand.style.transform = "rotate("+Sdeg+"deg)";
        Mhand.style.transform = "rotate("+Mdeg+"deg)";
        Hhand.style.transform = "rotate("+Hdeg+"deg)";
        input[0].value = (gainH+Math.floor((gainM+Math.floor(gainS/60))/60))%24;
        input[1].value = (gainM+Math.floor(gainS/60))%60;
        input[2].value = gainS%60;
        for(var j = 0;j<input.length;j++){
            if(input[j].value.length === 1){
                input[j].value = "0" + input[j].value;
            }
        }
    }
    function obtaining(){
        new Date();
        input[0].value = new Date().getHours();
        input[1].value = new Date().getMinutes();
        input[2].value = new Date().getSeconds();
        var gainH = Number(input[0].value);
        var gainM = Number(input[1].value);
        var gainS = Number(input[2].value);
        Sdeg = gainS*6;
        Mdeg = gainM*6+Math.floor(Sdeg/60);
        Hdeg = (gainH%12)*30+Math.floor((gainM*360+Sdeg)/720);
        Shand.style.transform = "rotate("+Sdeg+"deg)";
        Mhand.style.transform = "rotate("+Mdeg+"deg)";
        Hhand.style.transform = "rotate("+Hdeg+"deg)";
        for(var j = 0;j<input.length;j++){
            if(input[j].value.length === 1){
                input[j].value = "0" + input[j].value;
            }
        }
    }
    var i = 0;
    reset.onclick = function(){
        Sdeg = 0;
        Mdeg = 0;
        Hdeg = 0;
        Shand.style.transform = "rotate("+Sdeg+"deg)";
        Mhand.style.transform = "rotate("+Mdeg+"deg)";
        Hhand.style.transform = "rotate("+Hdeg+"deg)";
        input[0].value = "00";
        input[1].value = "00";
        input[2].value = "00";
    };
    on_off.onclick = function(){
        i++;
        if(i%2){
            a = setInterval(repeatSecond,1000);
        }
        if(!(i%2)){
            clearInterval(a);
        }
        if(i === 100){
            i = 0;
        }
    };
    set.onclick = function(){
        setting();
    };
    obtain.onclick = function(){
        obtaining();
    }
};



