export default function DataTable({ columns, data }) {
  return (
    <div className="bg-[#11183c] rounded-xl overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-[#1b2559]">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="p-4 text-sm font-semibold">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-gray-700">
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="p-4">
                  {col.render
                    ? col.render(row[col.accessor])
                    : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}