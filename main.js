
// ハンバーガーメニュー
const hideList = document.getElementById('hide-list');
const icon = document.getElementById('icon');

icon.addEventListener('click', function(){
  hideList.classList.toggle('display-none');
  
});

hideList.addEventListener('click', function(){
  hideList.classList.toggle('display-none');
});


// アコーディオン
const show = document.getElementById('show-topics');
const close = document.getElementById('close-topics');
const more = document.getElementById('more-topics');



show.addEventListener('click',function()  {
  more.style.display = 'block';
  show.style.display = 'none';
  close.style.display = 'block';
});


close.addEventListener('click',function(){
  more.style.display = 'none';
  show.style.display = 'block';
  close.style.display = 'none';
});


// トップ色変え
const logoCC = document.getElementById('logoCC');
const listCC = document.getElementById('listCC');
const hlist = document.getElementById('h-list');


function changeColor() {
  logoCC.src = './common/img/logo2.png';
  icon.style.color = 'black';
  
  listCC.classList.add('colorCC');
  hlist.classList.add('colorCC');


  
}



setInterval('changeColor()',29000);
// setInterval('changeColor()',3000);