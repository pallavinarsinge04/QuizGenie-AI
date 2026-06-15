function DiscussionCard({ discussion }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "15px",
      }}
    >
      <h3>{discussion.title}</h3>

      <p>{discussion.description}</p>

      <small>
        Posted By: {discussion.author}
      </small>
    </div>
  );
}

export default DiscussionCard;