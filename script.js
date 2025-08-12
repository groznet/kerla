// Highlight active hovered category menu item

// Load header, then attach mobile sidebar toggle handler after elements are in the DOM
fetch('shared/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header-wrapper').innerHTML = html;

    // Навешиваем обработчик после вставки header-а
    const menuToggle = document.getElementById('menu-toggle');
    const mobileSidebar = document.getElementById('sidebar-mobile');

    menuToggle.addEventListener('click', () => {
      mobileSidebar.classList.toggle('hidden');
    });
  });


// Load footer.html into #footer-wrapper
fetch('shared/footer.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('footer-wrapper').innerHTML = html;
    })
    .catch(err => console.error('Error loading header:', err));

// Load desktop sidebar content
fetch('shared/sidebar-desktop.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('sidebar-desktop').innerHTML = html;
  })
  .catch(err => console.error('Failed to load desktop sidebar:', err));

// Load mobile sidebar content
fetch('shared/sidebar-mobile.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('sidebar-mobile').innerHTML = html;
  })
  .catch(err => console.error('Failed to load mobile sidebar:', err));


// Sidebar cat. menu styles
const menuLinks = document.querySelectorAll('.menu-link');
const submenuLinks = document.querySelectorAll('.submenu-link');

function clearActiveStates() {
  menuLinks.forEach(link => link.classList.remove('bg-white'));
  submenuLinks.forEach(link => link.classList.remove('bg-white'));
}

// Set BG color to active menu
menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    clearActiveStates();
    link.classList.add('bg-white');
  });
});

submenuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    clearActiveStates();
    link.classList.add('bg-white');
    link.closest('li.group').querySelector('.menu-link').classList.add('bg-white');
  });
});