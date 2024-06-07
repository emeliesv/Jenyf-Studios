/* Footer containing adress and contact, links and faq */
import logo from "../Assets/logo_large.png";
import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.png";
import pinterest from "../Assets/pinterest.png";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mx-10 py-8">
      <img
        src={logo}
        alt="jenyf studios logo"
        className="h-3 object-fit mb-4 md:mb-0"
      />
      <div>© 2024 Jenyf-Studios</div>
      <div className="flex items-center space-x-4 mt-4 md:mb-0">
        <img
          src={facebook}
          alt="facebook icon"
          className="w-auto h-6 object-fit"
        />
        <img
          src={instagram}
          alt="instagram icon"
          className="w-auto h-6 object-fit"
        />
        <img
          src={pinterest}
          alt="pinterest icon"
          className="w-auto h-6 object-fit"
        />
      </div>
    </div>
  );
};

export default Footer;
