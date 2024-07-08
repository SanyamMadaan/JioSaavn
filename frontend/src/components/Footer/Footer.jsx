import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="ml-2  tertiary_bg px-8 py-16 mb-20">
      <div className="grid grid-cols-12 ">
        <div className="col-span-3 text-sm">
          <ul>
            <li className="text-black font-bold mb-4">Company</li>
            <li className="text-black my-2 hover:text-white hover:underline cursor-pointer">About</li>
            <li className=" text-black my-2">Jobs</li>
            <li className=" text-black my-2">For the Record</li>
          </ul>
        </div>
        <div className="col-span-3 text-black">
          <ul>
            <li className="font-bold">Communities</li>
            <li className=" my-2">For Artists</li>
            <li className=" my-2">Developers</li>
            <li className=" my-2">Advertising</li>
            <li className=" my-2">Investors</li>
            <li className=" my-2">Vendors</li>
          </ul>
        </div>
        <div className="col-span-3">
          <ul>
            <li className=" text-black font-bold">Useful links</li>
            <li className="text-black my-2">Support</li>
            <li className="text-black my-2">Free Mobile App</li>
          </ul>
        </div>
        <div className="col-span-3">
          <div className="flex justify-end gap-2">
            <FaFacebook className="text-4xl p-2 rounded-full bg-[#292929] shadow-2xl hover:bg-white/10" />
            <FaInstagram className="text-4xl p-2 rounded-full bg-[#292929] shadow-2xl hover:bg-white/10" />
            <FaTwitter className="text-4xl p-2 rounded-full bg-[#292929] shadow-2xl hover:bg-white/10" />
          </div>
        </div>
      </div>
      <div className="border-b border-white/10 my-8 w-full"></div>
      <div className="flex justify-between">
        <ul className="text-sm flex gap-4">
          <li className=" text-black">Legal</li>
          <li className="text-black">Privacy Center</li>
          <li className="text-black">Privacy Policy</li>
          <li className="text-black">Cookies</li>
          <li className="text-black">About Ads</li>
          <li className="text-black">Accessibility</li>
        </ul>
        <h4 className="text-black text-sm">© 2024 JioSaavn AB</h4>
      </div>
    </div>
  );
};

export default Footer;
