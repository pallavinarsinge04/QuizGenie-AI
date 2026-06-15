export default function SearchBar({
  value,
  onChange,
}) {
  return (
    <input
      className="border p-2 w-full mb-5"
      placeholder="Search flashcards..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}