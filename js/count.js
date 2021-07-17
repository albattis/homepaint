"use strict"

let roomHeight,oldalszamlalo,ajtoszamlalo,ablakszamlalo,elsooldalfal,masodikoldalfal,harmadikoldalfal,negyedikoldalfal,elsoajtomagassag,elsoajtoszelesseg,masodikajtomagassag,masodikajtoszelesseg,harmadikajtomagassag,harmadikajtoszelesseg,negyedikajtomagassag,negyedikajtoszelesseg,otodikajtomagassag,otodikajtoszelesseg,hatodikajtomagassag,hatodikajtoszelesseg,hetedikajtomagassag,hetedikajtoszelesseg,elsoablakmagssag,elsoablakszelesseg,elsoablakatmero,masodikablakmagssag,masodikablakszelesseg,masodikablakatmero,harmadikablakmagssag,harmadikablakszelesseg,harmadikablakatmero,negyedikablakmagssag,negyedikablakszelesseg,negyedikablakatmero,otodikablakmagssag,otodikablakszelesseg,otodikablakatmero,hatodikablakmagssag,hatodikablakszelesseg,hatodikablakatmero,hetedikablakmagssag,hetedikablakszelesseg,hetedikablakatmero;
//Ha már addig eljutottunk hogy megvannak az adatok akkor rogton if ágon belül ki kell számolni az adat cm2 részét is
//Meg kell irni a kör és a tégla területszámitásást. Illetve ellenörzni hogy nem e négyzet a sztori. ha a oldal
// b oldal egyenlö akkor négyzet!!!

function osszegzes()
{
    roomHeight=document.getElementById('roomHeight').value;
    szobaoldal();
    ajtok();
    ablakok();
}

function szobaoldal()
{
    oldalszamlalo=document.getElementById('roomSelect').value;

        if(oldalszamlalo>=1)
        {
            elsooldalfal=document.getElementById('roomfirstpage').value;
        }
    if(oldalszamlalo>=2)
    {

        masodikoldalfal=document.getElementById('roomsecondpage').value;
    }
    if(oldalszamlalo>=4)
    {
        harmadikoldalfal=document.getElementById('roomthirdpage').value;
        negyedikoldalfal=document.getElementById('roomfoirthpage').value;
    }
console.log(roomHeight,elsooldalfal,masodikoldalfal,harmadikoldalfal,negyedikoldalfal);

}

function ajtok()
{
ajtoszamlalo=document.getElementById('doorSelect').value;

if(ajtoszamlalo>=1)
{
    elsoajtomagassag=document.getElementById('firstdoorheight').value;
    elsoajtoszelesseg=document.getElementById('firstdoorwidth').value;
}
    if(ajtoszamlalo>=2)
    {
        masodikajtomagassag=document.getElementById('seconddoorheight').value;
        masodikajtoszelesseg=document.getElementById('seconddoorwidth').value;
    }
    if(ajtoszamlalo>=3)
    {
        harmadikajtomagassag=document.getElementById('thirddoorheight').value;
        harmadikajtoszelesseg=document.getElementById('thirddoorwidth').value;
    }
    if(ajtoszamlalo>=4)
    {
       negyedikajtomagassag=document.getElementById('fourthdoorheight').value;
        negyedikajtoszelesseg=document.getElementById('fourtdoorwidth').value;
    }
    if(ajtoszamlalo>=5)
    {
        otodikajtomagassag=document.getElementById("fivethdoorheight").value;
        otodikajtoszelesseg=document.getElementById('fivethdoorwidth').value;
    }
    if(ajtoszamlalo>=6)
    {
        hatodikajtomagassag=document.getElementById("sixthdoorheight").value;
        hatodikajtoszelesseg=document.getElementById('sixthdoorwidth').value;
    }
    if(ajtoszamlalo>=7)
    {
        hetedikajtomagassag=document.getElementById("seventhdoorheight").value;
        hetedikajtoszelesseg=document.getElementById('seventhdoorwidth').value;
    }
console.log(elsoajtomagassag,elsoajtoszelesseg,masodikajtomagassag,masodikajtoszelesseg,harmadikajtomagassag,harmadikajtoszelesseg,negyedikajtomagassag,negyedikajtoszelesseg,otodikajtomagassag,otodikajtoszelesseg,hatodikajtomagassag,hatodikajtoszelesseg,hetedikajtomagassag,hetedikajtoszelesseg);

}

function ablakok()
{
ablakszamlalo=document.getElementById('windowSelect').value;

if(ablakszamlalo>=1)
{
    elsoablakmagssag=document.getElementById('firstwindowheight').value;
    elsoablakszelesseg=document.getElementById('firstwindowwidth').value;
    elsoablakatmero=document.getElementById('firstround').value;
}
    if(ablakszamlalo>=2)
    {
        masodikablakmagssag=document.getElementById('secondwindowheight').value;
        masodikablakszelesseg=document.getElementById('secondwindowwidth').value;
        masodikablakatmero=document.getElementById('secondround').value;
    }
    if(ablakszamlalo>=3)
    {
        harmadikablakmagssag=document.getElementById('thirdwindowheight').value;
        harmadikablakszelesseg=document.getElementById('thirdwindowwidth').value;
        harmadikablakatmero=document.getElementById('thirdround').value;
    }
    if(ablakszamlalo>=4)
    {
       negyedikablakmagssag=document.getElementById('fourthwindowheight').value;
        negyedikablakszelesseg=document.getElementById('fourthwindowwidth').value;
        negyedikablakatmero=document.getElementById('fourthround').value;
    }
    if(ablakszamlalo>=5)
    {
        otodikablakmagssag=document.getElementById('fivethwindowheight').value;
        otodikablakszelesseg=document.getElementById('fivethwindowwidth').value;
        otodikablakatmero=document.getElementById('fivethround').value;
    }
    if(ablakszamlalo>=6)
    {
        hatodikablakmagssag=document.getElementById('sixthwindowheight').value;
        hatodikablakszelesseg=document.getElementById('sixthwindowwidth').value;
        hatodikablakatmero=document.getElementById('sixthround').value;
    }
    if(ablakszamlalo>=7)
    {
        hetedikablakmagssag=document.getElementById('seventhwindowheight').value;
        hetedikablakszelesseg=document.getElementById('seventhwindowwidth').value;
        hetedikablakatmero=document.getElementById('seventhround').value;
    }


}