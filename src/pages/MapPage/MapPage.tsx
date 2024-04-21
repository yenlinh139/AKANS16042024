import { memo, useState } from "react";
import iconWifi from "../../assets/Iconset/iOS-wlan-white.svg";
import Battery from "../../assets/Iconset/iOS-battery-white.svg";
import iconNetwork from "../../assets/Iconset/iOS-network-white.svg";
import iconLeft from "../../assets/Arrow-Left.svg";
import iconSearch from "../../assets/vuesax/linear/search-normal.svg";
import Img1 from "../../assets/MapPage/image1.svg";
import Img2 from "../../assets/MapPage/image2.svg";
import iconMess from "../../assets/vuesax/linear/message.svg";
import Star from "../../assets/HomePage/Iconly/Bold/star.svg";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapPage = () => {
  const chiNhanhList = [
    {
      img: Img1,
      name: "Nhi Phúc Store",
      address: "Phường Mai Dịch - Q.Cầu Giấy - Hà Nội",
      comment: "15",
      evaluate: "5.0",
    },
    {
      img: Img2,
      name: "Nhi Phúc Store",
      address: "Phường Mai Dịch - Q.Cầu Giấy - Hà Nội",
      comment: "15",
      evaluate: "5.0",
    },
    {
      img: Img1,
      name: "Nhi Phúc Store",
      address: "Phường Mai Dịch - Q.Cầu Giấy - Hà Nội",
      comment: "15",
      evaluate: "5.0",
    },
    {
      img: Img2,
      name: "Nhi Phúc Store",
      address: "Phường Mai Dịch - Q.Cầu Giấy - Hà Nội",
      comment: "15",
      evaluate: "5.0",
    },
    {
      img: Img1,
      name: "Nhi Phúc Store",
      address: "Phường Mai Dịch - Q.Cầu Giấy - Hà Nội",
      comment: "15",
      evaluate: "5.0",
    },
  ];
  const [isHidden, setIsHidden] = useState(false);
  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const defaultCenter = {
    lat: 10.770169510969314,
    lng: 106.71189894992447,
  };
  return (
    <>
      <div id="Title">
        <div className="BannerTop">
          <div className="bgTop"></div>
          <div className="TopHome">
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
        </div>
        <div className="container">
          <div className="title">
            <div className="iconLeft">
              <a href="/">
                <img src={iconLeft} alt="" />
              </a>
            </div>
            <h5>Cửa hàng gần bạn</h5>
          </div>
        </div>
        <div className="clear"></div>
      </div>
      <div id="Map">
        <div className="container">
          <div className="searchHome">
            <img src={iconSearch} alt="icon" />
            <input type="text" placeholder="Tìm kiếm cửa hàng..." />
          </div>
        </div>
        <div className="ggMap">
          <LoadScript googleMapsApiKey="AIzaSyD3mMEVc3GDFu2wkDRn40nOZWtaVpEEe40">
            <GoogleMap
              mapContainerClassName="google-map"
              zoom={17}
              center={defaultCenter}
            >
              {/* Child components, markers, etc. */}
            </GoogleMap>
          </LoadScript>
          <div className="clear"></div>
        </div>

        <div
          className="bottomCN"
          style={{ height: isHidden ? "20px" : "300px" }}
        >
          <div className="button">
            <button onClick={toggleVisibility}></button>
          </div>
          <div className={`chiNhanh ${isHidden ? "hidden" : ""}`}>
            <div className="container">
              {chiNhanhList.map((item, key) => (
                <>
                  <div key={key} className="Menu-slider-item">
                    <div className="Menu-slider-img">
                      <div className="img">
                        <img src={item.img} alt="" />
                      </div>
                    </div>
                    <div className="Menu-slider-content">
                      <h6>{item.name}</h6>
                      <p>{item.address}</p>
                      <div className="comment">
                        <div className="row">
                          <div className="col-7 d-flex">
                            <div className="d-flex">
                              <img src={iconMess} alt="" />
                              {item.comment}
                            </div>
                            <div className="star ">
                              <img src={Star} alt="" />
                              {item.evaluate}
                            </div>
                          </div>
                          <div className="col-5">
                            <button>Chỉ đường</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="line"></div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="banner-dgg-container"></div>
    </>
  );
};
export default memo(MapPage);
