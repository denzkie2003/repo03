window.addEventListener('resize', (event) => {
  if(window.innerWidth > 800){
    alert("This webpage not available in desktop mode.\nPlease to drog the border of your browser to resize it.");
    document.getElementsByTagName('body')[0].style.display = 'none';
  }else{
    document.getElementsByTagName('body')[0].style.display = 'block';
  }
});