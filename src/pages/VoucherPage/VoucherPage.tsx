import { memo } from "react";
import iconWifi from "../../assets/Iconset/iOS-wlan-white.svg";
import Battery from "../../assets/Iconset/iOS-battery-white.svg";
import iconNetwork from "../../assets/Iconset/iOS-network-white.svg";
import iconLeft from "../../assets/Arrow-Left.svg";
import VoucherSan from "../../assets/Voucher/VoucherSan.svg";
import VoucherKhac from "../../assets/Voucher/VoucherKhac.svg";
import iconVoucherStore from "../../assets/Voucher/VoucherStore.svg";
import iconVoucherAluza from "../../assets/Voucher/VoucherAluza.svg";
import Img1 from "../../assets/Voucher/img1.svg";

const VoucherPage: React.FC = () => {
  const VoucherAluza = [
    {
      img: iconVoucherAluza,
      name: "Giảm 50% trang điểm cô dâu",
      HSD: "24-4-2023",
    },
    {
      img: iconVoucherAluza,
      name: "Giảm 50% trang điểm cô dâu",
      HSD: "24-4-2023",
    },
  ];
  const VoucherStore = [
    {
      img: Img1,
      store: "Nhi Phúc Store",
      name: "Giảm 50% trang điểm cô dâu",
      HSD: "24-4-2023",
    },
    {
      img: Img1,
      store: "Nhi Phúc Store",
      name: "Giảm 50% trang điểm cô dâu",
      HSD: "24-4-2023",
    },
    {
      img: Img1,
      store: "Nhi Phúc Store",
      name: "Giảm 50% trang điểm cô dâu",
      HSD: "24-4-2023",
    },
    {
      img: Img1,
      store: "Nhi Phúc Store",
      name: "Giảm 50% trang điểm cô dâu",
      HSD: "24-4-2023",
    },
  ];

  return (
    <>
      <div id="VoucherPage">
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

              <h5>Mã giảm giá</h5>
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4 ">
              <div className="width ">
                <img src={VoucherSan} alt="" />
                <p>
                  Voucher <br /> sàn
                </p>
              </div>
            </div>
            <div className="col-4 ">
              <div className="width ">
                <img src={iconVoucherStore} alt="" />
                <p>
                  Voucher <br /> cửa hàng
                </p>
              </div>
            </div>

            <div className="col-4 ">
              <div className="width ">
                <img src={VoucherKhac} alt="" />
                <p>
                  Voucher <br /> khác
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="VoucherDetail">
            <div className="VoucherAluza">
              <h5>Voucher Aluza</h5>
              {VoucherAluza.map((item, key) => (
                <div key={key} className="VoucherAluza-Item">
                  <div className="logo">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="content">
                    <h6>{item.name}</h6>
                    <div className="row">
                      <div className="col-7">
                        <p>HSD: {item.HSD}</p>
                      </div>
                      <div className="col-5">
                        <a href="#" className="buttonNN">
                          Nhận ngay
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="VoucherStore">
              <h5>Voucher cửa hàng</h5>
              {VoucherStore.map((item, key) => (
                <div key={key} className="VoucherStore-Item">
                  <div className="img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="content">
                    <p>{item.store}</p>
                    <h6>{item.name}</h6>
                    <div className="row">
                      <div className="col-7">
                        <p>HSD: {item.HSD}</p>
                      </div>
                      <div className="col-5">
                        <a href="#" className="buttonNN">
                          Nhận ngay
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(VoucherPage);
