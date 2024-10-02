import './style.css'
import './node_modules/bootstrap/dist/css/bootstrap.css'

document.getElementById('gomb').addEventListener('click', () => {

  let KepUrl = document.getElementById('kepurl').value;
  let Kepszelesseg = document.getElementById('kepszelesseg').value;
  let Kepkeretvastagsaga = document.getElementById('kepkeretvastagsaga').value;
  let Keretszin = document.getElementById('keretszin').value;
  let Kep = document.getElementById('kep');

  Kep.src = KepUrl;
  Kep.style.width = Kepszelesseg + "px";
  Kep.style.border = Kepkeretvastagsaga + "px solid" + Keretszin;
})

document.getElementById('sotetvilagos').addEventListener('click',()=>{
   
   
  document.body.classList.toggle("darkode");
    
})