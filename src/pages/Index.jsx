import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, TrendingUp, Zap } from "lucide-react";

const DashboardCard = ({ title, value, icon }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

const Index = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">AI CRM Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title="Total Customers" value="1,234" icon={<Users className="h-4 w-4 text-muted-foreground" />} />
        <DashboardCard title="Revenue" value="$54,321" icon={<DollarSign className="h-4 w-4 text-muted-foreground" />} />
        <DashboardCard title="Growth" value="+12.3%" icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />} />
        <DashboardCard title="AI Insights" value="7 New" icon={<Zap className="h-4 w-4 text-muted-foreground" />} />
      </div>
    </div>
  );
};

export default Index;
