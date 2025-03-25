export function getRelativeTimeString(
  date: Date | number,
  lang = navigator.language,
): string {
  if (!date) return "Invalid date"

  const timeMs = typeof date === 'number' ? date : date.getTime()
  if (!Number.isFinite(timeMs)) return "Invalid date"

  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000)
  if (!Number.isFinite(deltaSeconds)) return "Invalid time"

  const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity]
  const units: Intl.RelativeTimeFormatUnit[] = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year']

  const unitIndex = cutoffs.findIndex((cutoff) => cutoff > Math.abs(deltaSeconds))
  if (unitIndex === -1) return "Invalid unit"

  const divisor = unitIndex > 0 ? cutoffs[unitIndex - 1] : 1
  if (!Number.isFinite(divisor) || divisor === 0) return "Invalid divisor"

  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })
  return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex])
}
