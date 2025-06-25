
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/*
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Card Title</CardTitle>
            <CardDescription>@Card Description</CardDescription>
          </div>
        </CardHeader>

        <CardContent>This place is Card Content!</CardContent>
      </Card>
      Testimonial */}
      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="icon59.png"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">SK Son</CardTitle>
          <CardDescription className="font-normal text-primary">
            {new Date().getFullYear() - 2022}-year DevOps Engineer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-1">
          <p className="italic font-light text-gray-600 dark:text-gray-400 text-center mx-auto max-w-xs">
            I run toward the endless unknown.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Discord icon</span>
              <svg
                role="img"
                viewBox="0 0 71 55"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>Discord</title>
                <path
                  d="M60.104 4.552A58.45 58.45 0 0046.831.75a41.399 41.399 0 00-1.963 4.05 55.583 55.583 0 00-16.745 0 41.423 41.423 0 00-1.973-4.05 58.332 58.332 0 00-13.279 3.8C5.662 19.052 3.41 33.245 4.333 47.312a60.523 60.523 0 0018.159 7.292 44.354 44.354 0 003.9-6.293 39.808 39.808 0 01-6.04-2.88c.504-.368 1.004-.75 1.485-1.15a32.935 32.935 0 0030.227 0c.484.4.985.782 1.49 1.15a39.775 39.775 0 01-6.034 2.88 44.22 44.22 0 003.905 6.293 60.437 60.437 0 0018.16-7.292c1.006-13.65-1.054-27.801-8.028-42.76zm-39.25 30.76c-3.335 0-6.053-3.07-6.053-6.85 0-3.78 2.697-6.85 6.053-6.85 3.372 0 6.077 3.088 6.034 6.85 0 3.78-2.662 6.85-6.034 6.85zm28.304 0c-3.335 0-6.053-3.07-6.053-6.85 0-3.78 2.697-6.85 6.053-6.85 3.372 0 6.077 3.088 6.034 6.85 0 3.78-2.662 6.85-6.034 6.85z"
                  fill="currentColor"
                />
              </svg>


            </a>

          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Key Features</CardTitle>
          <CardDescription>
            Explore the essential tools and components included in this project.
          </CardDescription>
        </CardHeader>
        <hr className="w-4/5 m-auto mb-4" />
        <CardFooter className="flex">
          <div className="space-y-4">
            {["Shadcn Component", "Hoyoverse RedeemCode", "Dashboard"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Light & dark mode</CardTitle>
            <CardDescription className="text-md mt-2">
              Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur
              natusm.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
        Service */}
    </div>
  );
};
