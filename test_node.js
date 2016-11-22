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
        '<p>Server: </p>' +
        '</script> <script type="text/javascript"> trends.embed.renderWidget("election2016", "fe_us_states_c4cd90ef-9673-4bc3-9cd5-bfdfd2ce862d", {"guestPath":"https://trends.sandbox.google.com:443/trends/embed/"}); </script>'+
        '<p>Server: </p>' +
        '</script> <script type="text/javascript"> trends.embed.renderWidget("election2016", "fe_list_985bbeb1-7218-4e4a-a0a2-d60435e47764", {"guestPath":"https://trends.sandbox.google.com:443/trends/embed/"}); </script>'+
        '<p>Server: </p>' +
        '</script> <script type="text/javascript"> trends.embed.renderWidget("election2016", "fe_geo_chart_1af494a5-dcc2-4243-8dd7-3a61da773b45", {"guestPath":"https://trends.sandbox.google.com:443/trends/embed/"}); </script>'+
        '<p>Server: </p>' +
        '</script> <script type="text/javascript"> trends.embed.renderWidget("election2016", "fe_geo_color_chart_62cebf19-6a88-4789-b635-76d670077700", {"guestPath":"https://trends.sandbox.google.com:443/trends/embed/"}); </script>'+
        '<p>Server: </p>' +
        '</script> <script type="text/javascript"> trends.embed.renderWidget("election2016", "fe_line_chart_8023516f-26e9-4235-98ed-1aa86a431a29", {"guestPath":"https://trends.sandbox.google.com:443/trends/embed/"}); </script>'+
        '<p>Server: </p>' +
        '</script> <script type="text/javascript"> trends.embed.renderWidget("US_cu_5xacMlYBAAAtpM_en", "fe_donut_chart_a61fe0f4-7fb6-4527-b72f-aab6e46a5aec", {"guestPath":"https://trends.sandbox.google.com:443/trends/embed/"}); </script>'+
        '<p>Server: </p>' +
        '</script> <script type="text/javascript"> trends.embed.renderWidget("US_lnk_XsEJogAwAABX0M_en", "TIMESERIES", {"guestPath":"https://trends.sandbox.google.com:443/trends/embed/"}); </script>'+
        '<p>Server: </p>' +
        '</script> <script type="text/javascript"> trends.embed.renderWidget("US_cu_MK0gIFcBAABHDM_en", "horserace_chart_9703ed2a-6522-4608-a99b-41bc6d0b2b23", {"guestPath":"https://trends.sandbox.google.com:443/trends/embed/"}); </script>'+
        '<p>Server: </p>' +
        '</script> <script type="text/javascript"> trends.embed.renderWidget("US_cu_MK0gIFcBAABHDM_en", "fe_list_82505dde-cd2d-4895-9393-561cbd4c1ce6", {"guestPath":"https://trends.sandbox.google.com:443/trends/embed/"}); </script>'+
        '<p>Server: </p>' +
        '</script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"/m/02y17j","geo":"","time":"all"},{"keyword":"/m/09gms","geo":"","time":"all"},{"keyword":"/m/012y1_","geo":"","time":"all"}],"category":0,"property":""}, {"exploreQuery":"q=%2Fm%2F02y17j,%2Fm%2F09gms,%2Fm%2F012y1_&date=all"}); </script> '+
        ' </body>'+
        '</html>');
});
server.listen(process.env.PORT || 5000);
