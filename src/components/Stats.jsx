export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing List 🚀</em>
      </p>
    );
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "you got everything! Ready to go ✈ "
          : ` 🧳 You have ${numItem} items on your list , and you already packed
          ${numPacked} item (${percent}%)`}
      </em>
    </footer>
  );
}
