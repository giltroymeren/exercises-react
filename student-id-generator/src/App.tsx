import "./App.css";

function App() {
  return (
    <>
      <div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input name="name" placeholder="Your name" />
          </div>

          <div>
            <label htmlFor="birthday">Birthdate</label>
            <input type="date" name="birthday" />
          </div>

          <div>
            <label htmlFor="degree">Degree</label>
            <input name="degree" />
          </div>

          <div>
            <label htmlFor="university">University</label>
            <input name="university" />
          </div>

          <div>
            <button type="submit">Generate ID</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
