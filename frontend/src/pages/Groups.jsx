import GroupCard from "../components/GroupCard";

function Groups() {
  const groups = [
    {
      name: "React Developers",
      description: "Learn React together",
      members: 120,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Study Groups</h1>

      {groups.map((group, index) => (
        <GroupCard key={index} group={group} />
      ))}
    </div>
  );
}

export default Groups;