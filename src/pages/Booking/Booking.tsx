import React, { memo, useState } from 'react'
import iconWifi from '../../assets/Iconset/iOS-wlan-white.svg'
import Battery from '../../assets/Iconset/iOS-battery-white.svg'
import iconNetwork from '../../assets/Iconset/iOS-network-white.svg'
import iconChat from '../../assets/Iconly/Light/Chat.svg'
import iconHome from '../../assets/Iconly/Light/Home.svg'
import iconNotification from '../../assets/Iconly/Light/Notification.svg'
import iconProfile from '../../assets/Iconly/Light/Profile.svg'
import iconCalendar from '../../assets/Iconly/Bold/Calendar.svg'
import Img1 from '../../assets/LichHen/Img1.svg'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import 'react-tabs/style/react-tabs.css'
import '../../style/style.scss'

const Booking: React.FC = () => {
  const responsiveMenu = {
    superLarge: {
      breakpoint: { max: 3000, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3.5,
    },
  }
  const responsiveMenuBottom = {
    superLarge: {
      breakpoint: { max: 3000, min: 0 },
      items: 5,
    },
  }
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  const sliderMenuItems = [
    {
      name: 'Lịch hẹn',
      path: '',
    },
    {
      name: 'Sắp tới',
      path: '',
    },
    {
      name: 'Đã hoàn thành',
      path: '',
    },
    {
      name: 'Đã hủy',
      path: '',
    },
  ]

  return (
    <div id="Booking">
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
            <h5>Lịch hẹn</h5>
          </div>
        </div>
        <div className="clear"></div>
      </div>
      <div className="BannerHeader">
        <div className="menulichHen">
          <div className="container">
            <Carousel responsive={responsiveMenu} className="lichHen-slider">
              {sliderMenuItems.map((item, index) => (
                <div
                  key={index}
                  className={`lichHen-slider-item ${
                    activeIndex === index ? 'active' : ''
                  }`}
                  onClick={() => handleItemClick(index)}
                >
                  <a href={item.path}>{item.name}</a>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="calendar-container"></div>
      </div>
      <div className="lichHen">
        <div className="container">
          <h5>Lịch hẹn của tôi</h5>
          <div className="row">
            <div className="col-7">20/02/2023 - 10:00 Sáng</div>
            <div className="col-5">
              <button>
                <a href="/lich-hen/xem-lai-lich-hen">Đang chờ nhận</a>
              </button>
            </div>
          </div>

          <div className="line"></div>

          <div className="infoLichHen">
            <div className="img">
              <img src={Img1} alt="" />
            </div>
            <div className="content">
              <h6>Nhi Phúc Store</h6>
              <p>Đặt 1 chỗ</p>
              <p>Dịch vụ: Trang điểm cá nhân</p>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-dgg-container"></div>
      <div className="Footer">
        <div className="container">
          <Carousel responsive={responsiveMenuBottom}>
            <div className="icon-bottom">
              <a href="/">
                <div className="img">
                  {' '}
                  <img src={iconHome} alt="" />{' '}
                </div>
                <p>Trang chủ</p>
              </a>
            </div>

            <div className="icon-bottom">
              <a href="#">
                <div className="img">
                  <img src={iconNotification} alt="" />{' '}
                </div>
                <p>Thông báo</p>
              </a>
            </div>

            <div className="icon-bottom">
              <a href="#">
                <div className="img2">
                  <img src={iconCalendar} alt="" />
                </div>
                <p>Lịch hẹn</p>
              </a>
            </div>

            <div className="icon-bottom">
              <a href="#">
                <div className="img">
                  <img src={iconChat} alt="" />{' '}
                </div>
                <p>Tin nhắn </p>
              </a>
            </div>

            <div className="icon-bottom">
              <a href="#">
                <div className="img">
                  <img src={iconProfile} alt="" />{' '}
                </div>
                <p>User</p>
              </a>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
export default memo(Booking)
