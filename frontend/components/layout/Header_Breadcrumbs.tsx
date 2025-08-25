import Image from "next/image";
import BreadcrumbMenu from "../BreadcrumbMenu";

export default function HeaderBreadcrums() {
  return (
    <div className="relative w-screen h-[300px] sm:h-[400px] md:h-[620px] lg:h-[860px]">
      <Image
        src="/cargo_ship.jpg"
        alt="Cargo Ship"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="mt-20 sm:mt-32 md:mt-40 lg:mt-52">
            <BreadcrumbMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
