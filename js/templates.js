function loadHeader() {
  // Get the current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Get the current page title
  const pageTitle = document.title.toLowerCase();
  
  // Determine which page is active based on title or filename
  const isJourney = pageTitle.includes('journey') || currentPage === 'journey.html';
  const isProjects = pageTitle.includes('projects') || pageTitle.includes('personal projects') || currentPage === 'projects.html';
  const isHobbies = pageTitle.includes('hobbies') || currentPage === 'hobbies.html';
  const isContact = pageTitle.includes('contact') || currentPage === 'contact.html';

  // Determine base path for links
  const isIndex = currentPage === 'index.html';
  const basePath = isIndex ? 'pages/' : '';

  document.getElementById("header-placeholder").innerHTML = `
    <header class="site-header">
        <div class="logo">
            <a href="${isIndex ? 'index.html' : '../index.html'}">
                <span class="desktop-name">Yash Sharma</span>
                <span class="mobile-name">YS</span>
            </a>
        </div>
        <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
            <span class="sr-only">Menu</span>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
        <nav class="main-nav" id="primary-navigation">
            <ul>
                <li><a href="${basePath}journey.html" class="${isJourney ? 'active' : ''}">My Journey</a></li>
                <li><a href="${basePath}projects.html" class="${isProjects ? 'active' : ''}">Personal Projects</a></li>
                <li><a href="${basePath}hobbies.html" class="${isHobbies ? 'active' : ''}">Hobbies</a></li>
                <li><a href="${basePath}contact.html" class="${isContact ? 'active' : ''}">Contact Me</a></li>
            </ul>
        </nav>
    </header>
  `;
  
  // Add event listener for hamburger menu toggle
  document.querySelector('.mobile-nav-toggle').addEventListener('click', function() {
    const navigation = document.getElementById('primary-navigation');
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    
    this.setAttribute('aria-expanded', !isExpanded);
    navigation.classList.toggle('nav-open');
  });
}

function loadFooter() {
  document.getElementById("footer-placeholder").innerHTML = `
    <footer>
        <p>&copy; 2025 Yash Sharma. All rights reserved.  All opinions expressed are my own. </p>
    </footer>
  `;
}
