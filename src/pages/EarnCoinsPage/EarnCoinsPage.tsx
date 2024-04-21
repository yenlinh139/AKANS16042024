import { memo, useState } from "react";
import iconWifi from "../../assets/Iconset/iOS-wlan-white.svg";
import Battery from "../../assets/Iconset/iOS-battery-white.svg";
import iconNetwork from "../../assets/Iconset/iOS-network-white.svg";
import iconLeft from "../../assets/Arrow-Left.svg";
import iconXu from "../../assets/Xu/icn_coinGu.svg";
import Carousel from "react-multi-carousel";
import NpXu from "../../assets/HomePage/Menu4.svg";
import "react-multi-carousel/lib/styles.css";
import NV2 from "../../assets/Xu/Group.svg";
import NV3 from "../../assets/Xu/img_mission (1).svg";
import NV4 from "../../assets/Xu/img_mission (2).svg";
import NV5 from "../../assets/Xu/img_mission (3).svg";
import NV1 from "../../assets/Xu/img_mission.svg";

interface SliderItem {
  soXu: number;
  date: string;
}

const EarnCoinsPage = () => {
  const responsiveDiemDanh = {
    mobile: {
      breakpoint: { max: 3000, min: 0 },
      items: 7,
    },
  };
  const sliderDiemdanh: SliderItem[] = [
    {
      soXu: 100,
      date: "Hôm nay",
    },
    {
      soXu: 100,
      date: "Ngày 2",
    },
    {
      soXu: 100,
      date: "Ngày 3",
    },
    {
      soXu: 100,
      date: "Ngày 4",
    },
    {
      soXu: 100,
      date: "Ngày 5",
    },
    {
      soXu: 100,
      date: "Ngày 6",
    },
    {
      soXu: 100,
      date: "Ngày 7",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const nhiemVuList = [
    {
      img: NV1,
      name: "Chia sẻ trên facebook cá nhân",
      detail: "Làm đẹp với MyGuu nào!",
      coin: "2.000",
      NV: "0/1",
    },
    {
      img: NV2,
      name: "Hoàn thành 3 đơn hàng",
      detail: "Làm đẹp với MyGuu nào!",
      coin: "10.000",
      NV: "0/5",
    },
    {
      img: NV3,
      name: "Theo dõi 5  cửa hàng",
      detail: "Làm đẹp với MyGuu nào!",
      coin: "1.000",
      NV: "0/5",
    },
    {
      img: NV4,
      name: "Đánh giá sau khi dùng dịch vụ",
      detail: "Làm đẹp với MyGuu nào!",
      coin: "10.000",
      NV: "0/5",
    },
    {
      img: NV5,
      name: "Giới thiệu cho bạn bè",
      detail: "Làm đẹp với MyGuu nào!",
      coin: "10.000",
      NV: "0/5",
    },
  ];

  return (
    <>
      <div id="EarnCoinsPage">
        <div id="Title">
          <div className="BannerTop">
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
              <h5>
                1.500 <img src={iconXu} alt="" />
              </h5>
            </div>
          </div>
          <div className="clear"></div>
        </div>

        <div className="BannerHeader">
          <div className="diemDanh">
            <div className="container">
              <div className="ngay">
                <Carousel
                  responsive={responsiveDiemDanh}
                  className="NpXu-slider"
                >
                  {sliderDiemdanh.map((item, index) => (
                    <div
                      key={index}
                      className={`Menu-slider-item ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => handleItemClick(index)}
                    >
                      <div className="NpXu">
                        <img src={NpXu} alt="" />
                        <h6>{item.soXu}</h6>
                      </div>
                      <p>{item.date}</p>
                    </div>
                  ))}
                </Carousel>
                <button>Điểm danh nhận ngay 100 Gu</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="nhiemVu-container">
            <h5>Nhiệm vụ</h5>
            <div className="nhiemVuItem">
              <div className="container">
                {nhiemVuList.map((item, key) => (
                  <>
                    <div key={key} className="nhiemVu">
                      <div className="nhiemVu-img">
                        <div className="img">
                          <img src={item.img} alt="" />
                        </div>
                      </div>
                      <div className="nhiemVu-content">
                        <div className="buttonContainer">
                          <h6>{item.name}</h6>
                          <div className="button">
                            <button>Nhận</button>
                          </div>
                        </div>
                        <p>{item.detail}</p>
                        <div className="row">
                          <div className="col-6">
                            <img src={NpXu} alt="" /> {item.coin}
                          </div>
                          <div className="col-5 NV">{item.NV}</div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(EarnCoinsPage);
