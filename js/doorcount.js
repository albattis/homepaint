"use strict"

const doors=document.getElementById('doorSelect');
let door=[
    'firstdoorheight',
    'firstdoorwidth',
    'seconddoorheight',
    'seconddoorwidth',
    'thirddoorheight',
    'thirddoorwidth',
    'fourthdoorheight',
    'fourtdoorwidth',
    'fivethdoorheight',
    'fivethdoorwidth',
    'sixthdoorheight',
    'sixthdoorwidth',
    'seventhdoorheight',
    'seventhdoorwidth'
];
doors.addEventListener('click',function (){
    var html='';
    var count=0;
    const number = document.getElementById('doorSelect').value;
    for (let i=0;i<number;i++)
    {
        html+=`<div class="col-sm-3 col-md-3 my-2">`;
        html+=`<p class="roomscreen">`+(i+1)+`.ajtó magassága</p>`;
        html+=`<div class="form-floating"><input type="number" class="form-control" min="100" max="500" step="20"
                                              id="`+door[count]+`">`;
        count++;
        html+=` <label for="`+door[count]+`"> Ajtó magassága centiméterben</label></div> </div>`;

        html+=`<div class="col-sm-3 col-md-3 my-2">`;
        html+=`<p class="roomscreen">`+(i+1)+`.ajtó szélessége</p>`;
        html+=`<div class="form-floating"><input type="number" class="form-control" min="100" max="500" step="20"
                                              id="`+door[count]+`">`;

        html+=` <label for="`+door[count]+`"> Ajtó szélessége centiméterben</label></div> </div>`;
        count++;

    }
    document.getElementById('Door').innerHTML=html;

})