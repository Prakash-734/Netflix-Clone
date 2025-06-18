import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home bg-black text-white">
      <Navbar />
      <div className="relative">
        <img
          src={hero_banner}
          alt="Hero Banner"
          className="w-full object-cover mask-gradient"
        />
        <div className="absolute bottom-0 w-full pl-[6%] sm:pl-[4%]">
          <img
  src={hero_title}
  alt="Hero Title"
  className="hidden md:block w-[90%] max-w-[420px] mb-[30px] md:w-[40%] md:mb-[10px]"
/>

         <p className="hidden md:block max-w-[700px] mb-[20px] text-white text-lg lg:text-xl xl:text-2xl">
  Discovering his ties to a secret ancient order, a younger man living in modern Istanbul embarks on a quest to save the city from an enemy.
</p>


<div className="flex gap-2 mb-[50px] sm:mb-[30px]">
  <button className="flex items-center gap-2 px-5 py-2 font-semibold text-black bg-white rounded hover:bg-white/75 transition text-xs sm:px-[10px] sm:py-[4px] sm:gap-[5px]">
    <img src={play_icon} alt="Play" className="w-[28px] sm:w-[24px] md:w-[30px]" />
    Play
  </button>
  <button className="flex items-center gap-2 px-5 py-2 font-semibold text-white bg-[#6d6d6eb3] rounded hover:bg-[#6d6d6e66] transition text-xs sm:px-[10px] sm:py-[4px] sm:gap-[5px]">
    <img src={info_icon} alt="More Info" className="w-[28px] sm:w-[24px] md:w-[30px]" />
    More Info
  </button>
</div>

          <div className="hidden lg:block">
            <TitleCards />
          </div>
        </div>
      </div>
      <div className="px-[6%] sm:px-[4%]">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top pics for you"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
