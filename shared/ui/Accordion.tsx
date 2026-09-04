'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/shared/utils/cn';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  return (
    <div className={cn('divide-y divide-zentro-border-light rounded-zentro-md border border-zentro-border-light bg-white dark:divide-zentro-navy-800 dark:border-zentro-navy-800 dark:bg-zentro-navy-900', className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        const buttonId = `accordion-btn-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id} className="overflow-hidden">
            <button
              id={buttonId}
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-bold text-zentro-navy-900 transition-colors hover:bg-zentro-navy-50/70 focus-zentro dark:text-white dark:hover:bg-zentro-navy-800/60 cursor-pointer"
            >
              <span>{item.title}</span>
              <ChevronDown
                className={cn(
                  'h-4 w-4 shrink-0 text-zentro-navy-500 transition-transform duration-normal ease-out',
                  isOpen && 'rotate-180 text-zentro-orange-500'
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1 text-xs leading-relaxed text-zentro-text-secondary dark:text-zentro-navy-300">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;