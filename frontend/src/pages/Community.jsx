import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Community.css";

function Community() {
  return (
    <div className="community-layout">
      <Sidebar />

      <div className="community-main">
        <Navbar />

        <div className="community-container">

          <h1>👥 Learning Community</h1>

          <div className="community-top">

            <input
              type="text"
              placeholder="Search discussions..."
              className="search-box"
            />

            <button className="create-btn">
              Create Post
            </button>

          </div>

          <div className="community-grid">

            <div className="community-card">

              <h2>💻 React Developers</h2>

              <p>
                Discuss React concepts, hooks, routing,
                Redux and project ideas.
              </p>

              <div className="community-footer">
                <span>👥 2,450 Members</span>

                <button>Join</button>
              </div>

            </div>

            <div className="community-card">

              <h2>☕ Java Programming</h2>

              <p>
                Java basics, Spring Boot, DSA and interview
                preparation.
              </p>

              <div className="community-footer">
                <span>👥 1,980 Members</span>

                <button>Join</button>
              </div>

            </div>

            <div className="community-card">

              <h2>🐍 Python Community</h2>

              <p>
                Machine Learning, Django, Flask and Python
                coding challenges.
              </p>

              <div className="community-footer">
                <span>👥 3,120 Members</span>

                <button>Join</button>
              </div>

            </div>

          </div>

          <h2 className="discussion-title">
            🔥 Recent Discussions
          </h2>

          <div className="discussion-card">

            <h3>
              How to prepare for React interviews?
            </h3>

            <p>
              Share your interview experience and useful
              resources for React developers.
            </p>

            <div className="discussion-footer">
              <span>👍 145 Likes</span>

              <span>💬 42 Replies</span>
            </div>

          </div>

          <div className="discussion-card">

            <h3>
              Best DSA roadmap for placements?
            </h3>

            <p>
              Which topics should be covered first for
              coding interviews?
            </p>

            <div className="discussion-footer">
              <span>👍 210 Likes</span>

              <span>💬 65 Replies</span>
            </div>

          </div>

          <div className="community-stats">

            <div className="stat-card">
              <h2>6,000+</h2>
              <p>Active Students</p>
            </div>

            <div className="stat-card">
              <h2>1,250</h2>
              <p>Posts</p>
            </div>

            <div className="stat-card">
              <h2>8,900</h2>
              <p>Comments</p>
            </div>

            <div className="stat-card">
              <h2>150</h2>
              <p>Study Groups</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Community;