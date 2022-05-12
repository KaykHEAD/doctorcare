window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButton()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function  activateMenuAtCurrentSection(section){
  // Linha 
  const targetLine = scrollY + innerHeight / 2

  // Verificar se a seção passou da linha 
  // Quais dados vou precisar?

  // O topo da seção
  const sectionTop = section.offsetTop
  
  // Altura da seção
  const sectionHeight = section.offsetHeight

  // O topo da seção chegou ou passsou a linha alvo.
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop


  // Verificar se a base está abaixo da linha avo

  // a secão termina aonde?
   const sectionEndAt = sectionTop + sectionHeight

  // O final da seção passsou a linha alvo. 
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  //Limites da seção
  const sectionBoudaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`) 


  menuElement.classList.remove('active')
  if (sectionBoudaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll(){
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButton(){
  if (scrollY > 1400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expand')
}

function closeMenu() {
  document.body.classList.remove('menu-expand')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content,
  #about img,
  #contact,
  #contact header,
  footer`)

