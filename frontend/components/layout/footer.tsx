import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-gray-800 text-white"
      style={{ backgroundImage: "url('/ft-bg.png')", backgroundSize: "cover" }}
    >
      {/* Footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/kflv.jpg"
                  alt=""
                  width={192}
                  height={32}
                  className="object-contain"
                />
              </Link>
            </div>
            <h2 className="text-lg font-bold leading-snug mb-2">
              KING FREIGHT <br /> LOGISTICS VIETNAM
            </h2>
            <p className="mb-4">
              King Freight Logistics Vietnam belongs to King Freight
              International Corp.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/King.Freight.Vietnam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://kflv.vn/wp-content/uploads/2024/05/Facebook.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/king-freight-logistics-vietnam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://kflv.vn/wp-content/uploads/2024/05/Group-73.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">CONTACT INFO</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Image
                  src="https://kflv.vn/wp-content/uploads/2024/05/InterfaceIcon.png"
                  alt=""
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span>
                  Units C3.08 – C3.09 – C3.10 – C3.11, 3rd Floor, Tower C,
                  Mixed-use Commercial and Residential Complex on Lot 1-13,
                  Functional Area No. 1 – No. 15 Tran Bach Dang Street, An Khanh
                  Ward, Ho Chi Minh City, Vietnam.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Image
                  src="https://kflv.vn/wp-content/uploads/2024/05/Layer-2.png"
                  alt=""
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <Link href="tel:+84-28-39260606">
                  Phone number: +84-28-39260606
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Image
                  src="https://kflv.vn/wp-content/uploads/2024/05/Layer-2.png"
                  alt=""
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <Link href="tel:0938188796">Hotline/Zalo: 093 8188796</Link>
              </li>
              <li className="flex items-center space-x-2">
                <Image
                  src="https://kflv.vn/wp-content/uploads/2024/05/Printer.png"
                  alt=""
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span>Fax: +84-28-39260505</span>
              </li>
              <li className="flex items-center space-x-2">
                <Image
                  src="https://kflv.vn/wp-content/uploads/2024/05/Layer-2-1.png"
                  alt=""
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <Link href="mailto:cs1@hcm.kfkingfreight.com">
                  Email: cs1@hcm.kfkingfreight.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/ocean-freight/">Ocean Freight</Link>
              </li>
              <li>
                <Link href="/services/air-freight/">Air Freight</Link>
              </li>
              <li>
                <Link href="/services/land-transport/">
                  Land Transportation
                </Link>
              </li>
              <li>
                <Link href="/services/supports">Support Services</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} King Freight Logistics Vietnam. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
