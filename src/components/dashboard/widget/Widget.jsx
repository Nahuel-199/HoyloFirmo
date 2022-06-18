import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { FaAmbulance } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { FaUserSlash } from "react-icons/fa";
import { TbFilePencil } from "react-icons/tb";
import { ImEyeMinus } from "react-icons/im";
import { ImProfile } from "react-icons/im";
import { ImCross } from "react-icons/im";

const Widget = ({ type }) => {
    let data;
  
    //temporary
    const amount = 90;
    const diff = 20;
  
    switch (type) {
      case "user":
        data = {
          title: "EMPLEADOS ACTIVOS",
          isMoney: false,
          link: "Configuraciones",
          icon: (
            <PersonOutlinedIcon
              className="icon-widge"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        };
        break;
      case "order":
        data = {
          title: "EN LICENCIA",
          isMoney: false,
          link: "Configuraciones",
          icon: (
            <FaAmbulance
              className="icon-widge"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
        };
        break;
      case "earning":
        data = {
          title: "EN CONFIGURACIÓN",
          isMoney: true,
          link: "Mirar detalle",
          icon: (
            <GrConfigure
              className="icon-widge"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        };
        break;
      case "balance":
        data = {
          title: "INACTIVOS",
          isMoney: true,
          link: "Ver detalle",
          icon: (
            <FaUserSlash
              className="icon-widge"
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
              }}
            />
          ),
        };
        break;
        case "hoylofirmo1":
          data = {
            title: "CON FIRMA DIGITAL",
            isMoney: true,
            link: "Mirar detalle",
            icon: (
              <TbFilePencil
                className="icon-widge"
                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
              />
            ),
          };
          break;
          case "hoylofirmo2":
            data = {
              title: "CON FIRMA BIOMÉTRICA",
              isMoney: true,
              link: "Mirar detalle",
              icon: (
                <ImEyeMinus
                  className="icon-widge"
                  style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                />
              ),
            };
            break;
            case "hoylofirmo3":
              data = {
                title: "CON FIRMA ELECTRÓNICA",
                isMoney: true,
                link: "Mirar detalle",
                icon: (
                  <ImProfile
                    className="icon-widge"
                    style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                  />
                ),
              };
              break;
              case "hoylofirmo4":
                data = {
                  title: "CON FIRMA NO DEFINIDA",
                  isMoney: true,
                  link: "Mirar detalle",
                  icon: (
                    <ImCross
                      className="icon-widge"
                      style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                    />
                  ),
                };
                break;
      default:
        break;
    }
  
    return (
      <div className="widget">
        <div className="left">
          <span className="title-dash">{data.title}</span>
          <span className="counter">
            {data.isMoney && "$"} {amount}
          </span>
          <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff} %
          </div>
          {data.icon}
        </div>
      </div>
    );
  };

export default Widget