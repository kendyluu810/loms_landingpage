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
              <a href="https://kflv.vn/en/">
                <img
                  src="https://kflv.vn/wp-content/uploads/2024/05/logo.jpg"
                  alt="King Freight Logistics Vietnam CO., LTD."
                  className="w-48"
                />
              </a>
            </div>
            <h2 className="text-lg font-bold leading-snug mb-2">
              KING FREIGHT <br /> LOGISTICS VIETNAM
            </h2>
            <p className="mb-4">
              King Freight Logistics Vietnam belongs to King Freight
              International Corp.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/King.Freight.Vietnam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://kflv.vn/wp-content/uploads/2024/05/Facebook.png"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/king-freight-logistics-vietnam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://kflv.vn/wp-content/uploads/2024/05/Group-73.png"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">CONTACT INFO</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <img
                  src="https://kflv.vn/wp-content/uploads/2024/05/InterfaceIcon.png"
                  alt=""
                  className="w-5 h-5"
                />
                <span>
                  Units C3.08 – C3.09 – C3.10 – C3.11, 3rd Floor, Tower C,
                  Mixed-use Commercial and Residential Complex on Lot 1-13,
                  Functional Area No. 1 – No. 15 Tran Bach Dang Street, An Khanh
                  Ward, Ho Chi Minh City, Vietnam.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <img
                  src="https://kflv.vn/wp-content/uploads/2024/05/Layer-2.png"
                  alt=""
                  className="w-5 h-5"
                />
                <a href="tel:+84-28-39260606">Phone number: +84-28-39260606</a>
              </li>
              <li className="flex items-center space-x-2">
                <img
                  src="https://kflv.vn/wp-content/uploads/2024/05/Layer-2.png"
                  alt=""
                  className="w-5 h-5"
                />
                <a href="tel:0938188796">Hotline/Zalo: 093 8188796</a>
              </li>
              <li className="flex items-center space-x-2">
                <img
                  src="https://kflv.vn/wp-content/uploads/2024/05/Printer.png"
                  alt=""
                  className="w-5 h-5"
                />
                <span>Fax: +84-28-39260505</span>
              </li>
              <li className="flex items-center space-x-2">
                <img
                  src="https://kflv.vn/wp-content/uploads/2024/05/Layer-2-1.png"
                  alt=""
                  className="w-5 h-5"
                />
                <a href="mailto:cs1@hcm.kfkingfreight.com">
                  Email: cs1@hcm.kfkingfreight.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://kflv.vn/en/dich-vu/ocean-freight/">
                  Ocean Freight
                </a>
              </li>
              <li>
                <a href="https://kflv.vn/en/dich-vu/air-freight/">
                  Air Freight
                </a>
              </li>
              <li>
                <a href="https://kflv.vn/en/dich-vu/land-transportation/">
                  Land Transportation
                </a>
              </li>
              <li>
                <a href="https://kflv.vn/en/danh-sach-dich-vu/">
                  Support Services
                </a>
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
