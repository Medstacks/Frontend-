import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { FaChevronDown } from "react-icons/fa";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={`${className || ""}`}
        {...props}
    />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex w-full items-center ">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={`flex-1 flex py-[20px] items-center justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-180 ${className || ""}`}
            {...props}
        >
            <span className="flex-1 text-gray-200">{children}</span>
            <FaChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 ml-2 text-gray-200"/>
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className={`overflow-hidden text-sm transition transform duration-300 data-[state=closed]:animate-slideOut data-[state=open]:animate-slideIn ${className || ""}`}
        {...props}
    >
        <div style={{ fontSize: '0.75rem' }} className={`px-[10%] py-[10px] text-gray-700 ${className || ""}`}>{children}</div>
    </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };





