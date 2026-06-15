export default function VideoPlayer({ url }) {
  return (
    <div>
      <iframe
        width="100%"
        height="450"
        src={url}
        title="Video"
        allowFullScreen
      ></iframe>
    </div>
  );
}