import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Accordion Sample Question 1?",
    answer: "Accordion Sample Answer 1!",
    value: "item-1",
  },
  {
    question: "Accordion Sample Question 2?",
    answer:
      "Accordion Sample Answer 2!",
    value: "item-2",
  },
  {
    question:
      "Accordion Sample Question 3?",
    answer:
      "Accordion Sample Answer 3!",
    value: "item-3",
  },
];

export const FAQ = () => {
  return (
    <section
      id="SampleAccordion"
      className="container py-24 sm:py-10"
    >

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Sample {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Accordion
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
