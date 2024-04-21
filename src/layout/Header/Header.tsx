import '../../style/style.scss';
import iconWifi from '../../assets/Iconset/iOS-wlan-black.svg';
import Battery from '../../assets/Iconset/iOS-battery-black.svg';
import iconNetwork from '../../assets/Iconset/iOS-network-black.svg';
import { memo } from 'react';

const Header: React.FC = () => {
  return (
    <div id="Header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="TopLeft">
              <p>9:41</p>
            </div>
          </div>
          <div className="col-6">
            <div className="TopRight">
              <div className="iconRight">
                <img src={iconNetwork} alt="" className="h-100" />
              </div>
              <div className="iconRight">
                <img src={iconWifi} alt="" className="h-100" />
              </div>

              <div className="iconRight">
                <img src={Battery} alt="icon" className="h-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
