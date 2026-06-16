import Layout from "../components/Layout";
import VideoPlayer from "../components/VideoPlayer";

export default function VideoLearning() {
  return (
    <Layout>
      <h1>Video Learning</h1>

      <VideoPlayer url="https://youtu.be/XV-lIaO00H8?t=3" />
    </Layout>
  );
}