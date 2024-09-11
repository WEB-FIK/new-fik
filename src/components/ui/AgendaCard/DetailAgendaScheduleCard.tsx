import React from "react";

interface DetailAgendaScheduleCardProps {
  date: string;
  hour: string;
  location: string;
}

function DetailAgendaScheduleCard({
  date,
  hour,
  location,
}: DetailAgendaScheduleCardProps) {
  return (
    <div className="w-full p-6 bg-primary-500 min-h-48 md:h-2/3 rounded-lg text-white">
      <div className="flex  md:flex-row md:items-start">
        {/* Labels */}
        <div className="w-full md:w-1/2 space-y-2">
          <p className="font-bold">Tanggal mulai:</p>
          <p className="font-medium">{date}</p>
          <p className="font-bold">Waktu Pelaksanaan:</p>
          <p className="font-medium">{hour}</p>
          <p className="font-bold">Lokasi:</p>
          <p className="font-medium">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailAgendaScheduleCard;
