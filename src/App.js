import ItemSheet from "./ItemSheet";
import "./styles.css";

export default function App() {
  const hj = [];
  for (let i = 0; i < 100; i++) hj.push(2);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {hj.map(() => (
        <div>2</div>
      ))}
      <ItemSheet />
    </div>
  );
}
