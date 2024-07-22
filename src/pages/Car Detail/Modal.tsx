// Modal.tsx
import React, { useEffect, useState } from "react";
import "./Modal.scss";
import { useParams } from "react-router-dom";
import carService from "../../common/api/carService";
import { toast } from "react-toastify";

interface Car {
  carId: number;
  licensePlate: string;
  cost: number;
  createDate: string;
  address: string;
  make: string;
  model: string;
  seat: number;
  year: number;
  transmission: string;
  fuel: string;
  bluetooth: boolean;
  map: boolean;
  tireSensor: boolean;
  collisionSensor: boolean;
  speedWarning: boolean;
  truckCover: boolean;
  camera360: boolean;
  sideCamera: boolean;
  dashCamera: boolean;
  rearCamera: boolean;
  gps: boolean;
  childSeat: boolean;
  usb: boolean;
  spareTire: boolean;
  dvdScreen: boolean;
  etc: boolean;
  airbags: boolean;
  status: string;
  description: string;
  imageDTOS: ImageDTOS[];
}

interface ImageDTOS {
  carImagePath: string;
}

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  const { id } = useParams();
  const [car, setCar] = useState<Car>({} as Car);

  const getCarDetail = async () => {
    if (id) {
      try {
        const { data } = await carService.getCarById(Number(id));
        setCar(data);
      } catch (err) {
        toast.error("Error fetching rentals:");
      }
    }
  };

  useEffect(() => {
    getCarDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  //   const imagesShow = car.imageDTOS?.slice(1, 4) ?? [];

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Xác nhận đặt xe</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
          >
            <circle cx="19.5" cy="19.5" r="19" fill="white" stroke="#ACACAC" />
          </svg>
          <p className="close-button" onClick={onClose}>
            X
          </p>
        </div>
        <div className="modal-body">
          <div className="car-info">
            <div className="car-image">
              src=
              {`${window.location.origin}/newImages/${
                car?.imageDTOS && car.imageDTOS.length > 0
                  ? car.imageDTOS[0].carImagePath
                  : ""
              }`}
            </div>
            <div className="car-details">
              <h3>
                {car.make} {car.model}
              </h3>
            </div>
          </div>
          <div className="rental-info">
            <div className="rental-time">
              <p className="title-detail">Thời gian thuê xe</p>
              <div className="rental-time-detail">
                <div className="rental-left">
                  <p className="rental-title">Bắt đầu thuê xe</p>
                  <p className="time-detail">21:00 - 13/06/2024</p>
                </div>
                <div className="rental-right">
                  <p className="rental-title">Kết thúc thuê xe</p>
                  <p className="time-detail">21:00 - 14/06/2024</p>
                </div>
              </div>
            </div>
            <div className="pickup-info">
              <p className="title-detail">Địa điểm nhận xe</p>
              <div>
                <p className="addres">{car.address}</p>
                <p className="des">{car.description}</p>
                <p className="des-detail">
                  Vivuvxe sẽ gửi chi tiết liên hệ của chủ xe sau khi khách hàng
                  hoàn tất bước thanh toán trên ứng dụng.
                </p>
              </div>
            </div>
            <div className="pricing-info">
              <p className="title-detail">Bảng tính giá</p>
              <table>
                <tbody>
                  <tr>
                    <td className="title-detail-3">Đơn giá thuê</td>
                    <td className="title-detail-3">{car.cost}đ/ngày</td>
                  </tr>
                  <tr>
                    <td className="title-detail-3 hr">Số ngày thuê</td>
                    <td className="title-detail-3 hr">1 ngày</td>
                  </tr>
                  <tr>
                    <td className="title-detail-2 hr unhr">Tổng cộng</td>
                    <td className="title-detail-2 hr unhr">1 100 000đ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="cancel-button" onClick={onClose}>
            <p>Hủy</p>
          </div>
          <div className="confirm-button">
            <p>Gửi yêu cầu thuê xe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
