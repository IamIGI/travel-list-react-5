export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some times to your packing list `🚀</em>
      </p>
    );
  const numItems = items.length; //This we will name 'derived state', as this value will be updated when the component gets rerender

  //And component gets rerender when state items value change, soo numItems const also is updated, cuz of rerender
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You got everything ready to go ✈'
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
