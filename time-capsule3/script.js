(function(){
 var steps=["The collection suggests an individual with athletic interests.","Personal correspondence indicates a literate, socially connected person.","Frequent long-distance travel points to financial comfort.","The subject kept packaging from many regions, possibly as souvenirs.","A single group photograph suggests membership in a school or organization."];
 var heads=["Subject: J. Zhou (inscription only)","Sports enthusiast","Sports enthusiast and correspondent","International traveler","International traveler and sports enthusiast","International traveler and sports enthusiast"];
 var objs=document.querySelectorAll('.obj'),seen={};
 function update(){
  var k=Object.keys(seen).length;
  document.getElementById('n').textContent=k;
  document.getElementById('fill').style.width=(k/5*100)+'%';
  document.getElementById('head').textContent=heads[k];
  var out='';
  if(!k)out='<p>No records have been reviewed yet. Open the exhibition objects to begin the reconstruction.</p>';
  else{out='<p>'+steps.slice(0,k).join('</p><p>')+'</p>';
   if(k===5)out+='<p>Conclusion: a financially comfortable individual who maintained an interest in international sporting culture and personal correspondence.</p>';}
  document.getElementById('body').innerHTML=out;
  document.getElementById('gap').hidden=(k<5);
 }
 objs.forEach(function(d,i){d.addEventListener('toggle',function(){if(d.open){seen[i]=1;update();}});});
 var tabs=document.querySelectorAll('.tabs a');
 tabs.forEach(function(a){a.addEventListener('click',function(){tabs.forEach(function(t){t.classList.remove('on')});a.classList.add('on');});});
})();