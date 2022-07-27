import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center bg-black text-center text-slate-200 px-5 py-2 md:flex-row">
      <div className="flex items-center gap-5">
        <a href="https://linkedin.com/in/adeyemostephen" target="_blank">
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a
          href="https://www.facebook.com/adeyemo.oladunjoyestephen"
          target="_blank"
        >
          <FaFacebook className="w-5 h-5" />
        </a>
        <a href="https://mobile.twitter.com/Baistevoo" target="_blank">
          <FaTwitter className="w-5 h-5" />
        </a>
        <a href="https://github.com/stivex001" target="_blank">
          <FaGithub className="w-5 h-5" />
        </a>
      </div>
      <p className="text-sm mt-2 md:mt-0">
        &copy; 2022 bai :: All right reserved
      </p>
    </footer>
  );
};

export default Footer;
