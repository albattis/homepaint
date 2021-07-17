
"use strict"

let windows=[
    'firstwindow',
    'secondwindow',
    'thirdwindow',
    'fourthwindow',
    'fivethwindow',
    'sixthwindow',
    'seventhwindow'
];
let darab=[
    'elsoablak',
    `masodikablak`,
    'harmadikablak',
    'negyedikablak',
    'otodikablak',
    'hatodikablak',
    'hetedikablak'
];
let noload=true;
let load=false;
let code='';
const ablak=document.getElementById('windowSelect');
ablak.addEventListener('click',function (){
    let count=ablak.value;
    let szamlalo=0;

    code='';

    for (let i = 0; i <count ; i++) {
        code+=`<div class="col-sm-6 col-md-6">`;
        code+=`<p class="roomscreen col-12 my-3">`+(i+1)+`. ablak alakja</p>`;
        code+=`<div class="form-floating">`;
        code+=`<select class="form-select" id="`+windows[i]+`">`;
        code+=`<option selected>Válasszon:</option>`;
        code+=`<option value="1">Téglalap</option>`;
        code+=`<option value="2">Kőr</option>`;
        code+=`</select>`;
        code+=`<label for="`+windows[i]+`">`+(i+1)+`. ablak alakja</label>`;
        code+=` </div>`;
        code+=`<div class="col-sm-12 col-md-12" id="`+darab[i]+`">`;
        code+=`</div></div>`;
    }

    document.getElementById('Window').innerHTML=code;
   if(code!='')
   {
       load=true;
   }
    if(load && noload)
    {
        const script=document.createElement('script');
        script.src="./js/windowselectevendhanlder.js";
        console.log(load,noload);
        document.head.appendChild(script);
        noload=false;
    }
});
console.log(load,noload);
code='';

