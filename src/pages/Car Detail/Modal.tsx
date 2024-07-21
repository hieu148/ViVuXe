// Modal.tsx
import React from 'react';
import './Modal.scss';

interface ModalProps {
    show: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Xác nhận đặt xe</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                        <circle cx="19.5" cy="19.5" r="19" fill="white" stroke="#ACACAC" />
                    </svg>
                    <p className="close-button" onClick={onClose}>X</p>
                </div>
                <div className="modal-body">
                    <div className="car-info">
                        <div className='car-image'>
                            <img src="/images/anh1.png" alt="Car" />
                        </div>
                        <div className="car-details">
                            <h3>HUYNDAI SANTAFE 2018</h3>
                            <p className='address'> Quận 10, TP. Hồ Chí Minh</p>
                        </div>
                    </div>
                    <div className="rental-info">
                        <div className="rental-time">
                            <p className='title-detail'>Thời gian thuê xe</p>
                            <div className='rental-time-detail'>
                                <div className='rental-left'>
                                    <p className='rental-title'>Bắt đầu thuê xe</p>
                                    <p className='time-detail'>21:00 - 13/06/2024</p>
                                </div>
                                <div className='rental-right'>
                                    <p className='rental-title'>Kết thúc thuê xe</p>
                                    <p className='time-detail'>21:00 - 14/06/2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="pickup-info">
                            <p className='title-detail'>Địa chỉ giao nhận xe</p>
                            <div><p className='addres'>Quận 10, TP. Hồ Chí Minh</p>
                                <p className='des'>Địa chỉ cụ thể sẽ được hiển thị sau khi đặt cọc.</p>
                                <p className='des-detail'>Vivuvxe sẽ gửi chi tiết liên hệ của chủ xe sau khi khách hàng hoàn tất bước thanh toán trên ứng dụng.</p></div>
                        </div>
                        <div className="pricing-info">
                            <p className='title-detail'>Bảng tính giá</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className='title-detail-3'>Đơn giá thuê</td>
                                        <td className='title-detail-3'>1 100 000đ/ngày</td>
                                    </tr>
                                    <tr >
                                        <td className='title-detail-3 hr'>Số ngày thuê</td>
                                        <td className='title-detail-3 hr'>1 ngày</td>
                                    </tr>
                                    <tr>
                                        <td className='title-detail-2 hr unhr'>Tổng cộng</td>
                                        <td className='title-detail-2 hr unhr'>1 100 000đ</td>
                                    </tr>
                                    <tr>
                                        <td className='title-detail-2 unhr'>Đặt cọc qua ứng dụng</td>
                                        <td className='title-detail-2 unhr'>300 000đ</td>
                                    </tr>
                                    <tr>
                                        <td className='title-detail-2'>Thanh toán khi nhận xe</td>
                                        <td className='title-detail-2'>800 000đ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="cancel-button" onClick={onClose}><p>Hủy</p></div>
                    <div className="confirm-button"><p>Gửi yêu cầu thuê xe</p></div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
