// import react from 'react'

// function App() {
//   return(
//     <div>
//       <h1 className="bg-green-500">dnfhvngnjtgngb</h1>
//     </div>
//   )
 
// }

// export default App



import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
}

export default App;