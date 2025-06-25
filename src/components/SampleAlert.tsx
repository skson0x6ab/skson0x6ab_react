import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function SampleAlert() {
  return (
    <section
      id="SampleAlert"
      className="container py-24 sm:py-10 "
    >

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Sample {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Alert
        </span>
      </h2>
      <div className="grid w-full max-w-xl items-start gap-4">
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is an alert with icon, title and description.
          </AlertDescription>
        </Alert>
        <Alert>
          <PopcornIcon />
          <AlertTitle>
            This Alert has a title and an icon. No description.
          </AlertTitle>
        </Alert>
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>Unable to process your payment.</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>

    </section>
  )
}
