let min=0,sec=0,milli=0;
var loop;
let flag=1;
function activate()
{
  if(flag!=1)return;
  flag=2;
  loop=setInterval(()=>{
    milli++;
    if(milli===100)
    {
      milli=0;
      sec++;
      if(sec===60)
      {
        sec=0;
        min++;
      }
    }
        let second=document.getElementById("sec");
        if(sec<10)
        second.innerHTML=`0${sec}:`;
        else second.innerHTML=`${sec}:`
       let minute=document.getElementById("min");
       if(min<10)
       minute.innerHTML=`0${min}:`;
       else
       minute.innerHTML=`${min}:`
    let ele=document.getElementById("millisec");
    ele.innerHTML=milli;
  },10)
}
function stopfn()
{
  clearInterval(loop);
  flag=1;
  let minslot=document.getElementById("min2");
  if(min<10)
  minslot.innerHTML=`0${min}:`;
  else minslot.innerHTML=`${min}:`;
  let secslot=document.getElementById("sec2");
  if(sec<10)
  secslot.innerHTML=`0${sec}:`;
  else secslot.innerHTML=`${sec}:`;
  let millislot=document.getElementById("millisec2");
  if(milli<10)
  millislot.innerHTML=`0${milli}`;
  else millislot.innerHTML=`${milli}`;
}
function resetfn()
{
  clearInterval(loop);
  flag=1;
  min=0;
  sec=0;
  milli=0;
  let ele=document.getElementById("min");
  ele.innerHTML="-";
  ele=document.getElementById("sec");
  ele.innerHTML="";
  ele=document.getElementById("millisec");
  ele.innerHTML="";
  ele=document.getElementById("min2");
  ele.innerHTML="-";
  ele=document.getElementById("sec2");
  ele.innerHTML="";
  ele=document.getElementById("millisec2");
  ele.innerHTML="";
}