export default function StatusPill({ status }) {
  const base =
    "px-3 py-1 text-xs rounded-full font-medium border";

 const variants = {
  AVAILABLE:
    "bg-primary-600/20 text-primary-200 border-primary-600/30",
  ON_TRIP:
    "bg-white/10 text-white border-white/20",
  IN_SHOP:
    "bg-red-500/10 text-red-400 border-red-500/20",
  SUSPENDED:
    "bg-red-600/20 text-red-400 border-red-600/30",
};

  return (
    <span className={`${base} ${variants[status]}`}>
      {status.replace("_", " ")}
    </span>
  );
}