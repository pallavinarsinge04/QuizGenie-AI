import { useEffect, useState } from "react";
import API from "../api/axios";

function StudyPlan() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    const res = await API.get("/study");
    setPlans(res.data);
  };

  return (
    <div>
      <h1>My Study Plan</h1>

      {plans.map((plan) => (
        <div key={plan._id}>
          <h3>{plan.topic}</h3>
          <p>{plan.duration}</p>
          <p>
            {plan.completed
              ? "✅ Completed"
              : "📚 Pending"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StudyPlan;