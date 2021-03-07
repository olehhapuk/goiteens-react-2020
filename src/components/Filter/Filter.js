function Filter({ filter, onFilterChange }) {
  return (
    <div className="form-group">
      <input
        type="text"
        autoComplete="off"
        className="form-input"
        placeholder="Filter"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
}

export default Filter;
