import "./styles.css";

export default function Table(props) {
  const data = { "Black Cake": 10, "white Cake": 30, "Pink Cake": 40 };
  const dataset = Object.entries(data);
  const columnSet = ["Product", "Price"];
  return (
    <table>
      <tr>
        {columnSet.map((col) => (
          <th>{col}</th>
        ))}
      </tr>

      {dataset.map((row, idx) => (
        <tr>
          {row.map((rowData) => (
            <td>{rowData}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}
