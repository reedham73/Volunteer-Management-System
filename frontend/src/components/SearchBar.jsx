function SearchBar({ value, onChange, placeholder = 'Search volunteers...' }) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default SearchBar
