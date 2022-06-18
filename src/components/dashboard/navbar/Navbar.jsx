import React, { useContext } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import "./navbar.scss";
import { DarkModeContext } from '../../../context/darkModeContext';

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='navbar-dash'>
      <div className="wrapper-dash">
        <div className="search-dash">
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>
        <div className="items-dash">
          <div className="item-dash">
            <LanguageOutlinedIcon className="icon-dash"/>
            English
          </div>
          <div className="item-dash">
            <DarkModeOutlinedIcon className="icon-dash" onClick={() => dispatch({ type: "TOGGLE"})}/>
          </div>
          <div className="item-dash">
            <FullscreenExitOutlinedIcon className="icon-dash"/>
          </div>
          <div className="item-dash">
            <NotificationsNoneOutlinedIcon className="icon-dash"/>
            <div className="counter-dash">1</div>
          </div>
          <div className="item-dash">
            <ChatBubbleOutlineOutlinedIcon className="icon-dash"/>
            <div className="counter-dash">2</div>
          </div>
          <div className="item-dash">
            <ListOutlinedIcon className="icon-dash"/>
          </div>
          <div className='item-dash'>
            <img src="https://firebasestorage.googleapis.com/v0/b/react-eccomerce-979a7.appspot.com/o/Categorias%2FTodos.jpg?alt=media&token=e4bfdef1-d7b0-4162-a266-2f26aa9a4d07"
             alt="avatar" className="avatar-dash"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar