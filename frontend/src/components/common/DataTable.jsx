export default function DataTable({ columns, data }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-white/5 text-primary-200">
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="text-left px-6 py-4 font-medium"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-t border-white/10 hover:bg-white/5 transition-colors"
            >
              {columns.map((col) => (
                <td key={col.accessor} className="px-6 py-4">
                  {col.cell ? col.cell(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}