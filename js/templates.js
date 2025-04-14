function loadHeader() {
  // Get the current page filename
  const currentPage = window.location.pathname.split('/').pop();
  
  // Get the current page title
  const pageTitle = document.title.toLowerCase();
  
  // Determine which page is active based on title or filename
  const isJourney = pageTitle.includes('journey') || currentPage === 'journey.html';
  const isProjects = pageTitle.includes('projects') || pageTitle.includes('personal projects') || currentPage === 'projects.html';
  const isHobbies = pageTitle.includes('hobbies') || currentPage === 'hobbies.html';
  const isContact = pageTitle.includes('contact') || currentPage === 'contact.html';

  document.getElementById("header-placeholder").innerHTML = `
    <header class="site-header">
        <div class="logo">
            <a href="${currentPage === 'index.html' ? 'index.html' : '../index.html'}">
                <span class="name">Yash Sharma</span>
            </a>
        </div>
        <nav class="main-nav">
            <ul>
                <li><a href="${currentPage === 'index.html' ? 'pages/' : ''}journey.html" class="${currentPage === 'journey.html' ? 'active' : ''}">My Journey</a></li>
                <li><a href="${currentPage === 'index.html' ? 'pages/' : ''}projects.html" class="${currentPage === 'projects.html' ? 'active' : ''}">Personal Projects</a></li>
                <li><a href="${currentPage === 'index.html' ? 'pages/' : ''}hobbies.html" class="${currentPage === 'hobbies.html' ? 'active' : ''}">Hobbies</a></li>
                <li><a href="${currentPage === 'index.html' ? 'pages/' : ''}contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">Contact Me</a></li>
            </ul>
        </nav>
    </header>
  `;
}

function loadFooter() {
  document.getElementById("footer-placeholder").innerHTML = `
    <footer>
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
    </footer>
  `;
}