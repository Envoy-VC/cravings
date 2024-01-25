// 11:00:00+05:30 - 23:00:00+05:30

export const formatTime = (timeString: string): string => {
  // Parse the input time string
  const [, hours, minutes, , timezoneOffset] =
    timeString.match(/(\d{2}):(\d{2}):(\d{2})([+-]\d{2}:\d{2})/) ?? [];

  if (!hours || !minutes || !timezoneOffset) {
    throw new Error('Invalid time string format');
  }

  // Construct a new Date object using the provided time and timezone
  const originalTime = new Date(
    `1970-01-01T${hours}:${minutes}${timezoneOffset}`
  );

  // Get local time using Intl.DateTimeFormat
  const localTime = new Intl.DateTimeFormat('en-US', {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }).format(originalTime);

  return localTime;
};
