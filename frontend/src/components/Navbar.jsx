export default function Navbar() {
  return (
    <div className="bg-white shadow p-5 flex justify-between">

      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <div>

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="rounded-full"
        />

      </div>

    </div>
  );
}