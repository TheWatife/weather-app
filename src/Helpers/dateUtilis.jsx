import React from "react";

export function orderedDailyIndices(dates = []) {
  if (!Array.isArray(dates) || dates.length === 0) return [];

  const pad = (n) => String(n).padStart(2, "0");
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(
    today.getDate(),
  )}`;

  const startIndex = dates.findIndex((d) => d === todayStr);
  if (startIndex === -1) return dates.map((_, i) => i);

  return Array.from(
    { length: dates.length },
    (_, i) => (startIndex + i) % dates.length,
  );
}

export default orderedDailyIndices;
