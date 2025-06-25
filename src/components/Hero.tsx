import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="flex flex-col text-5xl md:text-7xl font-bold space-y-4">
          <h1>
            <span className="bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              SK
            </span>{" "}
            Playground
          </h1>

          <h2>
            with{" "}
            <span className="bg-gradient-to-r from-[#FFDD55] via-[#FFBB33] to-[#FF8800] text-transparent bg-clip-text">
              Vite
            </span>{" "}
            +{" "}
            <span className="bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>
          </h2>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          A personalized page designed to simplify complex and time-consuming tasks by consolidating all necessary data in one place.
        </p>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
