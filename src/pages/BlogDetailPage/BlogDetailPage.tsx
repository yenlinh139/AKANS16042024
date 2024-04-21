import { memo } from "react";
import iconWifi from "../../assets/Iconset/iOS-wlan-white.svg";
import Battery from "../../assets/Iconset/iOS-battery-white.svg";
import iconNetwork from "../../assets/Iconset/iOS-network-white.svg";
import iconLeft from "../../assets/Arrow-Left.svg";
import iconShare from "../../assets/Blog/Share.svg";
import iconShow from "../../assets/Blog/Iconly/Light/Show.svg";
import iconCalendar from "../../assets/Blog/Iconly/Light-Outline/Calendar.svg";
import Img from "../../assets/Blog/img2.svg";

const BlogDetailPage = () => {
  return (
    <>
      <div id="BlogDetailPage">
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
              <div className="iconRight">
                <a href="">
                  <img src={iconShare} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <div className="container">
          <div className="Header">
            <h6>
              5 lời khuyên hàng đầu để có làn da khoẻ mạnh cho chị em phụ nữa
              2024
            </h6>
            <ul>
              <li>
                <img src={iconCalendar} alt="" />
              </li>
              <li>02-08-2023</li>
              <li>|</li>
              <li>
                <img src={iconShow} alt="" />
              </li>
              <li>450 lượt xem</li>
            </ul>
          </div>
          <p>
            Da của bạn có dễ mẩn đỏ, bỏng rát hoặc bong tróc không? <br /> Bạn
            có thường bị nổi mề đay và dễ kích ứng với một số sản phẩm nhất định
            không? <br />
            Có lẽ bạn là một trong hàng triệu phụ nữ có làn da nhạy cảm. Vậy thì
            bài viết dưới đây là dành bạn, cùng xem nhé!
          </p>
          <div className="img">
            <img src={Img} alt="" />
          </div>
        </div>
        <div className="container">
          <p>
            1. Chọn kem dưỡng da có độ ẩm caoThời tiết hanh khô là đặc trưng của
            mùa đông, vậy nên da cũng vì thế mà chịu nhiều tác động khiến bản
            thân nhanh bị khô và nứt nẻ. Khi đó bạn sẽ cần đến một loại kem
            dưỡng có độ ẩm cao, giúp làn da tươi mới, mịn màng, căng mọng. Sản
            phẩm dưỡng ẩm tốt và phù hợp nhất cho mùa lạnh chính là những dòng
            kem dưỡng có hàm lượng glycerin - dưỡng chất có khả năng dưỡng ẩm
            rất cao và hiệu quả ngay cả khi thời tiết khắc nghiệt nhất, và
            dimethicone - một thành phần có công dụng tăng khả năng hấp thụ và
            giữ ẩm của tế bào da. <br /> 2. Mặt nạ dưỡng ẩm Không phải dùng
            thường xuyên như kem dưỡng da; tuy nhiên, sử dụng mặt nạ sẽ giúp cân
            bằng độ ẩm, cung cấp dưỡng chất cực tốt và nhanh cho da. Trong vào
            mùa lạnh này, với những loại mặt nạ có chiết xuất từ bơ hoặc hạnh
            nhân, hoa cúc trắng chính là lựa chọn phù hợp cho bạn. <br /> 3.
            Không được bỏ qua kem chống nắng. Mặc dù nắng đông không gay gắt và
            khó chịu như nắng hè nhưng nó vẫn đem lại nhiều tác động tiêu cực
            cho làm da của bạn. Chính vì vậy, bạn vẫn cần dùng kem chống nắng
            hàng ngày trước khi trang điểm hay ra ngoài. Kem chống nắng không
            chỉ có tác dụng ngăn tia cực tím xâm nhập vào da mà còn ngăn ngừa
            được sự mất nước, sạm đen và các nếp nhăn có thể xuất hiện.
            <br /> 4. Lựa chọn dầu/ sữa rửa mặt phù hợpNếu như trong mùa nóng,
            dầu/ sữa rửa mặt dạng kem hay gel có thể phát huy tối đa công dụng
            làm sạch da thì với mùa lạnh hanh khô, bạn sẽ cần đến những dòng sản
            phẩm làm sạch chứa thành phần dưỡng ẩm cao.5. Bắt đầu tẩy da chết
            với công thức hóa học phù hợpThay vì chọn một sản phẩm tẩy da chết
            bình thường như mọi lần, bạn hãy ưu tiên đến các dòng kem với thành
            phần là sự kết hợp của các chất hóa học như alpha và beta hydroxy
            axit vừa làm sạch tế bào chết vừa se khít lỗ chân lông, giúp làn da
            luôn mịn màng và rạng rỡ.Chúc bạn sẽ luôn rạng rỡ và tươi trẻ dù
            trong tiết trời se lạnh, hanh khô này nhé
          </p>
        </div>
      </div>
    </>
  );
};
export default memo(BlogDetailPage);
