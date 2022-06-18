import React from 'react';
import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className='featured-dash'>
        <div className="top-dash">
            <h4 className='title-featured' style={{marginLeft: "75px"}}>Empleados Activos</h4>
            <MoreVertIcon fontSize="small" />
        </div>
        <div className="bottom-dash">
            <div className="featuredChart-dash">
                <CircularProgressbar value={70} text={"42"} strokeWidth={5} />
            </div>
            <p className="title-featured">Activos</p>
            <p className="amount-dash">15</p>
            <p className="desc-dash">
                Empleados a confirmar
            </p>
        </div>
    </div>
  )
}

export default Featured