import { UserProvider } from "./Components/Provider";
import Navbar from "./Components/Navbar";
import ErrorOrNot from "./Components/ErrorOrNot";

function App() {
  return (
    // <div className="h-screen overflow-y-auto bg-red-100 scrollbar-blend">
    //   <div className="h-[200vh]">Scroll Me</div>
    // </div>
    <UserProvider>
      <div className="bg-neutral-900 min-h-screen px-12 py-10 max-md:px-15 max-xss:px-6 max-xss:py-7">
        <Navbar />
        <ErrorOrNot />
      </div>
    </UserProvider>
  );
}

export default App;
