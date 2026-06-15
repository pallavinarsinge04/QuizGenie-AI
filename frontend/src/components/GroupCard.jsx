function GroupCard({ group }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "15px",
      }}
    >
      <h3>{group.name}</h3>

      <p>{group.description}</p>

      <p>
        Members : {group.members}
      </p>

      <button>Join Group</button>
    </div>
  );
}

export default GroupCard;