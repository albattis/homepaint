"use strict"

let roomHeight,oldalszamlalo,ajtoszamlalo,elsooldalfal,masodikoldalfal,harmadikoldalfal,negyedikoldalfal,elsoajtomagassag,elsoajtoszelesseg,masodikajtomagassag,masodikajtoszelesseg,harmadikajtomagassag,harmadikajtoszelesseg,negyedikajtomagassag,negyedikajtoszelesseg,otodikajtomagassag,otodikajtoszelesseg,hatodikajtomagassag,hatodikajtoszelesseg,hetedikajtomagassag,hetedikajtoszelesseg;


function osszegzes()
{
    roomHeight=document.getElementById('roomHeight').value;
    szobaoldal();
    ajtok();
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