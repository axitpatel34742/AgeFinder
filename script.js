
let btnDate = document.getElementById('btnDate');
btnDate.addEventListener("click",function(e){

  	let cdate = new Date();
	let tempDate  = document.getElementById('newDate').value;
	let newDate = new Date(tempDate);

	if(newDate <= cdate )
  {
     let agesel = document.getElementById('ages');
   let monthsel = document.getElementById('months');
   let daysel = document.getElementById('days');

   let monl = document.getElementById('monthsl');
   let dayl = document.getElementById('daysl');
   let agesl = document.getElementById('agesl');
 
   let cm = cdate.getMonth() + 1;
   let cd = cdate.getDate();
   let bm = newDate.getMonth() + 1;
   let bd = newDate.getDate();

 	const diff = (cdate-newDate);

  const ages = Math.floor(diff/(365.25*24*60*60*1000));
  const r1 = Math.floor(diff % (365.25*24*60*60*1000));

  const months = Math.floor(r1 / ((365.25/12)*24*60*60*1000));
  const r2 = Math.floor(r1 % ((365.25/12)*24*60*60*1000));

  const days = Math.floor(r2/ (24*60*60*1000));

  let am;
  let ad;
  am = bm - cm;
  ad = bd - cd;
  if ( am < 0 ) 
  {
  	   am = am + 12;
  	   if (ad < 0) {
  	   	am -= 1;
  	   	ad = ad + 30;
  	   }
  }
  else if(am == 0)
   {
       if(ad <= 0)
       {
         am = am + 12;
         if(ad < 0)
         { am -= 1;
           ad += 30;
          }     
       } 
  }
  else
  {
  	if (ad < 0) {
  		am -= 1;
  		ad = ad + 30;
  	}
  }
 

      agesel.innerHTML = ages;
    monthsel.innerHTML = months;
    daysel.innerHTML = days;
     
     if (bm == 2 && bd == 29) 
     {
       agesl.innerText = 4;
       monl.innerHTML = am; 
       dayl.innerHTML = ad;
     }
     else{
    agesl.innerText = 0;
    monl.innerHTML = am; 
    dayl.innerHTML = ad;
     }

}
else{
	alert("Date is larger than today's date.");
}

});










