import Image from "next/image";
import BreadcrumbMenu from "../BreadcrumbMenu";

export default function HeaderBreadcrums() {
  return (
    <div className="relative w-full h-[540px]">
      <Image
        src="/cargo_ship.jpg"
        alt="Cargo Ship"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute flex flex-col p-4 px-72 mt-52">
        <BreadcrumbMenu />
      </div>
    </div>
  );
}
