import "./topbar.scss";
import {Person,Mail} from "@material-ui/icons";
import YouTubeIcon from '@material-ui/icons/YouTube';
import GetAppIcon from '@material-ui/icons/GetApp';

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Rayhan.</a>

          <div className="itemContainer">
            <Person className="icon"/>
            <span>+880 1942 831359</span>
          </div>

          <div className="itemContainer">
            <Mail className="icon"/>
            <span>prog.rayhan1@gmail.com</span>
          </div>

          <div className="itemContainer">
            <YouTubeIcon className="icon"/>
            <a href="https://www.youtube.com/channel/UCduEIu3mL5WWZYMu-Dpy4YA" target="_blank">YouTube</a>
          </div>

          <div className="itemContainer">
            <GetAppIcon className="icon"/>
            <a href="https://drive.google.com/file/d/1L4IZTl1EQp_K3H9De9zRBeU7cWS2JHuH/view?usp=sharing" target="_blank">Resume</a>
          </div>

        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
