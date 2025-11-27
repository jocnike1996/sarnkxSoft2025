import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { BarChart3, Users, FolderKanban, TrendingUp, Plus } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      icon: FolderKanban,
      label: "Active Projects",
      value: "12",
      change: "+3 this month",
      gradient: "gradient-primary",
    },
    {
      icon: Users,
      label: "Team Members",
      value: "8",
      change: "+2 new",
      gradient: "gradient-warm",
    },
    {
      icon: BarChart3,
      label: "Completed Tasks",
      value: "248",
      change: "+45 this week",
      gradient: "gradient-primary",
    },
    {
      icon: TrendingUp,
      label: "Revenue",
      value: "$52k",
      change: "+12% growth",
      gradient: "gradient-warm",
    },
  ];

  const recentProjects = [
    {
      name: "E-Commerce Redesign",
      client: "TechCorp Inc.",
      status: "In Progress",
      progress: 65,
    },
    {
      name: "Mobile App Development",
      client: "StartupX",
      status: "In Progress",
      progress: 40,
    },
    {
      name: "API Integration",
      client: "Enterprise Co.",
      status: "Review",
      progress: 90,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl font-display font-bold mb-2">
                Welcome Back, <span className="gradient-primary bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-muted-foreground">Here's what's happening with your projects today</p>
            </div>
            <Button variant="gradient" size="lg">
              <Plus className="w-5 h-5" />
              New Project
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:shadow-elevated transition-smooth">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.gradient} rounded-2xl flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-display font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-primary font-medium">{stat.change}</div>
              </Card>
            ))}
          </div>

          {/* Recent Projects */}
          <Card className="p-8 bg-card border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-bold">Recent Projects</h2>
              <Button variant="ghost">View All</Button>
            </div>
            <div className="space-y-6">
              {recentProjects.map((project, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-semibold">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">{project.client}</p>
                    </div>
                    <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="gradient-primary h-full rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
