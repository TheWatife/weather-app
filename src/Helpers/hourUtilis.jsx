export default function getHourOfDay(dayOfWeek, selectedDay) {
  if (!selectedDay || !dayOfWeek?.time) return [];

  // if (typeof selectedDay !== "string") {
  //   console.log("selectedDay is not a string:", selectedDay);
  //   return [];
  // }

  selectedDay = selectedDay.trim();

  return dayOfWeek.time
    .map((time, i) => {
      if (!time.startsWith(selectedDay)) return null;

      return {
        // time: time.split(0)[1],
        time,
        temp: dayOfWeek.temperature_2m?.[i],
        weatherCode: dayOfWeek.weather_code?.[i],
      };
    })
    .filter(Boolean);
}
