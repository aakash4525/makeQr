$(document).ready(function() { 
    var qrcode = new QRCode("div-qr", {
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    // Current Tab
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs[0].url);
        $("#input-text").val(tabs[0].url);
        qrcode.makeCode(tabs[0].url);
    });
    
    // On keyup
    $("#input-text").keyup(function(e) {
        var text = $(this).val();
//        qrcode.clear();
        qrcode.makeCode(text);
    });
});