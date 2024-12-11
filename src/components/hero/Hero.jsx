import { Button } from "../ui/button";

const imgs = [
  { src: "/client-databiz.svg", alt: "databiz-logo" },
  { src: "client-audiophile.svg", alt: "audiophile-logo" },
  { src: "client-meet.svg", alt: "meet-logo" },
  { src: "client-maker.svg", alt: "maker-logo" },
];

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center text-almostBlack justify-end md:justify-between h-[calc(100vh-61.6px)] md:h-[calc(100vh-68px)] lg:w-[85%] mx-auto md:gap-10">
      {/* text section */}
      <div className="flex flex-col items-center justify-start md:justify-between gap-10 pt-5 px-4 md:px-0 flex-1 h-[500px]">
        <div className="flex flex-col items-center md:items-start gap-7 md:gap-10 w-full">
          <div className="flex flex-col gap-3 md:gap-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              Make <br className="max-md:hidden" /> remote work
            </h1>
            <p className="text-almostGray font-semibold md:font-medium text-lg md:text-sm xl:text-lg">
              Get your team in sync, no mater your <br className="md:hidden" />{" "}
              location. <br className="max-lg:hidden" /> streamline processes,
              create <br className="md:hidden" /> team rituals, and{" "}
              <br className="max-lg:hidden" /> watch productivity soar.
            </p>
          </div>

          <Button className="rounded-xl bg-almostBlack text-almostWhite p-5">
            Learn more
          </Button>
        </div>

        <div className="w-full flex items-center justify-between">
          {imgs.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="w-16 md:w-[4.5rem] lg:w-24"
            />
          ))}
        </div>
      </div>

      {/* img section in mobile */}
      <div className="md:hidden flex items-center justify-center h-[calc(50vh-61.6px)]">
        <img
          src="/image-hero-mobile.png"
          alt="hero-img"
          className="object-cover object-center max-h-full"
        />
      </div>

      {/* img section in desktop */}
      <div className="hidden md:flex items-center justify-end h-[500px] flex-1">
        <img
          src="/image-hero-desktop.png"
          alt="hero-img"
          className="object-cover object-center h-[calc(100vh-200px)]"
        />
      </div>
    </div>
  );
};

export default Hero;
