"use client"

import { motion } from "framer-motion"
import { Train, Users, MapPin, Clock, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-toggle"

const kmrlData = [
  {
    icon: Train,
    label: "Active Trains",
    value: "24",
    change: "+2",
    status: "operational",
  },
  {
    icon: Users,
    label: "Daily Ridership",
    value: "85,432",
    change: "+12.3%",
    status: "up",
  },
  {
    icon: MapPin,
    label: "Stations",
    value: "22",
    change: "0",
    status: "stable",
  },
  {
    icon: Clock,
    label: "On-Time Performance",
    value: "96.8%",
    change: "+1.2%",
    status: "up",
  },
  {
    icon: Activity,
    label: "System Health",
    value: "Optimal",
    change: "Good",
    status: "operational",
  },
]

const kmrlNews = [
  {
    title: "New Train Service Added",
    description: "Additional service during peak hours starting next week",
    time: "2 hours ago",
    type: "success",
  },
  {
    title: "Station Upgrade Complete",
    description: "Aluva station renovation completed with new facilities",
    time: "1 day ago",
    type: "info",
  },
  {
    title: "Weekend Schedule Change",
    description: "Modified timings for weekend services this month",
    time: "3 days ago",
    type: "warning",
  },
]

export function KMRLInfoWidget() {
  const { t } = useLanguage()

  return (
    <Card className="bg-card-glass border-border/50 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Train className="h-5 w-5 text-primary" />
          KMRL Metro Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 flex-1 flex flex-col">
        {/* Metro Stats */}
        <div className="grid grid-cols-2 gap-2">
          {kmrlData.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.label}
              className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <item.icon className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium text-foreground">{item.label}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-foreground">{item.value}</span>
                <Badge
                  variant={item.status === "up" ? "default" : item.status === "operational" ? "default" : "secondary"}
                  className={`text-xs py-0 px-1.5 ${
                    item.status === "up"
                      ? "bg-success text-success-foreground"
                      : item.status === "operational"
                        ? "bg-primary text-primary-foreground"
                        : ""
                  }`}
                >
                  {item.change}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Health */}
        <motion.div
          className="p-3 rounded-lg bg-success/10 border border-success/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-foreground">System Status</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-success">All Systems Operational</span>
            <Badge variant="default" className="bg-success text-success-foreground">
              ✓ Good
            </Badge>
          </div>
        </motion.div>

        {/* KMRL Headlines */}
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-foreground mb-2">KMRL Headlines</h4>
          <div className="space-y-2">
            {kmrlNews.map((news, index) => (
              <motion.div
                key={index}
                className="p-2 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-start gap-2">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      news.type === "success" ? "bg-success" : news.type === "warning" ? "bg-warning" : "bg-info"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">{news.title}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2">{news.description}</p>
                    <span className="text-xs text-muted-foreground">{news.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t text-center">
          <p className="text-xs text-muted-foreground">
            {t("Last updated")}: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
