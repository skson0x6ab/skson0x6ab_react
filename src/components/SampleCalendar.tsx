import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

export function SampleCalendar() {

  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <section
      id="SampleCalendar"
      className="container py-24 sm:py-10 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Sample {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Calendar
        </span>
      </h2>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
      />
    </section>
  )
}
