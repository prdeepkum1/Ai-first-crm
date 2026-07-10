import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Log Interaction",
    path: "/log",
  },
  {
    name: "History",
    path: "/history",
  },
  {
    name: "Reminder",
    path: "/reminder",
  },
  {
    name: "AI Chat",
    path: "/chat",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen">

      <div className="text-center text-xl font-bold py-6 border-b border-slate-700">
        CRM Menu
      </div>

      <nav className="flex flex-col p-4 gap-3">

        {links.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-700"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

      </nav>
    </aside>
  );
}