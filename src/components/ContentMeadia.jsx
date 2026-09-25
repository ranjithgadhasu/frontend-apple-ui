import React from "react";

import sos from "../assets/Images/sos.png";
import camera from "../assets/Images/camera.png";
import frontcam from "../assets/Images/frontcam.png";
import action from "../assets/Images/run.png";
import battery from "../assets/Images/batrry.png";
import chip from "../assets/Images/Achip.png";
import faceid from "../assets/Images/faceimg.png";
import touchid from "../assets/Images/fingurimg.png";
import network5g from "../assets/Images/gen.png";

const phones = [
  {
    sos: "Emergency SOS via satellite",
    sos2: "Emergency SOS",
    crash: "Crash Detection",
    cameraTitle: "Pro camera system",
    camera: "48MP Main | Ultra Wide | Telephoto",
    front1: "Photonic Engine for incredible detail and color",
    front2: "Autofocus on TrueDepth front camera",
    action: "Action mode smooths out shaky handheld videos",
    battery: "Up to 29 hours video playback",
    chip: "A16 Bionic chip",
    security: "Face ID",
    network: "Superfast 5G cellular",
    touch: false,
  },
  {
    sos: "Emergency SOS via satellite",
    sos2: "Emergency SOS",
    crash: "Crash Detection",
    cameraTitle: "Advanced dual-camera system",
    camera: "12MP Main | Ultra Wide",
    front1: "Photonic Engine for incredible detail and color",
    front2: "Autofocus on TrueDepth front camera",
    action: "Action mode smooths out shaky handheld videos",
    battery: "Up to 26 hours video playback",
    chip: "A15 Bionic chip with 5-core GPU",
    security: "Face ID",
    network: "Superfast 5G cellular",
    touch: false,
  },
  {
    sos: "Emergency SOS",
    sos2: "-",
    crash: "-",
    cameraTitle: "Dual-camera system",
    camera: "12MP Wide | Ultra Wide",
    front1: "-",
    front2: "TrueDepth front camera",
    action: "-",
    battery: "Up to 19 hours video playback",
    chip: "A15 Bionic chip with 4-core GPU",
    security: "Face ID",
    network: "Superfast 5G cellular",
    touch: false,
  },
  {
    sos: "Emergency SOS",
    sos2: "-",
    crash: "-",
    cameraTitle: "Advanced camera system",
    camera: "12MP Main",
    front1: "-",
    front2: "Front camera",
    action: "-",
    battery: "Up to 15 hours video playback",
    chip: "A15 Bionic chip with 4-core GPU",
    security: "Touch ID",
    network: "5G cellular",
    touch: true,
  },
];

