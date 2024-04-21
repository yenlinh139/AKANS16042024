import { memo } from "react";
import iconWifi from "../../assets/Iconset/iOS-wlan-white.svg";
import Battery from "../../assets/Iconset/iOS-battery-white.svg";
import iconNetwork from "../../assets/Iconset/iOS-network-white.svg";
import iconLeft from "../../assets/Arrow-Left.svg";
import iconShare from "../../assets/Blog/Share.svg";
import Img1 from "../../assets/Blog/img1.svg";
import Img2 from "../../assets/Blog/img2.svg";
import Img3 from "../../assets/Blog/img3.svg";
import Img4 from "../../assets/Blog/img4.svg";
import Img5 from "../../assets/Blog/img5.svg";
import Img6 from "../../assets/Blog/img6.svg";
import Img7 from "../../assets/Blog/img7.svg";

const BlogPage: React.FC = () => {
  const featBlog = [
    {
      img: Img2,
      title:
        "5 lời khuyên hàng đầu để có làn da khoẻ mạnh cho chị em phụ nữa 2024",
      path: "/cam-nam-lam-dep/chi-tiet",
      text: "Noel tuyệt vời đang đến kèm theo không khí lạnh, hanh khô. Từ đó làn da ít nhiều cũng chịu ảnh hưởng, chúng trở nên khô, ngứa, mẩn đỏ và kích ứng. Cùng La Foret Phương Châu tham khảo những lời khuyên dưới đây để duy trì độ ẩm mượt cho làn da ...",
    },
    {
      img: Img3,
      title:
        "5 lời khuyên hàng đầu để có làn da khoẻ mạnh cho chị em phụ nữa 2024",
      path: "/cam-nam-lam-dep/chi-tiet",
      text: "Noel tuyệt vời đang đến kèm theo không khí lạnh, hanh khô. Từ đó làn da ít nhiều cũng chịu ảnh hưởng, chúng trở nên khô, ngứa, mẩn đỏ và kích ứng. Cùng La Foret Phương Châu tham khảo những lời khuyên dưới đây để duy trì độ ẩm mượt cho làn da ...",
    },
    {
      img: Img4,
      title:
        "5 lời khuyên hàng đầu để có làn da khoẻ mạnh cho chị em phụ nữa 2024",
      path: "/cam-nam-lam-dep/chi-tiet",
      text: "Noel tuyệt vời đang đến kèm theo không khí lạnh, hanh khô. Từ đó làn da ít nhiều cũng chịu ảnh hưởng, chúng trở nên khô, ngứa, mẩn đỏ và kích ứng. Cùng La Foret Phương Châu tham khảo những lời khuyên dưới đây để duy trì độ ẩm mượt cho làn da ...",
    },
    {
      img: Img5,
      title:
        "5 lời khuyên hàng đầu để có làn da khoẻ mạnh cho chị em phụ nữa 2024",
      path: "/cam-nam-lam-dep/chi-tiet",
      text: "Noel tuyệt vời đang đến kèm theo không khí lạnh, hanh khô. Từ đó làn da ít nhiều cũng chịu ảnh hưởng, chúng trở nên khô, ngứa, mẩn đỏ và kích ứng. Cùng La Foret Phương Châu tham khảo những lời khuyên dưới đây để duy trì độ ẩm mượt cho làn da ...",
    },
    {
      img: Img6,
      title:
        "5 lời khuyên hàng đầu để có làn da khoẻ mạnh cho chị em phụ nữa 2024",
      path: "/cam-nam-lam-dep/chi-tiet",
      text: "Noel tuyệt vời đang đến kèm theo không khí lạnh, hanh khô. Từ đó làn da ít nhiều cũng chịu ảnh hưởng, chúng trở nên khô, ngứa, mẩn đỏ và kích ứng. Cùng La Foret Phương Châu tham khảo những lời khuyên dưới đây để duy trì độ ẩm mượt cho làn da ...",
    },
    {
      img: Img7,
      title:
        "5 lời khuyên hàng đầu để có làn da khoẻ mạnh cho chị em phụ nữa 2024",
      path: "/cam-nam-lam-dep/chi-tiet",
      text: "Noel tuyệt vời đang đến kèm theo không khí lạnh, hanh khô. Từ đó làn da ít nhiều cũng chịu ảnh hưởng, chúng trở nên khô, ngứa, mẩn đỏ và kích ứng. Cùng La Foret Phương Châu tham khảo những lời khuyên dưới đây để duy trì độ ẩm mượt cho làn da ...",
    },
  ];
  const maxLengthTitleBlog = 50;
  const maxLength = 150;
  const maxLengthBlogTop = 180;

  return (
    <>
      <div id="BlogPage">
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
              <h5>Cẩm nang làm đẹp</h5>
              <div className="iconRight">
                <a href="">
                  <img src={iconShare} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <a href="/cam-nam-lam-dep/chi-tiet">
            <div className="TopBlog">
              <img src={Img1} alt="" />
              <h6 className="titleBlog">
                5 lời khuyên hàng đầu để có làn da khoẻ mạnh cho chị em phụ nữa
                2024
              </h6>
              <p>
                {"Noel tuyệt vời đang đến kèm theo không khí lạnh, hanh khô. Từ đó làn da ít nhiều cũng chịu ảnh hưởng, chúng trở nên khô, ngứa, mẩn đỏ và kích ứng. Cùng La Foret Phương Châu tham khảo những lời khuyên dưới đây để duy trì độ ẩm mượt cho làn da ..."
                  .length > maxLengthBlogTop
                  ? "Noel tuyệt vời đang đến kèm theo không khí lạnh, hanh khô. Từ đó làn da ít nhiều cũng chịu ảnh hưởng, chúng trở nên khô, ngứa, mẩn đỏ và kích ứng. Cùng La Foret Phương Châu tham khảo những lời khuyên dưới đây để duy trì độ ẩm mượt cho làn da ...".substr(
                      0,
                      "Noel tuyệt vời đang đến kèm theo không khí lạnh, hanh khô. Từ đó làn da ít nhiều cũng chịu ảnh hưởng, chúng trở nên khô, ngứa, mẩn đỏ và kích ứng. Cùng La Foret Phương Châu tham khảo những lời khuyên dưới đây để duy trì độ ẩm mượt cho làn da ...".lastIndexOf(
                        " ",
                        maxLengthBlogTop
                      )
                    ) + "..."
                  : "Noel tuyệt vời đang đến kèm theo không khí lạnh, hanh khô. Từ đó làn da ít nhiều cũng chịu ảnh hưởng, chúng trở nên khô, ngứa, mẩn đỏ và kích ứng. Cùng La Foret Phương Châu tham khảo những lời khuyên dưới đây để duy trì độ ẩm mượt cho làn da ..."}
              </p>
            </div>
          </a>
          <div className="line"></div>
          {featBlog.map((item, key) => (
            <>
              <a href={item.path}>
                <div key={key} className="featBlog-Item">
                  <img src={item.img} alt="" />
                  <div className="featBlog-Content">
                    <h6 className="titleBlog">
                      {item.title.length > maxLengthTitleBlog
                        ? item.title.substr(
                            0,
                            item.title.lastIndexOf(" ", maxLengthTitleBlog)
                          ) + "..."
                        : item.title}
                    </h6>
                    <p>
                      {item.text.length > maxLength
                        ? item.text.substr(
                            0,
                            item.text.lastIndexOf(" ", maxLength)
                          ) + "..."
                        : item.text}
                    </p>
                  </div>
                </div>
              </a>
              <div className="line"></div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default memo(BlogPage);
