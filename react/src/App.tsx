import { Link } from "react-router-dom";
import { Home, PlusCircle } from "lucide-react";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Instagram Web3</span>
          </Link>
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            <Link
              to="/feed"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              <Home className="size-6" />
              <span className="sr-only">Feed Prod</span>
            </Link>
            <Link
              to="/create"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              <PlusCircle className="size-6" />
              <span className="sr-only">Create</span>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <AppRoutes />
      </main>
    </div>
  );
}
export default App;
