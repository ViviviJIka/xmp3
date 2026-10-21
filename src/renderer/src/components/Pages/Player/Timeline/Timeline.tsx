function Timeline({ value, max, className, onChange }: { value: number; max: number; className: string; onChange: (v: number) => void }) {
  const percent = max > 0 ? (value / max) * 100 : 0
  return (
    <input
      type="range"
      className={className}
      min={0}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{ '--value': `${percent}%` } as React.CSSProperties}
      aria-label="Прогресс трека"
    />
  )
}

export default Timeline;