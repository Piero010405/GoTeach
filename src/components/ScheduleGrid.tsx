"use client";
import { useState } from "react";
import ScheduleSelector from "react-schedule-selector";
import { addWeeks, subWeeks } from "date-fns";

export default function WeeklyScheduler() {
  const [selection, setSelection] = useState<Date[]>([]);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="bg-white p-6 rounded-xl border-1 border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-700">Selecciona un horario</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setStartDate(prev => subWeeks(prev, 1))}
            className="text-sm px-3 py-1 bg-blue-400 hover:bg-blue-500 rounded text-white"
          >
            ← Semana anterior
          </button>
          <button
            onClick={() => setStartDate(prev => addWeeks(prev, 1))}
            className="text-sm px-3 py-1 bg-blue-400 hover:bg-blue-500 rounded text-white"
          >
            Semana siguiente →
          </button>
        </div>
      </div>

      <ScheduleSelector
        selection={selection}
        onChange={setSelection}
        numDays={7}
        minTime={6}
        maxTime={24}
        hourlyChunks={1}
        startDate={startDate}
        renderDateCell={(time, selected, refSetter) => {
          const isConfirmable = [10, 11, 12].includes(time.getHours());
          const isPending = [15, 16].includes(time.getHours());
          const isAvailable = isConfirmable || isPending;

          let bg = "white";
          if (!isAvailable) bg = "#e5e7eb";
          else if (selected) bg = "#3b82f6";
          else if (isConfirmable) bg = "#dcfce7";
          else if (isPending) bg = "#fef9c3";

          return (  
            <div
              ref={refSetter}
              className="w-full h-full rounded transition cursor-pointer hover:bg-blue-400"
              style={{
                backgroundColor: bg,
                pointerEvents: isAvailable ? "auto" : "none",
                opacity: isAvailable ? 1 : 0.5,
              }}
              onMouseEnter={(e) => {
                if (isAvailable && !selected) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#bfdbfe";
                }
              }}
              onMouseLeave={(e) => {
                if (isAvailable && !selected) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = bg;
                }
              }}
            />
          );
        }}
      />
    </div>
  );
}
