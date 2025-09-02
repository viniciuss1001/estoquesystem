import HomeCarousel from "@/app/_components/HomeCarousel";
import FeaturesSection from "@/app/_components/HomeFeatures";
import HomeNavbar from "@/app/_components/HomeNavbar";
import HomeTechnologies from "@/app/_components/HomeTecnologies";

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
