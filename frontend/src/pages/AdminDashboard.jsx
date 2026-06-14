import { Link } from "react-router-dom";

function AdminDashboard(){

return(

<div>

<h1>Admin Dashboard</h1>

<Link to="/admin/users">
Manage Users
</Link>

<br/>

<Link to="/admin/flashcards">
Manage Flashcards
</Link>

<br/>

<Link to="/admin/quizzes">
Manage Quizzes
</Link>

</div>

);

}

export default AdminDashboard;