import { AspectRatio } from "@/components/ui/aspect-ratio"

export function SampleAspectRatio() {
  return (
    <section
      id="SampleAspectRatio"
      className="container py-24 sm:py-10 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Sample {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Aspect-Ratio
        </span>
      </h2>
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </AspectRatio>
    </section>
  )
}
