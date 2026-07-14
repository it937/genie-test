'use client';

import { useEffect, useState } from 'react';

const WIDGET_URL = 'https://it937.github.io/genie/';

export default function TemporaryCurrencySliderEmbed() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fallbackTimer = window.setTimeout(() => {
      setIsLoaded(true);
    }, 4000);

    return () => window.clearTimeout(fallbackTimer);
  }, []);

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-6 bg-transparent -mt-16 overflow-hidden">
      <div className="mx-auto w-full max-w-full px-3 sm:px-0">
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-md">
          {!isLoaded && (
            <div className="pointer-events-none absolute inset-0 z-10 flex animate-pulse items-center justify-center bg-white/88 text-sm font-medium text-gray-400">
              Loading live market feed...
            </div>
          )}

          <iframe
            src={WIDGET_URL}
            title="Live market feed"
            className="block h-[78px] w-full border-0 bg-white sm:h-[82px]"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            referrerPolicy="strict-origin-when-cross-origin"
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
}
