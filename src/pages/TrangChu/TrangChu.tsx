import { memo } from 'react'
import iconSearch from '../../assets/Iconly/Light/Search.svg'
import iconChat from '../../assets/HomePage/Iconly/Bold/Chat.svg'
import iconShare from '../../assets/HomePage/ri_share-fill.svg'
import iconWifi from '../../assets/Iconset/iOS-wlan-white.svg'
import Battery from '../../assets/Iconset/iOS-battery-white.svg'
import iconNetwork from '../../assets/Iconset/iOS-network-white.svg'
import iconLocation from '../../assets/Iconly/Bold/Location.svg'
import iconCoin from '../../assets/Iconset/coin.svg'
import dichvu from '../../assets/HomePage/Menu1.svg'
import chiNhanh from '../../assets/HomePage/Menu2.svg'
import Voucher from '../../assets/HomePage/Menu3.svg'
import NpXu from '../../assets/HomePage/Menu4.svg'
import Image from '../../assets/HomePage/Menu5.svg'
import danhGia from '../../assets/HomePage/Menu6.svg'
import ThongTin from '../../assets/HomePage/Menu7.svg'
import HoTro from '../../assets/HomePage/Menu8.svg'
import Sale1 from '../../assets/HomePage/sale1.svg'
import Sale2 from '../../assets/HomePage/sale2.svg'
import Sale3 from '../../assets/HomePage/sale3.svg'
import Star from '../../assets/HomePage/Iconly/Bold/star.svg'
import iconRight from '../../assets/HomePage/Iconly/Light/Arrow---Right-2.svg'
import calendarTick from '../../assets/HomePage/vuesax/linear/calendar-tick.svg'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import SetviceImg1 from '../../assets/HomePage/serviceImg.svg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { BiSolidHome, BiBell, BiCalendar, BiSolidUser } from 'react-icons/bi'
import 'react-tabs/style/react-tabs.css'
import '../../style/style.scss'

interface SliderSaleItem {
  bgImg: string
  name: string
  newPrice: string
  oldPrice: string
  bookings: string
  time: string
  tagSale: string
  distance: string
  evaluate: string
}

interface FeaturedProduct {
  img: string
  name: string
  price: string
  off: string
  bookings: string
  time: string
  distance: string
  evaluate: string
}

interface Category {
  title: string
  products: FeaturedProduct[]
}

interface FeaturedProducts {
  [key: string]: Category
}

