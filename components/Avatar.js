import Image from "next/image";

const Avatar = () => {
  return (
    <div className="relative w-[250px] h-[250px] xl:w-[600px] xl:h-[600px]">
      {" "}
      {/* Menyesuaikan ukuran gambar */}
      <Image
        src="/avatar.png"
        layout="fill" // Menggunakan layout fill untuk mengisi kontainer div
        objectFit="cover" // Menyesuaikan gambar agar sesuai dengan kontainer
        alt="Avatar Image"
      />
    </div>
  );
};

export default Avatar;
