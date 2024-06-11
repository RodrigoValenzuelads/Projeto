function toggleMode() {
  const html = document.documentElement
/*
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }
  */

  html.classList.toggle('light')

  //Pegar a tag imagem
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
  // se tiver sem light mode, manter a iamgem normal
    img.setAttribute('src', './assets/avatar.png')

  }

}