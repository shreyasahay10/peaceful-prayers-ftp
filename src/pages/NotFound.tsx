import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background temple-pattern">
      <div className="text-center px-4 animate-fade-up">
        <p className="text-8xl md:text-9xl font-display font-bold text-primary/20 mb-4">
          404
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Path Not Found
        </h1>
        <p className="font-body text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          The page you are seeking has wandered beyond our sacred grounds. 
          Let us guide you back to the temple.
        </p>
        <Button variant="divine" size="lg" asChild>
          <Link to="/">
            <Home className="mr-2 w-5 h-5" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
