

var popup = "popup";

function createCookie(){
    var date = new Date();
    date.setDate(date.getDate()+1); //하루동안열지 않기.
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    console.log(date);
    document.cookie = popup+"=true; path=/; expires="+date.toUTCString();
}

function getCookie(){
    var arr = document.cookie.split("; ");
    for(var i in arr){
        if(arr[i].indexOf(popup) != -1) return true;
    }   
}