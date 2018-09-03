// Onay İletişim Kutusu
function onayIletisim(){
    var soru = confirm("İşlemi Onaylıyor musunuz?");
    if(soru == true){
        document.write("İşlem Onaylandı.");
        return true;
    }
    else{
        document.write("İşlem Onaylanmadı.");
        return false;
    }   
}

function islemIletisim(){
    
    var deger = prompt("Lütfen Bir sayı Giriniz: ");
    document.write("Girdiğiniz sayı : " + deger);
}