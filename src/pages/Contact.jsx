import React from "react";
import { Link } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { IoIosClock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import Logo from '../assets/Logo.svg';
import ss from "../assets/ss.png";
import { AiOutlineLaptop } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ minHeight: "100vh", width: "100%" }}
      >
        <div className="text-center mb-2 ">
          <h4
            className="varela-font fw-bold "
            style={{ color: "rgba(0,0,0,1)" }}
          >
            <img
              src={ogo}
              alt="logo"
              style={{ margin: "4px", width: "30px" }}
            />
            FamilyTime
          </h4>
        </div>
        {/* All content inside this bordered container */}
        <div
          className="border-1 p-5 rounded-5 "
          style={{
            width: "70%",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgba(234,234,234,1)",
          }}
        >
          <div className="row">
            <div className="col-md-12 px-0 ">
              <h5
                className="fw-bold Roboto-font text-start"
                style={{
                  color: "rgba( 0,0,0,1)",
                  marginTop: "10px",
                  paddingLeft: "14px",
                }}
              >
                Thank you For your Order!
              </h5>
              <p
                className="text-start"
                style={{
                  color: "rgba(4,4,21,0.8)",
                  fontFamily: "sans-serif",
                  marginTop: "10px",
                  paddingLeft: "14px",
                }}
              >
                Your order is currently processing. You will receive additional
                information via a separate email.
              </p>
            </div>
          </div>

          <div className="row">
            <div
              className="col-md-6 text-break text-start"
              style={{ width: "100%" }}
            >
              <a
                href="https://www.google.com/search?q=fastsspring&rlz=1C1GCEU_enPK1161PK1161&oq=fastsspring&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIPCAEQLhgKGMcBGNEDGIAEMgkIAhAAGAoYgAQyCQgDEAAYChiABDIJCAQQABgKGIAEMgkIBRAAGAoYgAQyCQgGEAAYChiABDIJCAcQABgKGIAEMgkICBAAGAoYgATSAQg4NzU2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
                className=""
              >
                href="https://www.google.com/search?q=fastsspring&rlz=1C1GCEU_enPK1161PK1161&oq=fastsspring&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIPCAEQLhgKGMcBGNEDGIAEMgkIAhAAGAoYgAQyCQgDEAAYChiABDIJCAQQABgKGIAEMgkIBRAAGAoYgAQyCQgGEAAYChiABDIJCAcQABgKGIAEMgkICBAAGAoYgATSAQg4NzU2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <p
                className="text-start"
                style={{
                  color: "rgba(4, 4, 21, 0.8)",
                  fontFamily: "sans-sarif",
                  marginTop: "10px",
                }}
              >
                <IoMdContact
                  className="me-1"
                  style={{ color: "rgba(21,108,247,1)" }}
                />
                <span style={{ color: "rgba(4, 4, 21, 0.8)" }}>
                  Lily Mocurdy
                </span>
              </p>
              <p className="text-start">
                <MdEmail
                  className="me-1"
                  style={{ color: "rgba(21,108,247,1)" }}
                />
                <span
                  style={{
                    color: "rgba(4, 4, 21, 0.8)",
                    fontFamily: "sans-serif",
                  }}
                >
                  lilymocurdy313@gmail.com
                </span>
              </p>
              <p className="text-start">
                <FaLocationDot
                  className="me-1"
                  style={{ color: "rgba(21,108,247,1)" }}
                />
                <span
                  style={{
                    color: "rgba(4, 4, 21, 0.8)",
                    fontFamily: "sans-serif",
                  }}
                >
                  215 Little Dog Dr, Montgomery, Texas 77356 United States
                </span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ">
              <h5
                className="roboto-font p-2 mb-0 "
                style={{
                  background: "rgba(232,240,254,1)",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "rgba(232,240,254,1)",
                  borderTopLeftRadius: "12px", // You can increase or decrease the value
                  borderTopRightRadius: "12px",
                }}
              >
                Order ID:{" "}
                <span className="roboto-font fw-bold">
                  FAM 240930-7153-63147
                </span>
              </h5>
            </div>
            <div className="col-md-12 ">
              <div
                className="px-5 gap-5 py-2 d-flex align-items-center"
                style={{ background: "rgba(243,248,255,1)" }}
              >
                <FaLaptop
                  className=""
                  style={{ color: "rgba(21,108,247,1)", fontSize: "20px" }}
                />

                <h5 className="roboto-font">
                  1. FamilyTime Premium 1 Device <br /> $29.00 Yearly
                </h5>
              </div>
            </div>

            <div>
              <h5
                className="roboto-font fw-bold p-2"
                style={{
                  background: "rgba(232,240,254,1)",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "rgba(232,240,254,1)",
                  borderBottomLeftRadius: "12px", // You can increase or decrease the value
                  borderBottomRightRadius: "12px",
                }}
              >
                Total: $0.00
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p
                className="text-start "
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "16px",
                  fontWeight: "40px",
                }}
              >
                Happy Parenting Day
              </p>
              <h5
                className="text-start mt-0"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "16px",
                  fontWeight: "40px",
                }}
              >
                Family Time Support
              </h5>
              <h6
                className="text-start"
                style={{
                  color: "rgba(21,108,247,1)",
                  fontSize: "16px",
                  fontWeight: "40px",
                }}
              >
                support@gmail.com
              </h6>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12 ">
            <FaFacebook
              className="me-2 fw-bold"
              style={{ color: "#1877F2", fontSize: "20px" }}
            />
            <FaInstagramSquare
              style={{ color: "#E1306C", fontSize: "20px", margin: "4px" }}
            />
            <FaXTwitter
              style={{ color: "", fontSize: "20px", margin: "4px" }}
            />
            <IoLogoYoutube
              style={{ color: "#FF0000", fontSize: "20px", margin: "4px" }}
            />
            <img src={ss} alt="ss" style={{ width: "22px", margin: "4px" }} />
          </div>
        </div>
        <div
          style={{
            borderBottom: "1px solid rgba(4,4,21,0.1)",
            margin: "10px auto 0 auto",
            width: "200px",
          }}
        ></div>
        <div className="row ">
          <div className="col-md-12">
            <p className="mt-3">2024 FamilyTime.</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12">
            <p className="mt-3">
              This email was sent to{" "}
              <a href="lilymocurdy313@gmail.com">lilymocurdy313@gmail.com</a>{" "}
              because your requested <br /> to receive updates and notifications
              about your FamilyTime account{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
