"use strict"
/**
 * Screen the roomful numbers
 * @type {HTMLElement}
 */
const items=document.getElementById("roomSelect");
items.addEventListener('click',function(){
    document.getElementById("szobaszam").innerHTML='';
    let szam=document.getElementById("roomSelect").value;
    let plus=``;
    let egy="roomfirstpage";
    let ketto="roomsecondpage";
    let harom="roomthirdpage";
    let negy="roomfoirthpage";
    let id='';
    if(szam>0)
    {
        for(let i=0; i<szam;i++)
        {
            if(i===0)
            {
                id=egy;
            }
            if(i===1)
            {
                id=ketto;
            }
            if(i===2)
            {
                id=harom;
            }
            if(i===3)
            {
                id=negy;
            }


            plus+=`<div class="col-sm-6 col-md-6 my-2">`;
            plus+=`<p class="roomscreen">`+(i+1)+`.Oldalfal</p>`;
            plus+=`<div class="form-floating"><input type="number" class="form-control" min="100" max="500" step="20"
                                              id="`+id+`">`;
            plus+=` <label for="`+id+`"> Fal hossza centiméterben</label></div> </div>`;
        }

    }
    document.getElementById("szobaszam").innerHTML=plus;
})
