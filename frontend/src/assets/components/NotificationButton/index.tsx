import icon from '../../img/notification-icon.svg';
import './style.css';

function NotificationButton() {
    return(
        <div className="dsmeta-red-btn">
        <img src={icon} alt="Ícone de notificação" />
      </div>
    )
  }
  
  export default NotificationButton;
  