import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Sample FAQs - in a real app, these would come from an API or CMS
const faqs = [
  {
    id: "1",
    question: "What are your opening hours?",
    answer:
      "Tamasha Club is open every Saturday from 10:00 PM until 4:00 AM. We also open for special events and private functions on other days - check our events calendar for details.",
  },
  {
    id: "2",
    question: "Is there a dress code?",
    answer:
      "Yes, we have a smart casual dress code. We do not allow sportswear, ripped jeans, or flip-flops. Smart jeans and trainers are acceptable. Management reserves the right to refuse entry if dress code is not adhered to.",
  },
  {
    id: "3",
    question: "Do you have an age restriction?",
    answer:
      "Tamasha Club is strictly 18+. Valid ID is required for entry. We accept passports, driving licenses, and other government-issued photo ID.",
  },
  {
    id: "4",
    question: "How can I book a VIP table?",
    answer:
      "VIP tables can be booked through our website by visiting the VIP Tables page and filling out the booking form. Alternatively, you can contact our reservations team directly at reservations@tamashaclub.com or call us at 020 1234 5678.",
  },
  {
    id: "5",
    question: "Do you offer student discounts?",
    answer:
      "Yes, we offer student discounts on selected nights. Please check our Offers page for current promotions or follow us on social media for announcements.",
  },
  {
    id: "6",
    question: "Can I host a private event at Tamasha Club?",
    answer:
      "We offer private hire options for corporate events, birthdays, and other celebrations. Please visit our Functions page to submit an inquiry and our team will get back to you with available options.",
  },
  {
    id: "7",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, as well as cash. For VIP tables and bottle service, we require a deposit in advance which can be paid online or over the phone.",
  },
  {
    id: "8",
    question: "Is there parking available?",
    answer:
      "We don't have dedicated parking, but there are several public parking facilities within walking distance. We recommend using public transportation or taxi services when visiting Tamasha Club.",
  },
  {
    id: "9",
    question: "What type of music do you play?",
    answer:
      "Our music policy varies depending on the night and event. We typically feature commercial, R&B, hip-hop, house, and Bollywood music. Check specific event details for information about the music on a particular night.",
  },
  {
    id: "10",
    question: "How can I apply to work at Tamasha Club?",
    answer:
      "We're always looking for talented individuals to join our team. Please visit our Careers page to see current openings and submit your application.",
  },
]

export default function FAQsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">FREQUENTLY ASKED QUESTIONS</h1>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left font-bold">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
