'use client';

import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isExpanded = false,
  onToggle,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-2 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800">{title}</span>
        <svg
          className={`w-5 h-5 text-primary transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

const AccordionExample: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const handleToggle = (index: number) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-2">
      <AccordionItem
        title="Getting Started"
        isExpanded={expandedItems.has(0)}
        onToggle={() => handleToggle(0)}
      >
        <p className="text-sm">
          Install the library using npm or yarn and start using beautiful components in your React Native app.
        </p>
      </AccordionItem>
      
      <AccordionItem
        title="Customization"
        isExpanded={expandedItems.has(1)}
        onToggle={() => handleToggle(1)}
      >
        <p className="text-sm">
          All components are fully customizable with theme support and custom styling options.
        </p>
      </AccordionItem>
      
      <AccordionItem
        title="TypeScript Support"
        isExpanded={expandedItems.has(2)}
        onToggle={() => handleToggle(2)}
      >
        <p className="text-sm">
          Built with TypeScript from the ground up for better developer experience and type safety.
        </p>
      </AccordionItem>
    </div>
  );
};

export default AccordionExample;