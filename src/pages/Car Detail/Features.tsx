import React from "react";
import "./Features.scss";
import { Car } from "../carRegister";

interface Feature {
  icon: string;
  title: string;
  id: keyof Car;
}

const features: Feature[] = [
  { icon: "/images/map-icon.png", title: "Bản đồ", id: "map" },
  { icon: "/images/gps-icon.png", title: "Định vị GPS", id: "gps" },
  { icon: "/images/airbag-icon.png", title: "Túi khí an toàn", id: "airbags" },
  { icon: "/images/bluetooth-icon.png", title: "Bluetooth", id: "bluetooth" },
  { icon: "/images/usb-icon.png", title: "Khe cắm USB", id: "usb" },
  {
    icon: "/images/spare-tire-icon.png",
    title: "Lốp dự phòng",
    id: "spareTire",
  },
  { icon: "/images/camera360-icon.png", title: "Camera 360", id: "camera360" },
  {
    icon: "/images/dashcam-icon.png",
    title: "Camera hành trình",
    id: "dashCamera",
  },
  { icon: "/images/etc-icon.png", title: "ETC", id: "etc" },
];

const Features = ({ car }: { car: Car }) => {
  return (
    <div className="features">
      {features.map(
        (feature, index) =>
          car[feature.id] && (
            <div className="feature" key={index}>
              <img
                src={feature.icon}
                alt={feature.title}
                className="feature-icon"
              />
              <p className="feature-title">{feature.title}</p>
            </div>
          )
      )}
    </div>
  );
};

export default Features;
