import { Home, Users, BarChart, Zap } from "lucide-react";
import Index from "./pages/Index.jsx";
import CustomerList from "./pages/CustomerList.jsx";
import Analytics from "./pages/Analytics.jsx";
import AIInsights from "./pages/AIInsights.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Customers",
    to: "/customers",
    icon: <Users className="h-4 w-4" />,
    page: <CustomerList />,
  },
  {
    title: "Analytics",
    to: "/analytics",
    icon: <BarChart className="h-4 w-4" />,
    page: <Analytics />,
  },
  {
    title: "AI Insights",
    to: "/ai-insights",
    icon: <Zap className="h-4 w-4" />,
    page: <AIInsights />,
  },
];
