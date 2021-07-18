"use strict"

let roomHeight,oldalszamlalo,ajtoszamlalo,ablakszamlalok,elsooldalfal,masodikoldalfal,harmadikoldalfal,negyedikoldalfal;
let elsoajto,masodikajto,harmadikajto,negyedikajto,otodikajto,hatodikajto,hetedikajto;
let elsoablak,masodikablak,harmadikablak,negyedikablak,otodikablak,hatodikablak,hetedikablak;
//Ha már addig eljutottunk hogy megvannak az adatok akkor rogton if ágon belül ki kell számolni az adat cm2 részét is
//Meg kell irni a kör és a tégla területszámitásást. Illetve ellenörzni hogy nem e négyzet a sztori. ha a oldal
// b oldal egyenlö akkor négyzet!
let ajtoosszesen=0;
let ablakosszesen=0;
let falosszesen=0;
function osszegzes()
{
    roomHeight=document.getElementById('roomHeight').value;
    szobaoldal();
    ajtok();
    ablakok();
    szamlalas();
}

function szobaoldal()
{
    oldalszamlalo=document.getElementById('roomSelect').value;

        if(oldalszamlalo>=1)
        {
            elsooldalfal=document.getElementById('roomfirstpage').value*document.getElementById('roomHeight').value;
            falosszesen+=elsooldalfal;
        }
    if(oldalszamlalo>=2)
    {

        masodikoldalfal=document.getElementById('roomsecondpage').value*document.getElementById('roomHeight').value;
        falosszesen+=masodikoldalfal;
    }
    if(oldalszamlalo>=4)
    {
        harmadikoldalfal=document.getElementById('roomthirdpage').value*document.getElementById('roomHeight').value;
        negyedikoldalfal=document.getElementById('roomfoirthpage').value*document.getElementById('roomHeight').value;
        falosszesen+=harmadikoldalfal;
        falosszesen+=negyedikoldalfal;
    }
console.log(roomHeight,elsooldalfal,masodikoldalfal,harmadikoldalfal,negyedikoldalfal);

}

function ajtok()
{
ajtoszamlalo=parseInt(document.getElementById('doorSelect').value);

if(ajtoszamlalo>=1)
{
    elsoajto=document.getElementById('firstdoorheight').value*document.getElementById('firstdoorwidth').value;
    ajtoosszesen+=elsoajto;
}
    if(ajtoszamlalo>=2)
    {
        masodikajto=document.getElementById('seconddoorheight').value*document.getElementById('seconddoorwidth').value;
        ajtoosszesen+=masodikajto;
    }
    if(ajtoszamlalo>=3)
    {
        harmadikajto=document.getElementById('thirddoorheight').value*document.getElementById('thirddoorwidth').value;
        ajtoosszesen+=harmadikajto;
    }
    if(ajtoszamlalo>=4)
    {
       negyedikajto=document.getElementById('fourthdoorheight').value*document.getElementById('fourtdoorwidth').value;
        ajtoosszesen+=negyedikajto;
    }
    if(ajtoszamlalo>=5)
    {
        otodikajto=document.getElementById("fivethdoorheight").value*document.getElementById('fivethdoorwidth').value;
        ajtoosszesen+=otodikajto;
    }
    if(ajtoszamlalo>=6)
    {
        hatodikajto=document.getElementById("sixthdoorheight").value*document.getElementById('sixthdoorwidth').value;
        ajtoosszesen+=hatodikajto;
    }
    if(ajtoszamlalo>=7)
    {
        hetedikajto=document.getElementById("seventhdoorheight").value*document.getElementById('seventhdoorwidth').value;
        ajtoosszesen+=hetedikajto;
    }
console.log(elsoajto,masodikajto,harmadikajto,negyedikajto,otodikajto,hatodikajto,hetedikajto,ajtoosszesen);

}

function ablakok()
{
ablakszamlalok=document.getElementById('windowSelect').value;
if(ablakszamlalok!=null) {
    if (ablakszamlalok >= 1) {
       if(document.getElementById('firstround')!=null)
        {
            elsoablak=Math.pow(document.getElementById('firstround').value/2,2)*Math.PI;
        }else
        {
            elsoablak= document.getElementById('firstwindowheight').value*document.getElementById('firstwindowwidth').value;

        }
       ablakosszesen+=elsoablak;
    }
    if (ablakszamlalok >= 2) {

        if(document.getElementById('secondround')!=null)
        {
            masodikablak=Math.pow(document.getElementById('secondround').value/2,2)*Math.PI;
        }else {
            masodikablak = document.getElementById('secondwindowheight').value * document.getElementById('secondwindowwidth').value;
        }
        ablakosszesen+=masodikablak;
    }
    if (ablakszamlalok >= 3) {
        if(document.getElementById('thirdround')!=null)
        {
            harmadikablak=Math.pow(document.getElementById('thirdround').value/2,2)*Math.PI;
        }else {
            harmadikablak = document.getElementById('thirdwindowheight').value * document.getElementById('thirdwindowwidth').value;
        }
        ablakosszesen+=harmadikablak;
    }
    if (ablakszamlalok >= 4) {
        if(document.getElementById('fourthround')!=null)
        {
            negyedikablak=Math.pow(document.getElementById('fourthround').value/2,2)*Math.PI;
        }
        else {
            negyedikablak = document.getElementById('fourthwindowheight').value * document.getElementById('fourthwindowwidth').value;
        }
        ablakosszesen+=negyedikablak;
    }
    if (ablakszamlalok >= 5) {
        if(document.getElementById('fivethround')!=null)
        {
            otodikablak=Math.pow(document.getElementById('fivethround').value/2,2)*Math.PI;
        }else {
            otodikablak = document.getElementById('fivethwindowheight').value * document.getElementById('fivethwindowwidth').value;
        }
        ablakosszesen+=otodikablak;
    }
    if (ablakszamlalok >= 6) {
        if(document.getElementById('sixthround')!=null)
        {
            hatodikablak=Math.pow(document.getElementById('sixthround').value/2,2)*Math.PI;
        }else {
            hatodikablak = document.getElementById('sixthwindowheight').value * document.getElementById('sixthwindowwidth').value;
        }
        ablakosszesen+=hatodikablak;
    }
    if (ablakszamlalok >= 7) {
        if(document.getElementById('seventhround')!=null)
        {
            hetedikablak=Math.pow(document.getElementById('seventhround').value/2,2)*Math.PI;
        }
        else
        {
            hetedikablak = document.getElementById('seventhwindowheight').value * document.getElementById('seventhwindowwidth').value;
        }
        ablakosszesen+=hetedikablak;
    }
    console.log(elsoablak,masodikablak,harmadikablak,negyedikablak,otodikablak,hatodikablak,hetedikablak,ablakosszesen);
}

}

function szamlalas()
{
    let osszesen=0;
    osszesen=((falosszesen-ajtoosszesen)-ablakosszesen)/1000;
    console.log(osszesen);
    osszesen=Math.round(osszesen/10);
    console.log(Math.round(osszesen));
    var doksi=`<div class="col-md-12">`;
    doksi+=`<p class="roomscreen">A program által számolt adat függ a festákanyag minőségétől..</p>`;
    doksi+=`<p><span style="font-size: 120%">`+osszesen+`</span> Liter festék kell a szoba festéséhez.</p>`;
    doksi+=`</div>`;
    document.getElementById('osszegzes').innerHTML=doksi;
    document.getElementById('forms').style.visibility="hidden";


}