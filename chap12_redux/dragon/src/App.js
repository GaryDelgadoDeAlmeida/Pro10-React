import { useDispatch, useSelector } from "react-redux";
import { set_dragon, add_dragon, delete_dragon } from "./actions/actions-types";
import './App.css';

function App() {
  const {count, dragons, dragon, message} = useSelector(state => state);
  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;
    dispatch(set_dragon({ name, value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(add_dragon());
  }

  return (
    <div className="App">
      <p>Dragon list number dragon(s) : {count}</p>

      {message !== "" && <p>Message : {message}</p>}

      <table>
        <tbody>
          <tr>
            <td>Add Dragon :</td>
            <td>
              <ul>
                {dragons.map((oneDragon, i) => (
                  <li key={i}>
                    <span>{oneDragon}</span>
                    <button onClick={() => dispatch(delete_dragon(i))}>Delete</button>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Ajouter un dragon</label>
          <input type="text" name="dragon" value={dragon} onChange={handleChange} />
        </div>
        
        <div>
          <button type="submit">Valider</button>
        </div>
      </form>
    </div>
  );
}

export default App;
