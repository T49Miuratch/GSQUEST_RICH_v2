
function rand(n){
    var r = Math.floor(Math.random()*n+1)
return r;

}

var t = rand(10);
$("#rand").html(t);

/*
const r1 = Math.ceil(Math.random()*7);
const r2 = Math.ceil(Math.random()*7);
const r3 = Math.ceil(Math.random()*7);
alert( r1 + " | " + r2 + " | " + r3);
*/

// function testdesu(){
// var test = "関数を勉強中";
// alert(test);
// }

// testdesu();
// testdesu();
// testdesu();

/*
function add(a1,a2,en){

    if(en=="+"){
    var n = a1 + a2;
    }

    if(en=="-"){
        var n = a1 - a2;
        }

        if(en=="*"){
            var n = a1 * a2;
            }

            if(en=="/"){
                var n = a1 / a2;
                }

                if(en=="%"){
                    var n = a1 % a2;
                    }

    return n;

}

const t = add(20,30,"%");
alert(t);

*/