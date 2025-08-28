import HomeCarousel from "./_components/HomeCarousel";
import FeaturesSection from "./_components/HomeFeatures";
import HomeNavbar from "./_components/HomeNavbar";
import HomeTechnologies from "./_components/HomeTecnologies";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <nav className="w-full flex h-fit">
        <HomeNavbar />
      </nav>
      <HomeCarousel />
      <FeaturesSection/>
      <HomeTechnologies />
    </div>
  );
}