const ContentMeadia = () => {
  return (
    <section className="bg-[#ffff] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {phones.map((phone, index) => (
            <div key={index} className="flex flex-col text-center">
              {/* SOS */}
              <div className="h-[120px] flex flex-col items-center">
                <img src={sos} alt="" className="w-9 h-9 mb-3" />
                <p className="text-[14px] leading-4">{phone.sos2}</p>
                <p className="text-[14px] leading-4 mt-1">{phone.sos}</p>
                <p className="text-[14px] leading-4 mt-1">{phone.crash}</p>
              </div>

              {/* Camera */}
              {/* Camera */}
              {/* Camera */}
              <div className="h-[180px] mt-8 flex flex-col items-center text-center px-1">
                <img
                  src={index === 3 ? frontcam : camera}
                  alt=""
                  className="w-9 h-9 mb-3 object-contain"
                />

                {/* Title */}
                <h4 className="text-[13px] font-medium text-[#1D1D1F] whitespace-nowrap">
                  {phone.cameraTitle}
                </h4>

                {/* Camera Spec */}
                <p className="text-[14px] text-[#6E6E73] leading-4 mt-1">
                  {index === 0 && (
                    <>
                      48MP Main | Ultra Wide
                      <br />
                      Telephoto
                    </>
                  )}

                  {(index === 1 || index === 2) && <>12MP Main | Ultra Wide</>}

                  {index === 3 && <>12MP Main</>}
                </p>

                {/* 14 Pro */}
                {index === 0 && (
                  <>
                    <p className="text-[14px] text-[#6E6E73] leading-4 mt-2">
                      Photonic Engine for incredible
                      <br />
                      detail and color
                    </p>

                    <p className="text-[14px] text-[#6E6E73] leading-4 mt-1">
                      Autofocus on TrueDepth
                      <br />
                      front camera
                    </p>
                  </>
                )}

                {/* 14 */}
                {index === 1 && (
                  <>
                    <p className="text-[14px] text-[#6E6E73] mt-2">—</p>

                    <p className="text-[14px] text-[#6E6E73] leading-4 mt-1">
                      Photonic Engine for incredible
                      <br />
                      detail and color
                    </p>

                    <p className="text-[14px] text-[#6E6E73] leading-4 mt-1">
                      Autofocus on TrueDepth
                      <br />
                      front camera
                    </p>
                  </>
                )}

                {/* 13 */}
                {index === 2 && (
                  <>
                    <p className="text-[14px] font-Regular text-[#6E6E73] mt-2">
                      —
                    </p>
                    <p className="text-[14px] font-Regular text-[#6E6E73] mt-1">
                      —
                    </p>

                    <p className="text-[14px] font-Regular text-[#6E6E73] leading-4 mt-2">
                      TrueDepth front camera
                    </p>
                  </>
                )}

                {/* SE */}
                {index === 3 && (
                  <>
                    <p className="text-[14px] text-[#6E6E73] mt-2">—</p>
                    <p className="text-[14px] text-[#6E6E73] mt-1">—</p>

                    <p className="text-[14px] text-[#6E6E73] leading-4 mt-2">
                      Front camera
                    </p>
                  </>
                )}
              </div>

              {/* Action */}
              {/* Action Mode */}
              <div className="h-[95px] mt-8 flex flex-col items-center justify-start text-center">
                {index < 2 ? (
                  <>
                    <img
                      src={action}
                      alt="Action Mode"
                      className="w-9 h-9 mb-3 object-contain"
                    />
                    <p className="text-[11px] leading-4 text-[#1D1D1F] px-2">
                      Action mode smooths out shaky
                      <br />
                      handheld videos
                    </p>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-[18px] text-[#1D1D1F]">—</span>
                  </div>
                )}
              </div>

      
              {/* Battery */}
              <div className="h-[78px] mt-8 flex flex-col items-center text-center">
                <img
                  src={battery}
                  alt="Battery"
                  className="w-9 h-9 mb-2 object-contain"
                />

                <p className="text-[14px] leading-4 text-[#1D1D1F]">
                  {index === 0 && (
                    <>
                      Up to 29 hours
                      <br />
                      video playback
                    </>
                  )}

                  {index === 1 && (
                    <>
                      Up to 26 hours
                      <br />
                      video playback
                    </>
                  )}

                  {index === 2 && (
                    <>
                      Up to 19 hours
                      <br />
                      video playback
                    </>
                  )}

                  {index === 3 && (
                    <>
                      Up to 15 hours
                      <br />
                      video playback
                    </>
                  )}
                </p>
              </div>

         {/* Chip */}
<div className="h-[82px] mt-8 flex flex-col items-center text-center">
  <img
    src={chip}
    alt="Chip"
    className="w-9 h-9 mb-2 object-contain"
  />

  <p className="text-[14px] leading-4 text-[#1D1D1F]">
    {index === 0 && (
      <>A16 Bionic chip</>
    )}

    {index === 1 && (
      <>
        A15 Bionic chip
        <br />
        with 5-core GPU
      </>
    )}

    {(index === 2 || index === 3) && (
      <>
        A15 Bionic chip
        <br />
        with 4-core GPU
      </>
    )}
  </p>
</div>

              {/* Face ID / Touch ID */}
              <div className="h-[78px] mt-8 flex flex-col items-center">
                <img
                  src={phone.touch ? touchid : faceid}
                  alt=""
                  className="w-9 h-9 mb-2"
                />
                <p className="text-[14px]">{phone.security}</p>
              </div>

              {/* Network */}
              <div className="h-[78px] mt-8 flex flex-col items-center">
                <img src={network5g} alt="" className="w-9 h-9 mb-2" />
                <p className="text-[14px]">{phone.network}</p>
              </div>

              <hr className="mt-8 border-[#D2D2D7]" />
            </div>
          ))}
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-12">
          <button className="text-[#0066CC] text-[20px] hover:underline">
            Compare all iPhone models
          </button>

          <button className="text-[#0066CC] text-[20px] hover:underline">
            Shop iPhone
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentMeadia;
