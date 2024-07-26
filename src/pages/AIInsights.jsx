import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const insights = [
  {
    title: "Customer Churn Risk",
    description: "3 high-value customers are at risk of churning",
    action: "Review and reach out to these customers",
    type: "warning"
  },
  {
    title: "Cross-Sell Opportunity",
    description: "5 customers are likely to be interested in Product X",
    action: "Prepare targeted marketing campaign",
    type: "success"
  },
  {
    title: "Customer Satisfaction Trend",
    description: "Overall satisfaction score increased by 12% this month",
    action: "Analyze factors contributing to improvement",
    type: "info"
  },
  {
    title: "Support Ticket Pattern",
    description: "Increase in product usage queries for new feature",
    action: "Consider creating additional documentation or tutorials",
    type: "info"
  }
];

const AIInsights = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">AI Insights</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {insights.map((insight, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {insight.title}
                <Badge variant={insight.type === "warning" ? "destructive" : insight.type === "success" ? "default" : "secondary"}>
                  {insight.type}
                </Badge>
              </CardTitle>
              <CardDescription>{insight.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium">Recommended Action:</p>
              <p className="text-sm text-muted-foreground">{insight.action}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AIInsights;
