import { Card, Col, Menu, Row } from "antd";
import "./style.scss";
import anh1 from "../../assets/anh1.png";
import { CalendarOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import rentalService from "../../common/api/rentalService";
import { useParams } from "react-router-dom";

const RentalDetailPage: React.FC = () => {
  interface Rental {
    carResponse: CarResponse;
    rentalId: number;
    rentalDate: string;
    rentalReturn: string;
    totalCost: number;
    image: string;
  }

  interface CarResponse {
    make: string;
    model: string;
    address: string;
    year: number;
    name: string;
    cost: number;
  }

  const { id }: any = useParams();
  const [rental, setRental] = useState<Rental>({} as Rental);

  const fetchRentalDetail = async () => {
    try {
      const { data } = await rentalService.getRentalById(id);
      setRental(data);
    } catch (err) {
      console.error("Error fetching rentals:", err);
    }
  };

  useEffect(() => {
    fetchRentalDetail();
  }, [id]);

  // const rentals: Rental[] = [
  //   {
  //     rentalId: 1,
  //     carName: "VINFAST VF6 PLUS 2023",
  //     rentalDate: "13-6-2024",
  //     rentalReturn: "14-6-2024",
  //     totalCost: 1100000,
  //     image: anh1,
  //     carResponse: {
  //       name: "VINFAST VF6 PLUS 2023",
  //       cost: 1100000,
  //       address: "Quan Dong Da, Ha Noi",
  //     },
  //   },
  // ];

  return (
    <div>
      <div className="rental-detail">
        <Row>
          <Col span={14}>
            <Card bordered={false}>
              <div className="detail-1">
                <div className="img-container">
                  <img src={anh1} alt="" />
                </div>
                <div className="info">
                  <h2>
                    {rental.carResponse?.make} {rental.carResponse?.model}{" "}
                    {rental.carResponse?.year}
                  </h2>
                  <h3>{rental.carResponse?.address}</h3>
                </div>
              </div>

              <hr className="content_nav-hr" />

              <div className="content-section">
                <p className="content-section-title">Thời gian thuê xe</p>
                <div className="rental-time-info">
                  <div>
                    <CalendarOutlined />
                    <span>Bắt đầu thuê xe</span>
                    <p>{rental.rentalDate}</p>
                  </div>
                  <div>
                    <CalendarOutlined />
                    <span>Kết thúc thuê xe</span>
                    <p>{rental.rentalReturn}</p>
                  </div>
                </div>
              </div>

              <hr className="content_nav-hr" />

              <div className="content-section">
                <p className="content-section-title">Giấy tờ thuê xe</p>
                <div className="collateral-des">
                  <span>Chọn 1 trong 2 hình thức</span>
                  <p className="collateral-item first">
                    1. GPLX (đối chiếu) & CCCD (đối chiếu VNeID)
                  </p>
                  <p className="collateral-item">
                    2. GPLX (đối chiếu) & Passport (giữ lại){" "}
                  </p>
                </div>
                <p className="content-section-title">Tài sản thế chấp</p>
                <div className="collateral-des">
                  <p>
                    15 triệu (tiền mặt/chuyển khoản cho chủ xe khi nhận xe) hoặc
                    Xe máy (kèm cà vẹt gốc) giá trị 15 triệu
                  </p>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <div className="rental-content-right">
                <div className="item-info-right">
                  <p className="item-info-right-title">Chủ xe</p>
                  <div>
                    <p className="item-info-1">Nguyễn Văn Tài</p>
                  </div>

                  <br />

                  <p className="item-info-right-title">Địa chỉ giao nhận xe</p>
                  <p className="item-info-1">{rental.carResponse?.address}</p>

                  <hr className="content_nav-hr" />

                  <p className="item-info-right-title">Bảng tính giá thuê</p>
                  <div className="item-info-row">
                    <p className="item-info-1">Đơn giá thuê</p>
                    <p className="item-info-1">
                      {rental.carResponse?.cost} đ/ ngày
                    </p>
                  </div>

                  <div className="item-info-row">
                    <p className="item-info-1">Tổng cộng</p>
                    <p className="item-info-1">{rental.carResponse?.cost} đ</p>
                  </div>

                  <hr className="content_nav-hr" />
                </div>
              </div>
            </Card>

            <br />

            <Card bordered={true}>
              <div className="rental-content-right">
                <div className="item-info-right">
                  <p className="surcharges">Phụ phí phát sinh</p>
                  <div className="container-surcharges">
                    <div className="item-surcharges">
                      <img src="/images/information.png" alt="" />
                      <div>
                        <p>Phí vượt giới hạn</p>
                        <span>
                          Phụ phí phát sinh nếu lộ trình di chuyển vượt quá
                          350km khi thuê xe 1 ngày
                        </span>
                      </div>
                      <p className="price">5 000đ/km</p>
                    </div>
                    <div className="item-surcharges">
                      <img src="/images/information.png" alt="" />
                      <div>
                        <p>Phí quá giờ</p>
                        <span>
                          Phụ phí phát sinh nếu hoàn trả xe trễ giờ. Trường hợp
                          trễ quá 5 tiếng, phụ phí thêm 1 ngày thuê
                        </span>
                      </div>
                      <p className="price">100 000đ/h</p>
                    </div>
                    <div className="item-surcharges">
                      <img src="/images/information.png" alt="" />
                      <div>
                        <p>Phí vệ sinh</p>
                        <span>
                          Phụ phí phát sinh khi xe hoàn trả không đảm bảo vệ
                          sinh (nhiều vết bẩn, bùn cát, sình lầy...)
                        </span>
                      </div>
                      <p className="price">100 000đ</p>
                    </div>
                    <div className="item-surcharges">
                      <img src="/images/information.png" alt="" />
                      <div>
                        <p>Phí khử mùi</p>
                        <span>
                          Phụ phí phát sinh khi xe hoàn trả bị ám mùi khó chịu
                          (mùi thuốc lá, thực phẩm nặng mùi...)
                        </span>
                      </div>
                      <p className="price">350 000đ</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RentalDetailPage;
