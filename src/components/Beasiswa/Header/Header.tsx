import BeasiswaHeaderMobile from "../../../../public/images/BeasiswaHeaderMobile.png";
import BeasiswaHeaderDesktop from "../../../../public/images/BeasiswaHeaderDesktop.png";
import HeaderImage from "@/components/HeaderImage/HeaderImage";

const BeasiswaHeader: React.FC = () => {
  return (
    <div>
      <HeaderImage
        src={BeasiswaHeaderMobile}
        alt="Laboratorium Header Mobile"
        additionalClasses="h-[279px] block md:hidden"
      >
        <div className="font-bold text-[29px] space-y-2">
          <p>
            Beasiswa <br />
            Fakultas Ilmu Komputer
          </p>
          <p className="font-bold text-[18px] text-left">UPN Veteran Jakarta</p>
        </div>
      </HeaderImage>
      <HeaderImage
        src={BeasiswaHeaderDesktop}
        alt="Laboratorium Header Desktop"
        additionalClasses="h-[550px] hidden md:block"
      >
        <div className="absolute inset-0 flex flex-col justify-center items-end text-white text-right md:px-6 lg:px-10 xl:px-14">
          <div className="w-full md:w-auto md:flex md:flex-col md:items-end">
            <div className="font-bold text-[29px] md:text-[60px] space-y-2 text-left md:pr-16">
              <p>
                Beasiswa <br />
                Fakultas Ilmu Komputer
              </p>
              <p className="font-bold text-[18px] text-left">
                UPN Veteran Jakarta
              </p>
            </div>
          </div>
        </div>
      </HeaderImage>
    </div>
  );
};

export default BeasiswaHeader;
