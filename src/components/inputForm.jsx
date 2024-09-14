function InputForm({setName, setIncludeName, includeName, name}){

    return (
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          ЭР
          <input
            type="checkbox"
            checked={includeName}
            onChange={() => setIncludeName(!includeName)}
          />
        </label>
        <br />
      </form>
    )
}

export default InputForm