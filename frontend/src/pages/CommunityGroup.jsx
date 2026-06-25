import { useParams } from "react-router-dom";

function CommunityGroup() {
  const { id } = useParams();

  return (
    <div className="group-container">
      <h1>Community Group #{id}</h1>

      <div className="group-chat">
        <p>👋 Welcome to the community!</p>
        <p>💡 Discuss quizzes and learning topics.</p>
      </div>
    </div>
  );
}

export default CommunityGroup;