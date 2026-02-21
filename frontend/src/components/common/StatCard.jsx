export default function StatCard({ label, value, subtext }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-200 hover:translate-y-[-2px] hover:bg-white/10">
      
      <p className="text-primary-200 text-sm mb-2 tracking-wide">
        {label}
      </p>

      <h2 className="text-3xl font-semibold tracking-tight mb-2">
        {value}
      </h2>

      {subtext && (
        <p className="text-primary-100 text-xs">
          {subtext}
        </p>
      )}
    </div>
  );
}