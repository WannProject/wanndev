// next image
import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-100 w-[200px] xl:w-[400px] opacity-50">
      <Image src="/image-top.png" width={400} height={400} alt="" />
    </div>
  );
};

export default TopLeftImg;
