// var app = function() {
//
//   const url = 'https://api.mlab.com/api/1/databases/signins/collections/signins?apiKey=Vp2I1nmC961_lV2whDojmmOuZzXb0S_o';
//
//   var makeRequest = function(url, callback){
//     var request = new XMLHttpRequest();
//     request.open("GET", url);
//     request.addEventListener("load", callback);
//     request.send();
//   }
//
//   var requestComplete = function(){
//     if (this.status !== 200) return;
//     var jsonString = this.responseText;
//     var myData = JSON.parse(jsonString);
//     console.log("Heck")
//     console.log(myData);
//   }
//
//   makeRequest(url, requestComplete)
//
// }
//
//
// window.addEventListener( 'load', app);
