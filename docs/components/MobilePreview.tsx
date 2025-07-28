'use client';

import React from 'react';

interface MobilePreviewProps {
  children: React.ReactNode;
  title?: string;
}

const MobilePreview: React.FC<MobilePreviewProps> = ({ children, title = "Preview" }) => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="mobile-frame w-80">
        <div className="mobile-screen h-[600px] relative">
          <div className="mobile-notch"></div>
          <div className="bg-white h-full pt-8 px-4 overflow-y-auto">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
            <div className="space-y-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePreview;