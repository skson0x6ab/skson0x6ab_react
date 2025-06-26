import { BadgeCheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function SampleBadge() {
  return (
    <section
      id="SampleAlertDialog"
      className="container py-24 sm:py-10 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Sample {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Badge
        </span>
      </h2>
      <div className="flex flex-col items-center gap-2">
        <div className="flex w-full flex-wrap gap-2">
          <Badge>Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
        <div className="flex w-full flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600"
          >
            <BadgeCheckIcon />
            Verified
          </Badge>
          <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
            8
          </Badge>
          <Badge
            className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
            variant="destructive"
          >
            99
          </Badge>
          <Badge
            className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
            variant="outline"
          >
            20+
          </Badge>
        </div>
      </div>
    </section>
  )
}
