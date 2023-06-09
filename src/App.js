function App() {
  return (
    <div>
      <input type="text" />
      <button>add todo</button>

      <ul>
        <li>
          <div>
            <label>
              <input type="checkbox" />
              completed
            </label>
            <button>delete</button>
          </div>
        </li>

        <li>
          <div>
            <label>
              <input type="checkbox" />
              completed
            </label>
            <button>delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
