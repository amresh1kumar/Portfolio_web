
function showSidebar() {
   const sidebar = document.querySelector('.sidebar')
   sidebar.style.display = 'flex'
}

function hideSidebar() {
   const sidebar = document.querySelector('.sidebar')
   sidebar.style.display = 'none'
}

/*--------------------------------------------- Header-Code----------------------------------------------- */

const headerTemplate = document.createElement('template')
headerTemplate.innerHTML = `
       <header>
      <nav class="navbar">
         <ul class="sidebar">
            <li onclick="hideSidebar()"> <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26px"
                     viewBox="0 -960 960 960" width="26px" fill="#000000">
                     <path
                        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg></a></li>
            <li> <a href="/Portfolio+website/index.html">Home</a></li>
            <li> <a  target="_blank" href=" /Portfolio+website/menubar+files/about.html">About</a></li>
            <li> <a  target="_blank" href="/Portfolio+website/images/Resume.pdf">Resume</a></li>
            <li class="hideOnMobile"> <a  target="_blank" href="mailto:amreshbkp0111@gmail.com"> <img src="/Portfolio+website/images/icons8-gmail (1).svg"
                     alt=""></a></li>
            <li class="hideOnMobile"> <a  target="_blank" href="https://github.com/amresh1kumar"> <img
                     src="/Portfolio+website/images/icons8-github (2).svg" alt="Github"></a></li>

            <li class="hideOnMobile"> <a  target="_blank" href="https://x.com/amresh1kumar"> <img src="/Portfolio+website/images/icons8-x (1).svg"
                     alt="X"></a></li>

            <li class="hideOnMobile"> <a  target="_blank" href="https://www.linkedin.com/in/amresh1kumar/"> <img
                     src="/Portfolio+website/images/icons8-linkedin.svg" alt="Linkedin"></a></li>
         </ul>

         <ul class="navbar-list">
            <li> <a href="/Portfolio+website/index.html">Amresh</a></li>
            <li class="hideOnMobile"> <a href="/Portfolio+website/index.html">Home</a></li>
            <li class="hideOnMobile"> <a  target="_blank" href="/Portfolio+website/menubar+files/about.html">About</a></li>
            <li class="hideOnMobile"> <a  target="_blank" href="/Portfolio+website/images/Resume.pdf">Resume</a></li>

            <li class="hideOnMobile"> <a  target="_blank" href="mailto:amreshbkp0111@gmail.com"> <img src="/Portfolio+website/images/icons8-gmail.svg"
                     alt=""></a></li>
            <li class="hideOnMobile"> <a  target="_blank" href="https://github.com/amresh1kumar"> <img src="/Portfolio+website/images/icons8-github.svg"
                     alt="Linkedin"></a></li>

            <li class="hideOnMobile"> <a  target="_blank" href="https://x.com/amresh1kumar"> <img src="/Portfolio+website/images/icons8-x.svg"
                     alt="X"></a></li>

            <li class="hideOnMobile"> <a  target="_blank" href="https://www.linkedin.com/in/amresh1kumar/"> <img
                     src="/Portfolio+website/images/icons8-linkedin (2).svg" alt="Linkedin"></a></li>

            <li class="menu-button" onclick="showSidebar()"> <a href="#"><svg xmlns="http://www.w3.org/2000/svg"
                     height="26px" viewBox="0 -960 960 960" width="26px" fill="#000000">
                     <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                  </svg></a></li>
         </ul>
      </nav>
   </header>
`
document.body.insertBefore(headerTemplate.content, document.body.firstChild);


/*---------------------------------------------Footer-Code----------------------------------------------- */
const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <footer class="footer">
      <a class="footer-link"  target="_blank" href="https://www.linkedin.com/in/amresh1kumar/">LinkedIn</a>
      <a class="footer-link"  target="_blank" href="https://x.com/amresh1kumar">X</a>
      <a class="footer-link"  target="_blank" href="https://github.com/amresh1kumar">Github</a>
      <p class="copyright">Copyright © 2024</p>
   </footer>
`;
document.body.appendChild(footerTemplate.content);      
