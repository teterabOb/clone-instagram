import { ReactNode, useState } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather"

export default function Carousel({ children: slides }: { children: ReactNode[] }) {
    const [current, setCurrent] = useState(0)
    const prev = () => setCurrent(current === 0 ? slides.length - 1 : current - 1)
    const next = () => setCurrent(current === slides.length - 1 ? 0 : current + 1)

    return  (
        <div className="overflow-hidden relative w-96 h-[450px]">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides}
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prev}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <ChevronLeft size={12} />
            </button>
            <button
              onClick={next}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
            <ChevronRight size={12} />
            </button>
          </div>
    
          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <div
                  className={`
                  transition-all w-2 h-2 bg-white rounded-full
                  ${current === i ? "p-1" : "bg-opacity-50"}
                `}
                />
              ))}
            </div>
          </div>
        </div>
      )
}