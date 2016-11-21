var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.write('<!DOCTYPE html>'+
        '<html lang=en>'+
        ' <head>'+
        ' <meta charset="utf-8" />'+
        ' </head>'+
        ' <body>'+
        '<p>Server: </p>' +
        ' <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/815_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderWidget("US_cu_5xacMlYBAAAtpM_en", "fe_int_over_time_6e567247-7423-4d56-9977-2f68e76cbbdd", {"guestPath":"https://trends.sandbox.google.com:443/trends/embed/"}); </script>'+
        '<p>Server: </p>' +
        ' <script type="text/javascript"> trends.embed.renderWidget("US_cu_5xacMlYBAAAtpM_en", "fe_geo_chart_3b9ce31b-cd31-4e2d-96b6-35cb21e01a06", {"guestPath":"https://trends.sandbox.google.com:443/trends/embed/"}); </script> '+
        '<p>Server: </p>' +
        '<script type="text/javascript"> trends.embed.renderWidget("election2016", "fe_line_chart_fcb71257-d6aa-4092-a269-77566ce4ac04", {"guestPath":"https://trends.sandbox.google.com:443/trends/embed/"}); </script> '+
        ' </body>'+
        '</html>');
});
server.listen(process.env.PORT || 5000);
