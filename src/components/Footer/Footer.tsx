import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

const Footer = () => {
  return (
    <div className="px-[30px] py-[4%] max-w-screen-xl mx-auto text-white">
      <div className="flex gap-[20px] mb-[40px]">
        <img src={youtube_icon} alt="YouTube" className="w-[30px] cursor-pointer" />
        <img src={twitter_icon} alt="Twitter" className="w-[30px] cursor-pointer" />
        <img src={instagram_icon} alt="Instagram" className="w-[30px] cursor-pointer" />
        <img src={facebook_icon} alt="Facebook" className="w-[30px] cursor-pointer" />
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-5 gap-y-2 text-sm mb-[15px]">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className="text-gray-400 text-[14px]">@ 1997-2025 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
