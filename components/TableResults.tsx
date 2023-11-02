const TableResults = ({ searchData: [] }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {searchData.map((stock: any) => {
            ;<tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>{stock.name}</td>
              <td>{stock.price}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableResults
