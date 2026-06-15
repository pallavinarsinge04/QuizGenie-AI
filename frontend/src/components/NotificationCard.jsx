function NotificationCard({ notification }) {
  return (
    <div
      style={{
        background: "#f3f4f6",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h4>{notification.title}</h4>

      <p>{notification.message}</p>

      <small>{notification.date}</small>
    </div>
  );
}
export default NotificationCard;