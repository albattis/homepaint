"use strict"

let windowsrectagle=[
    'firstwindowheight',
    'firstwindowwidth',
    'secondwindowheight',
    'secondwindowwidth',
    'thirdwindowheight',
    'thirdwindowwidth',
    'fourthwindowheight',
    'fourthwindowwidth',
    'fivethwindowheight',
    'fivethwindowwidth',
    'sixthwindowheight',
    'sixthwindowwidth',
    'seventhwindowheight',
    'seventhwindowwidth'
];

let windowscircle=[
    'firstround',
    'secondround',
    'thirdround',
    'fourthround',
    'fivethround',
    'sixthround',
    'seventhround'
];



let html='';
let countrectagle=0;
let circle=0;
let ablakszamlalo=0;
let szam;
const firstwindow=document.getElementById('firstwindow');
firstwindow.addEventListener('click',function (){
    szam=document.getElementById('firstwindow').value;
ablakszamlalo=1;
    if(szam==1&&html=='')
    {
        rectagle();
    }if(szam==2&&html=='')
    {
        circles();
    }
    document.getElementById('elsoablak').innerHTML=html;
    html='';
    szam=0;
ablakszamlalo=0;
})
const secondwindow=document.getElementById('secondwindow');
secondwindow.addEventListener('click',function (){
    let szam=document.getElementById('secondwindow').value;
ablakszamlalo=2;
    if(szam==1&&html=='')
    {
        rectagle();
    }if(szam==2&&html=='')
    {
        circles();
    }
    document.getElementById('masodikablak').innerHTML=html;
    html='';
    szam=0;
    ablakszamlalo=0;
})
const thirdwindow=document.getElementById('thirdwindow');
thirdwindow.addEventListener('click',function (){
    let szam=document.getElementById('thirdwindow').value;
    ablakszamlalo=3;
    if(szam==1&&html=='')
    {
        rectagle();
    }if(szam==2&&html=='')
    {
        circles();
    }
    document.getElementById('harmadikablak').innerHTML=html;
    html='';
    szam=0;
    ablakszamlalo=0;
})
const fourthwindow=document.getElementById('fourthwindow');
fourthwindow.addEventListener('click',function (){
    let szam=document.getElementById('fourthwindow').value;
    ablakszamlalo=4;
    if(szam==1&&html=='')
    {
        rectagle();
    }if(szam==2&&html=='')
    {
        circles();
    }
    document.getElementById('negyedikablak').innerHTML=html;
    html='';
    szam=0;
    ablakszamlalo=0;
})
const fivethwindow=document.getElementById('fivethwindow');
fivethwindow.addEventListener('click',function (){
    let szam=document.getElementById('fivethwindow').value;
    ablakszamlalo=5;
    if(szam==1&&html=='')
    {
        rectagle();
    }if(szam==2&&html=='')
    {
        circles();
    }
    document.getElementById('otodikablak').innerHTML=html;
    html='';
    szam=0;
    ablakszamlalo=0;
})
const sixthwindow=document.getElementById('sixthwindow');
sixthwindow.addEventListener('click',function (){
    let szam=document.getElementById('sixthwindow').value;
    ablakszamlalo=6;
    if(szam==1&&html=='')
    {
        rectagle();
    }if(szam==2&&html=='')
    {
        circles();
    }
    document.getElementById('hatodikablak').innerHTML=html;
    html='';
    szam=0;
    ablakszamlalo=0;
})
const seventhwindow=document.getElementById('seventhwindow');
seventhwindow.addEventListener('click',function (){
    let szam=document.getElementById('seventhwindow').value;
    ablakszamlalo=7;
    if(szam==1&&html=='')
    {
        rectagle();
    }if(szam==2&&html=='')
    {
        circles();
    }
    document.getElementById('hetedikablak').innerHTML=html;
    html='';
    szam=0;
    ablakszamlalo=0;
})

function rectagle()
{
    html+=`<div class="row"><div class="col-sm-12 col-md-12 my-2">`;
    html+=`<p class="windowscreen">`+ablakszamlalo+`.ablak magass??ga</p>`;
    html+=`<div class="form-floating"><input type="number" class="form-control" min="100" max="500" step="10"
                                              id="`+windowsrectagle[countrectagle]+`">`;

    html+=` <label for="`+windowsrectagle[countrectagle]+`"> Ablak magass??ga centim??terben</label></div> </div>`;
    countrectagle++;
    console.log(countrectagle);
    html+=`<div class="col-sm-12 col-md-12 my-2">`;
    html+=`<p class="windowscreen">`+ablakszamlalo+`.ablak sz??less??ge</p>`;
    html+=`<div class="form-floating"><input type="number" class="form-control" min="100" max="500" step="10"
                                              id="`+windowsrectagle[countrectagle]+`">`;

    html+=` <label for="`+windowsrectagle[countrectagle]+`"> Ablak sz??less??ge centim??terben</label></div> </div>`;
    countrectagle++;

    circle++;
}

function circles()
{
    html+=`<div class="col-sm-12 col-md-12 my-2">`;
    html+=`<p class="windowscreen">`+ablakszamlalo+`.ablak ??tm??r??je</p>`;
    html+=`<div class="form-floating"><input type="number" class="form-control" min="100" max="500" step="10"
                                              id="`+windowscircle[circle]+`">`;

    html+=` <label for="`+windowscircle[circle]+`"> Ablak ??tm??r??je centim??terben</label></div> </div>`;
    circle++;
    countrectagle+=2;

}