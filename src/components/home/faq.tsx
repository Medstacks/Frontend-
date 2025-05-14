import { motion } from 'framer-motion'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
  
export default function FAQ() { 
    const faqs = [
        {
            question: "How does Agrolink reduce post-harvest losses?",
            answer:
                " Provides real-time data, smart planning, local preservation techniques, and connects farmers to shared logistics.",
        },
        {
            question: "Can small-scale farmers benefit from Agrolink?",
            answer:
                "Yes, it's specifically designed for smallholder farmers with scalable and affordable solutions",
        },
        {
            question: "What kind of data does Agrolink collect?",
            answer:
                " Crop data, harvest timing, market conditions, storage, transportation, and weather forecasts.",
        },
        {
            question: "Is training provided for new users?",
            answer:
                "Yes, comprehensive onboarding, training, and ongoing support are offered.",
        },
    ];
    return (
         <section className="w-full md:w-1/2 mx-auto py-4 px-4 md:px-6 md:h-[300px] transition transform duration-400">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-2"
            >
                <h2 className="font-bold" style={{fontSize:'1.2rem'}}>
                    FAQ
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto" style={{fontSize:'0.65rem'}}>
                    Find answers to common questions about how Agrolink helps farmers
                    reduce waste and increase profits.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-2"
            >
                <Accordion type="single" collapsible className="w-full  gap-[10px] flex flex-col ">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border-b border-gray-200"
                        >
                            <AccordionTrigger className="text-left text-gray-200">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 shadow-md w-full">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
        </section>
    )}
