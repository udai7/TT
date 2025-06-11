import { ReactNode } from "react";

interface MobileContainerProps {
  children: ReactNode;
}

export function MobileContainer({ children }: MobileContainerProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-nature-50 flex items-center justify-center p-4">
      {/* Mobile Frame */}
      <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="relative bg-white rounded-[2.5rem] overflow-hidden w-[375px] h-[812px] shadow-inner">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-white flex items-center justify-between px-6 z-50">
            <div className="flex items-center gap-1">
              <div className="text-sm font-semibold">9:41</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              </div>
              <div className="w-6 h-3 bg-slate-900 rounded-sm ml-2"></div>
            </div>
          </div>

          {/* App Content */}
          <div className="pt-12 h-full overflow-hidden">{children}</div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-300 rounded-full"></div>
        </div>

        {/* Phone Hardware Details */}
        <div className="absolute -left-1 top-20 w-1 h-8 bg-slate-800 rounded-l-md"></div>
        <div className="absolute -left-1 top-32 w-1 h-12 bg-slate-800 rounded-l-md"></div>
        <div className="absolute -left-1 top-48 w-1 h-12 bg-slate-800 rounded-l-md"></div>
        <div className="absolute -right-1 top-28 w-1 h-16 bg-slate-800 rounded-r-md"></div>
      </div>
    </div>
  );
}
