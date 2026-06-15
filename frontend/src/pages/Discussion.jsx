import DiscussionCard from "../components/DiscussionCard";

function Discussion() {
  const discussions = [
    {
      title: "React Hooks",
      description: "Explain useEffect",
      author: "Admin",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Discussion Forum</h1>

      {discussions.map((item, index) => (
        <DiscussionCard
          key={index}
          discussion={item}
        />
      ))}
    </div>
  );
}

export default Discussion;