import NotificationCard from "../components/NotificationCard";

function Notifications() {
  const notifications = [
    {
      title: "Quiz Completed",
      message: "You scored 90%",
      date: "Today",
    },
    {
      title: "Certificate Earned",
      message: "React Certificate",
      date: "Yesterday",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notifications</h1>

      {notifications.map((item, index) => (
        <NotificationCard
          key={index}
          notification={item}
        />
      ))}
    </div>
  );
}

export default Notifications;