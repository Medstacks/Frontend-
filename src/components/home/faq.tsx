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
                "Agrolink provides real-time data analytics, smart planning tools, and local preservation techniques tailored to your specific crops and region. Our platform connects farmers to shared logistics resources, reducing transportation costs and delays.",
        },
        {
            question: "Can small-scale farmers benefit from Agrolink?",
            answer:
                "Absolutely! Agrolink is specifically designed with smallholder farmers in mind. Our platform scales to your needs and provides affordable solutions that directly address the challenges faced by small-scale farming operations.",
        },
        {
            question: "What kind of data does Agrolink collect?",
            answer:
                "Agrolink collects crop data, harvest timing, local market conditions, storage availability, transportation options, and weather forecasts - all essential information to optimize your post-harvest outcomes.",
        },
        {
            question: "Is training provided for new users?",
            answer:
                "Yes, we offer comprehensive onboarding and training sessions for all new users. Our team provides ongoing support to ensure you get the most value from our platform.",
        },
    ];
    return (
         <section className="w-full max-w-4xl mx-auto py-4 px-4 md:px-6">
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
                            <AccordionTrigger className="text-left text-brandBlack hover:text-brandGreen transition-colors py-[20px]">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 shadow-md mt-[10px]">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
        </section>
    )}
