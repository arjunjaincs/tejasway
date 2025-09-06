"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Users, Database, Building2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const departmentStats = [
  { name: "Train Operations", documents: 847, accuracy: 98.5, users: 23, color: "bg-blue-500" },
  { name: "Engineering", documents: 623, accuracy: 97.2, users: 18, color: "bg-green-500" },
  { name: "Safety & Security", documents: 445, accuracy: 99.1, users: 15, color: "bg-red-500" },
  { name: "Operations", documents: 392, accuracy: 96.8, users: 12, color: "bg-yellow-500" },
  { name: "Compliance", documents: 287, accuracy: 98.9, users: 8, color: "bg-purple-500" },
  { name: "Administration", documents: 253, accuracy: 97.5, users: 10, color: "bg-pink-500" },
]

const systemMetrics = [
  { title: "Total Processing Time", value: "2.4s", change: "-15.2%", trend: "down" },
  { title: "Error Rate", value: "1.7%", change: "-0.3%", trend: "down" },
  { title: "Storage Usage", value: "67.3%", change: "+2.1%", trend: "up" },
  { title: "API Response Time", value: "145ms", change: "-8.5%", trend: "down" },
]

interface AnalyticsPageProps {
  viewMode?: "analytics" | "departments"
}

export function AnalyticsPage({ viewMode = "analytics" }: AnalyticsPageProps) {
  if (viewMode === "departments") {
    return (
      <div className="space-y-6">
        {/* Department Overview Header */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              All Departments Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">6</div>
                <div className="text-sm text-muted-foreground">Total Departments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">86</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">2,847</div>
                <div className="text-sm text-muted-foreground">Total Documents</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {departmentStats.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${dept.color}`} />
                    <CardTitle className="text-base">{dept.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">{dept.documents}</div>
                      <div className="text-xs text-muted-foreground">Documents</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{dept.users}</div>
                      <div className="text-xs text-muted-foreground">Users</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Accuracy Rate</span>
                      <span className="font-medium">{dept.accuracy}%</span>
                    </div>
                    <Progress value={dept.accuracy} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  // Default analytics view
  return (
    <div className="space-y-6">
      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {systemMetrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className={`h-4 w-4 ${metric.trend === "down" ? "text-success" : "text-warning"}`} />
                  <Badge
                    variant={metric.trend === "down" ? "default" : "secondary"}
                    className={metric.trend === "down" ? "bg-success text-success-foreground" : ""}
                  >
                    {metric.change}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                <p className="text-xs text-muted-foreground">{metric.title}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Department Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {departmentStats.map((dept, index) => (
              <motion.div
                key={dept.name}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${dept.color}`} />
                    <span className="text-sm font-medium">{dept.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{dept.documents} docs</span>
                    <span>{dept.users} users</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Accuracy</span>
                    <span>{dept.accuracy}%</span>
                  </div>
                  <Progress value={dept.accuracy} className="h-2" />
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        {/* Processing Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Processing Statistics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Documents Processed Today</span>
                <span className="text-lg font-bold">342</span>
              </div>
              <Progress value={68} className="h-3" />
              <div className="text-xs text-muted-foreground">68% of daily target (500)</div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Queue Processing</span>
                <span className="text-lg font-bold">85%</span>
              </div>
              <Progress value={85} className="h-3" />
              <div className="text-xs text-muted-foreground">127 documents in queue</div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2,847</div>
                <div className="text-xs text-muted-foreground">This Week</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">11,234</div>
                <div className="text-xs text-muted-foreground">This Month</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            Real-time Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { time: "14:32", action: "Document processed", dept: "Train Operations", status: "success" },
              { time: "14:31", action: "OCR analysis completed", dept: "Engineering", status: "success" },
              { time: "14:30", action: "Compliance check failed", dept: "Safety", status: "error" },
              { time: "14:29", action: "Batch upload started", dept: "Operations", status: "processing" },
              { time: "14:28", action: "User login", dept: "Administration", status: "info" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50">
                <div className="text-xs text-muted-foreground w-12">{activity.time}</div>
                <div
                  className={`w-2 h-2 rounded-full ${
                    activity.status === "success"
                      ? "bg-success"
                      : activity.status === "error"
                        ? "bg-destructive"
                        : activity.status === "processing"
                          ? "bg-warning"
                          : "bg-info"
                  }`}
                />
                <div className="flex-1">
                  <span className="text-sm">{activity.action}</span>
                  <span className="text-xs text-muted-foreground ml-2">• {activity.dept}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
