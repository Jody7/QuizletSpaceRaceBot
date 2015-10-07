var aaa = document.getElementById("space");
var bbb = aaa.getElementsByTagName('script')[0].innerHTML;


bbb = bbb.replace(/terms/g, 'tterms');
console.log(bbb);
eval(bbb);




function translate(word) {

    for (i = 0; i < tterms.length; i++) {
        if (tterms[i]['definition'] == word) {
            return tterms[i]['word'];
        }
    }

}




setInterval(function() {

    if (document.getElementsByClassName("qDef lang-en TermText")[0] == null) {
        //DO NOTHING
    } else {
        var word = document.getElementsByClassName("qDef lang-en TermText")[0].innerHTML;


        var wordt = translate(word);

        console.log(wordt);

        document.getElementsByClassName("value")[0].value = wordt;

        var e = jQuery.Event("keypress");
        e.which = 13; //choose the one you want
        e.keyCode = 13;
        $(".value").trigger(e);


        document.getElementsByClassName("qDef lang-en TermText")[0].remove();

    }

}, 1000);
