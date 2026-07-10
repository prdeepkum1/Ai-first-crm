// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import MainLayout from "../layouts/MainLayout";

// import Dashboard from "../pages/Dashboard";
// import Chat from "../pages/Chat";
// import LogInteraction from "../pages/LogInteraction";
// import InteractionHistory from "../pages/InteractionHistory";
// import Reminder from "../pages/Reminder";
// import NotFound from "../pages/NotFound";

// function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/chat" element={<Chat />} />
//           <Route path="/log" element={<LogInteraction />} />
//           <Route path="/history" element={<InteractionHistory />} />
//           <Route path="/reminder" element={<Reminder />} />
//         </Route>

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default AppRoutes;




import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import LogInteraction from "../pages/LogInteraction";
import InteractionHistory from "../pages/InteractionHistory";
import Reminder from "../pages/Reminder";
import Chat from "../pages/Chat";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/log-interaction" element={<LogInteraction />} />
      <Route path="/history" element={<InteractionHistory />} />
      <Route path="/reminder" element={<Reminder />} />
      <Route path="/chat" element={<Chat />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}