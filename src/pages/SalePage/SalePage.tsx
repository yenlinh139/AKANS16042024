import { memo } from 'react'
import iconWifi from '../../assets/Iconset/iOS-wlan-white.svg'
import Battery from '../../assets/Iconset/iOS-battery-white.svg'
import iconNetwork from '../../assets/Iconset/iOS-network-white.svg'
import iconLeft from '../../assets/Arrow-Left.svg'
import SetviceImg1 from '../../assets/HomePage/serviceImg.svg'
import calendarTick from '../../assets/vuesax/linear/calendar-tick.svg'
import Star from '../../assets/Iconly/Bold/star.svg'

const SalePage = () => {
  const featProducts = [
    {
      img: SetviceImg1,
      name: 'Gội đầu massage...',
      price: '250.000₫',
      off: '30k',
      bookings: '1200',
      time: '20',
      distance: '2.0',
      evaluate: '4.5',
      tagSale: '-27%',
    },
    {
      img: SetviceImg1,
      name: 'Gội đầu massage...',
      price: '250.000₫',
      off: '30k',
      bookings: '1200',
      time: '20',
      distance: '2.0',
      evaluate: '4.5',
      tagSale: '-27%',
    },
    {
      img: SetviceImg1,
      name: 'Gội đầu massage...',
      price: '250.000₫',
      off: '30k',
      bookings: '1200',
      time: '20',
      distance: '2.0',
      evaluate: '4.5',
      tagSale: '-27%',
    },
    {
      img: SetviceImg1,
      name: 'Gội đầu massage...',
      price: '250.000₫',
      off: '30k',
      bookings: '1200',
      time: '20',
      distance: '2.0',
      evaluate: '4.5',
      tagSale: '-27%',
    },
    {
      img: SetviceImg1,
      name: 'Gội đầu massage...',
      price: '250.000₫',
      off: '30k',
      bookings: '1200',
      time: '20',
      distance: '2.0',
      evaluate: '4.5',
      tagSale: '-27%',
    },
  ]
  return (
    <>
      <div id="SalePage">
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
              <h5>Đang giảm giá</h5>
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <div className="container">
          <div className="SanPhamDGG">
            {featProducts.map((item, key) => (
              <div key={key} className="SanPhamDGG-Item">
                <div className="d-flex">
                  <div className="featured-item-pic">
                    <div className="tagSale">{item.tagSale}</div>
                    <div className="img">
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                  <div className="featured-item-text">
                    <h6 className="Name">{item.name}</h6>
                    <div className="price ">
                      <div className="row">
                        <div className="col-5 new">{item.price}</div>
                        <div className="off">Giảm {item.off}</div>
                      </div>
                    </div>
                    <div className="bookings">
                      <img src={calendarTick} alt="" />
                      <p>{item.bookings} lượt đặt</p>
                    </div>
                    <div className="info">
                      <div className="row">
                        <div className="col-4 start">{item.time} phút</div>
                        <div className="col-4  center">{item.distance}Km</div>
                        <div className="col-4 end">
                          <img src={Star} alt="icon" /> {item.evaluate}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default memo(SalePage)
