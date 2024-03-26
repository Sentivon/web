export interface ChipProps {
  children: React.ReactNode;
}

export default function Chip({ children }: ChipProps) {
  return (
    <div className="flex items-center gap-3 border text-sm rounded-full px-3 py-0.5 w-fit">
      {children}
    </div>
  );
}
