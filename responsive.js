(function() {
  const navbar = document.querySelector('.navbar')
  const initialNavbarOffset = 
    navbar.getBoundingClientRect().top + navbar.getBoundingClientRect().height
  const sections = {
    home: document.getElementById('home').getBoundingClientRect().top,
    about: document.getElementById('about').getBoundingClientRect().top,
    skills: document.getElementById('skills').getBoundingClientRect().top,
    projects: document.getElementById('projects').getBoundingClientRect().top,
    contact: document.getElementById('contact').getBoundingClientRect().top
  }

  function activateLink(targetLink) {
    const links = document.querySelectorAll('.nav-link')
    links.forEach(link => link.classList.remove('active'))
    
    let link = document.querySelector(`.nav-link[href="${targetLink}"]`)
    link.classList.add('active')
  }
    
  window.addEventListener('scroll', function(e) {
    let bodyOffsetY = this.document.body
      .getBoundingClientRect().y * -1
    let scrollSpy = bodyOffsetY + navbar.getBoundingClientRect().height

    if(bodyOffsetY > initialNavbarOffset)
      navbar.classList.add('navbar-fixed')
    else if(bodyOffsetY <= 0) 
      navbar.classList.remove('navbar-fixed')

    if(scrollSpy >= sections.home && scrollSpy < sections.about) {
      activateLink('#home')
    } 
    else if(scrollSpy >= sections.about && scrollSpy < sections.skills) {
      activateLink('#about')
    }
    else if(scrollSpy >= sections.skills && scrollSpy < sections.projects) {
      activateLink('#skills')
    }
    else if(scrollSpy >= sections.projects && scrollSpy < sections.contact) {
      activateLink('#projects')
    }
    else if(scrollSpy >= sections.contact) {
      activateLink('#contact')
    }

    console.clear()
    console.log(bodyOffsetY)
    console.log(this.document.getElementById('projects').getBoundingClientRect())
    console.log(this.document.getElementById('contact').getBoundingClientRect())

  })

})()