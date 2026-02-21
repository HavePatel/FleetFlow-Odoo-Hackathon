export default function StatCard({ title, value }) {
  return (
    <div className="bg-primary-800/40 border border-white/10 rounded-2xl p-6">
      <h3 className="text-sm text-primary-200 mb-2">
        {title}
      </h3>

      <p className="text-3xl font-semibold text-white">
        {value}
      </p>
    </div>
  );
}