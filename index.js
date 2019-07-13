var http = require('http');
var i = 0;
//create a server object:
http.createServer(function (req, res) {

    // req variable is request header object which clients sends.
  //console.log(req.headers.host, req.url);
  const url = req.url;
  const ary = url.split("/");
if (req.url === "/error") {
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.write(String(i));
    i = i +1;
    // res.statusCode = 400;
} else if (req.url === "/todo") {
    res.write(JSON.stringify([{name: "first Nmae", id: Math.random(), isCompleted: false}]))
} else if (ary.length > 2) {
    res.write("This is folder");
} else {
    res.write("This is file")
}
//   res.write('<h1>Hello</h1><script>alert("sdf")</script>'); //write a response to the client
  res.end(); //end the response
}).listen(3000);

// below is snippet for frontend ajax call


// var httpRequest = new XMLHttpRequest();
// httpRequest.onreadystatechange = function () {
    // debugger;
    // if (httpRequest.readyState === 4) {
    //       if (httpRequest.status === 200) {
    //         alert(httpRequest.responseText); //success  ---obj.success()
    //       } else {
    //         alert('There was a problem with the request.'); // error
    //       }
    //     }
// }
// httpRequest.open("GET", "http://localhost:3000/error")
// httpRequest.send()


// Document Calls
// Script Call
// Ajax Call -- without reloading page fetch data from server
// styleshet call






// $.ajax({
//     type: "GET",
//     url: "demo_test.txt",
//     success: function(data){  //200
//          //
//     },
//     errror: function (error) { // 500 401 302 
//         //
//     }
// });


// axios = function ('GET', 'localhost:200', errCb, succCb) {

// }

// axios("GET", "sddsdf", function() {})
// axios("GET", "sdfdds", function() {})







// $.getAlltodos()

// poojaAjax({

// })