import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
export function SampleAlertDialog() {
  return (
    <section
    id="SampleAlertDialog"
    className="container py-24 sm:py-10 flex flex-col items-center"
    >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Sample {" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Alert-Dialog
            </span>
        </h2>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                A modal dialog that interrupts the user with important content and expects a response.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    </section>
  )
}