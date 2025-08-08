// Highlight active hovered category menu item

  const menuLinks = document.querySelectorAll('.menu-link');
  const submenuLinks = document.querySelectorAll('.submenu-link');

  function clearActiveStates() {
    menuLinks.forEach(link => link.classList.remove('bg-white'));
    submenuLinks.forEach(link => link.classList.remove('bg-white'));
  }

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


  const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});
