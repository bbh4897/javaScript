// Çerez Oluşturma
function writeCookie(){
    
    if(document.myForm.ad.value==""){
        alert("Lütfen Alanı Doldurunuz!");
        return;
    }
    
    cookeValue = escape(document.myForm.ad.value) + ";";
    document.cookie=cookeValue;
    document.write("Oluşturulan cookie : " + cookeValue);
    
}

// Çerezleri Alma

function readCookie(){
    
    var cookieValues = document.cookie;
    
    document.write("Cookieler : " + cookieValues);
    
    
}