const TrangChu = () => {
  const responsiveMenu = {
    superLarge: {
      breakpoint: { max: 3000, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  }
  const responsiveSale = {
    superLarge: {
      breakpoint: { max: 3000, min: 464 },
      items: 3.5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.3,
    },
  }
  const sliderMenuItems = [
    {
      bgImg: dichvu,
      name: 'Dịch vụ',
      path: '/',
    },
    {
      bgImg: chiNhanh,
      name: 'Chi nhánh',
      path: '/map',
    },
    {
      bgImg: Voucher,
      name: 'Voucher',
      path: '/Voucher',
    },
    {
      bgImg: NpXu,
      name: 'NP xu',
      path: '/kiem-xu',
    },
    {
      bgImg: Image,
      name: 'Hình ảnh',
    },
    {
      bgImg: danhGia,
      name: 'Đánh giá',
    },
    {
      bgImg: ThongTin,
      name: 'Thông tin',
    },
    {
      bgImg: HoTro,
      name: 'Hỗ trợ',
    },
  ]
  const sliderSaleItems: SliderSaleItem[] = [
    {
      bgImg: Sale1,
      name: 'Trang điểm cô dâu',
      newPrice: '1.250.000₫',
      oldPrice: '1.500.000₫',
      bookings: '1200',
      time: '20',
      tagSale: '-27%',
      distance: '2.0',
      evaluate: '4.5',
    },
    {
      bgImg: Sale2,
      name: 'Trang điểm cô dâu',
      newPrice: '1.250.000₫',
      oldPrice: '1.500.000₫',
      bookings: '1200',
      time: '20',
      tagSale: '-27%',
      distance: '2.0',
      evaluate: '4.5',
    },
    {
      bgImg: Sale3,
      name: 'Trang điểm cô dâu',
      newPrice: '1.250.000₫',
      oldPrice: '1.500.000₫',
      bookings: '1200',
      time: '20',
      tagSale: '-27%',
      distance: '2.0',
      evaluate: '4.5',
    },
    {
      bgImg: Sale2,
      name: 'Trang điểm cô dâu',
      newPrice: '1.250.000₫',
      oldPrice: '1.500.000₫',
      bookings: '1200',
      time: '20',
      tagSale: '-27%',
      distance: '2.0',
      evaluate: '4.5',
    },
  ]
  const featProducts: FeaturedProducts = {
    Service: {
      title: 'Dịch vụ nổi bật',
      products: [
        {
          img: SetviceImg1,
          name: 'Chăm sóc da cơ bản 90 phút',
          price: '250.000₫',
          off: '30k',
          bookings: '1200',
          time: '20',
          distance: '2.0',
          evaluate: '4.5',
        },
        {
          img: SetviceImg1,
          name: 'Chăm sóc da cơ bản 90 phút',
          price: '250.000₫',
          off: '30k',
          bookings: '1200',
          time: '20',
          distance: '2.0',
          evaluate: '4.5',
        },
        {
          img: SetviceImg1,
          name: 'Chăm sóc da cơ bản 90 phút',
          price: '250.000₫',
          off: '30k',
          bookings: '1200',
          time: '20',
          distance: '2.0',
          evaluate: '4.5',
        },
        {
          img: SetviceImg1,
          name: 'Chăm sóc da cơ bản 90 phút',
          price: '250.000₫',
          off: '30k',
          bookings: '1200',
          time: '20',
          distance: '2.0',
          evaluate: '4.5',
        },
        {
          img: SetviceImg1,
          name: 'Chăm sóc da cơ bản 90 phút',
          price: '250.000₫',
          off: '30k',
          bookings: '1200',
          time: '20',
          distance: '2.0',
          evaluate: '4.5',
        },
      ],
    },
    Handbook: {
      title: 'Cẩm nang',
      products: [],
    },
  }
  const renderFeaturedProducts = (data: FeaturedProducts) => {
    const tabList: JSX.Element[] = []
    const tabPanels: JSX.Element[] = []

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>)

      const tabPanel: JSX.Element[] = []
      data[key].products.forEach((item, j) => {
        tabPanel.push(
          <div className="container" key={j}>
            <div className="featured-item">
              <div className="row">
                <div className="featured-item-pic">
                  <img src={item.img} alt="" />
                </div>
                <div className="featured-item-text">
                  <h6 className="Name">{item.name}</h6>
                  <div className="price ">
                    <div className="row">
                      <div className="col-6 new">{item.price}</div>
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
              <div className="line"></div>
            </div>
          </div>,
        )
      })
      tabPanels.push(
        <TabPanel key={key}>
          <div className="row">{tabPanel}</div>
        </TabPanel>,
      )
    })
    return (
      <Tabs>
        <TabList>{tabList}</TabList>
        {tabPanels}
      </Tabs>
    )
  }

  return (
    <div id="HomePage">
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
        <div className="SearchHome-container">
          <div className="container">
            <div className="row">
              <div className="col-10 col-xs-8">
                <div className="searchHome">
                  <img src={iconSearch} alt="icon" />
                  <input type="text" placeholder="Tìm kiếm..." />
                </div>
              </div>
              <div className="col-1 col-xs-2 icon1">
                <div className="chat ">
                  <img src={iconChat} alt="icon" className="icon" />
                </div>
              </div>
              <div className="col-1 col-xs-2">
                <div className="chat">
                  <img src={iconShare} alt="icon" className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Location">
          <div className="container ">
            <div className="navLocation">
              <div className="row">
                <div className="col-6">
                  <p className="p">Xin chào, Minh Anh</p>
                  <div className="iconlocation">
                    <img src={iconLocation} alt="" />
                    <p>Q.Cầu giấy, TP.Hà Nội</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="line"></div>
                </div>
                <div className="col-4 navLeft">
                  <div className="iconCoin-border">
                    <div className="iconCoin">
                      <img src={iconCoin} alt="" />
                    </div>
                  </div>
                  <p>10 xu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clear"></div>
      <div className="container container-Menu-slider">
        <Carousel responsive={responsiveMenu} className="Menu-slider">
          {sliderMenuItems.map((item, key) => (
            <div key={key} className="Menu-slider-item">
              <a href={item.path}>
                <div className="Menu-slider-img">
                  <img src={item.bgImg} alt="" />
                </div>
                <p>{item.name}</p>
              </a>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="container-Sale-slider">
        <div className="container ">
          <div className="row">
            <div className="col-6">
              <h6>Đang giảm giá</h6>
            </div>
            <div className="col-6">
              <p>
                <a href="/Dang-giam-gia">Xem thêm</a>
              </p>
            </div>
          </div>
          <Carousel responsive={responsiveSale} className="Sale-slider">
            {sliderSaleItems.map((item, key) => (
              <div key={key} className="Sale-slider-item">
                <div className="Sale-slider-img">
                  <div className="tagSale">{item.tagSale}</div>
                  <img src={item.bgImg} alt="" />
                </div>
                <h6 className="Name">{item.name}</h6>
                <div className="price ">
                  <div className="row">
                    <div className="col-6 new">{item.newPrice}</div>
                    <div className="col-6 old">{item.oldPrice}</div>
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
            ))}
          </Carousel>
        </div>
      </div>
      <div className="container">
        <div className="Featured">{renderFeaturedProducts(featProducts)}</div>
      </div>
      <div className="container text-center">
        <button className="ButtonXT">
          Xem thêm
          <img src={iconRight} alt="" />
        </button>
      </div>
      <div className="banner-dgg-container"></div>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-3 ">
              <div className="icon-bottom">
                <a href="/">
                  <BiSolidHome className="icon" /> <p>Trang chủ</p>
                </a>
              </div>
            </div>
            <div className="col-3 ">
              <div className="icon-bottom">
                <a href="#">
                  <BiBell className="icon" /> <p>Thông báo</p>
                </a>
              </div>
            </div>
            <div className="col-3 ">
              <div className="icon-bottom">
                <a href="/lich-hen">
                  <BiCalendar className="icon" /> <p>Lịch hẹn</p>
                </a>
              </div>
            </div>
            <div className="col-3 ">
              <div className="icon-bottom">
                <a href="#">
                  <BiSolidUser className="icon" /> <p>User</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default memo(TrangChu)
