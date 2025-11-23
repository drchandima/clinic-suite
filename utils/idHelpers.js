// utils/idHelpers.js
export function formatDateToId(date = new Date()){
  const d = (date instanceof Date) ? date : new Date(date);
  const pad = (n) => String(n).padStart(2, '0');
  const YYYY = d.getFullYear();
  const MM = pad(d.getMonth() + 1);
  const DD = pad(d.getDate());
  const hh = pad(d.getHours());
  const mm = pad(d.getMinutes());
  const ss = pad(d.getSeconds());
  return `${YYYY}${MM}${DD}${hh}${mm}${ss}`;
}
