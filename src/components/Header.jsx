import { StyledHeader } from "../styles/styled-components/StyledHeader";

export default function Header({ openNav, setOpenNav }){

   return(
      <StyledHeader>
         <button className="toggle-menu-btn" onClick={() => setOpenNav(!openNav)}>
            <img src={`/images/${openNav ? "icon-close" : "icon-hamburger"}.svg`} alt="toggle navigation menu display" />
         </button>
         <a href="#" className="logo">
            <img src="/images/logo.svg" alt="page logo" />
         </a>
         <nav className={openNav ? "show-nav" : ""}>
            <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">shop</a></li>
               <li><a href="#">about</a></li>
               <li><a href="#">contact</a></li>
            </ul>
         </nav>
      </StyledHeader>
   )
}