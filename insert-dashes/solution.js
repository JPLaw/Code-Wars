
function insertDash(num) { 

  let prev='', 
    newstring='';

  num = num.toString();
	
  for (let i=0; i<num.length; i++){
    parseInt(num[i])%2 == 0 ? current='even' : current='odd';
    if (current=='odd' && prev=='odd'){
      newstring=newstring + '-' + num[i];
      prev='odd';
    } else {
      newstring=newstring + num[i];
		 	prev=current;
    }
  }

  return newstring; 
         
}