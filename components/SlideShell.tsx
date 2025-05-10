import React from "react";

interface SlideShellProps {
  children: React.ReactNode;
  index: number;
  total: number;
  noBreak?: boolean;
}

const SlideShell: React.FC<SlideShellProps> = ({ children, index, total, noBreak }) => {
  return (
    <div className={`h-full w-full flex flex-col p-6 md:p-10 lg:p-12 relative overflow-y-auto ${noBreak ? '' : 'slide-page-break'} print:my-auto print:h-auto`}>
      <div className="absolute top-0 left-0 h-1 bg-primary print:hidden" style={{ width: `${((index + 1) / total) * 100}%` }} />
      {children}
      <div className="absolute bottom-4 right-4 text-sm text-gray-500 print:hide-count">
        {String(index + 1).padStart(2, "0")} / {total}
      </div>
    </div>
  );
};

export default SlideShell; 