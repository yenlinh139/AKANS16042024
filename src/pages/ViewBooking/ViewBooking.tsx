import { memo } from "react";
import iconWifi from "../../assets/Iconset/iOS-wlan-white.svg";
import Battery from "../../assets/Iconset/iOS-battery-white.svg";
import iconNetwork from "../../assets/Iconset/iOS-network-white.svg";
import iconLeft from "../../assets/Arrow-Left.svg";
import iconChat from "../../assets/LichHen/chat.svg";
import "react-multi-carousel/lib/styles.css";

const ViewBooking = () => {
  return (
    <>
      <div id="ViewBooking">
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
                <a href="/lich-hen">
                  <img src={iconLeft} alt="" />
                </a>
              </div>
              <h5>Chi tiết lịch đặt</h5>
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <div className="container">
          <div className="header">
            <button>Đang chờ nhận</button>
            <p>Cửa hàng sẽ liên hệ lại với bạn để xác nhận dịch vụ.</p>
          </div>
        </div>
        <div className="container">
          <div className="infoLichHen">
            <div className="TimeHen">
              <h6 className="title">Minh Vân Makeup</h6>
              <p>Phường Mai Dịch - Q. Cầu Giấy, TP.Hà Nội</p>
              <div className="row">
                <div className="col-5">
                  <p>Thời gian</p>
                </div>
                <div className="col-7">16:00 19-05-2023</div>
                <div className="col-5">
                  <p>Số chỗ</p>
                </div>
                <div className="col-7">01</div>
              </div>
            </div>
            <div className="line"></div>
            <div className="dichVu">
              <h6 className="title">Dịch vụ</h6>
              <div className="row">
                <div className="col-5">
                  <p>Trang điểm cô dâu</p>
                </div>
                <div className="col-7">01</div>
                <div className="col-5">
                  <p>Trang điểm chụp hình</p>
                </div>
                <div className="col-7">01</div>
              </div>
            </div>
            <div className="line"></div>
            <div className="khachHang">
              <h6 className="title">Khách hàng</h6>
              <p>
                Tên khách hàng: <span>Thuanp</span>
              </p>
              <p>
                Điện thoại: <span>0923123123</span>
              </p>
            </div>
            <div className="line"></div>
            <div className="TotalCost">
              <div className="row">
                <div className="col-5">
                  <h6 className="title">Tổng tiền</h6>
                </div>
                <div className="col-7 cost">450.000 đ</div>
              </div>
              <p>Thanh toán qua ví MoMo</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="HuyDL">
            <button>Huỷ đặt lịch</button>
          </div>
        </div>
        <div className="chat">
          <img src={iconChat} alt="" />
        </div>
      </div>
    </>
  );
};
export default memo(ViewBooking);
