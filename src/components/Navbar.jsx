import { Link } from "react-router-dom";
const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  {
    title:"About",
    link:"/about",
    id:"header-link-about"
  },
  {
    title:"Movies",
    link:"/movies",
    id:"header-link-movies"
  }
  //   add the other link as well
];
export const Navbar = () => {
  return (
      <div className="navBar">
      {links.map((item) => {
        return <h3 className="links" key={Math.random()}><Link to={item.link}>{item.title}</Link></h3>
      })}
      </div>
  )
  ;
};
