"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FileText,
  BarChart3,
  Shield,
  Clock,
  Info,
  AlertTriangle,
  TrendingUp,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BulletinCard } from "@/components/bulletin-card"
import { useTranslation } from "react-i18next"

interface OverviewPageProps {
  userRole: string
}

const sampleBulletins = [
  {
    type: "urgent" as const,
    title: "New Safety Protocol Implementation",
    description: "Updated emergency evacuation procedures for all metro stations effective immediately.",
    department: "Safety & Security",
    timestamp: "2 hours ago",
    isNew: true,
  },
  {
    type: "warning" as const,
    title: "Maintenance Schedule Update",
    description: "Track maintenance scheduled for Sector 1-3 this weekend. Service adjustments required.",
    department: "Engineering",
    timestamp: "5 hours ago",
    isNew: true,
  },
  {
    type: "success" as const,
    title: "Document Processing Achievement",
    description: "Successfully processed 2,847 documents this week. 98.3% accuracy rate achieved.",
    department: "Operations",
    timestamp: "1 day ago",
  },
  {
    type: "info" as const,
    title: "Regulatory Compliance Update",
    description: "New guidelines from Ministry of Housing & Urban Affairs received and under review.",
    department: "Compliance",
    timestamp: "2 days ago",
  },
  {
    type: "warning" as const,
    title: "Server Maintenance Scheduled",
    description: "Planned server maintenance this Sunday from 2 AM to 6 AM. Temporary service interruption expected.",
    department: "IT Operations",
    timestamp: "3 days ago",
  },
]

const systemAlerts = [
  {
    type: "warning",
    title: "High Document Volume",
    description: "Processing queue at 85% capacity",
    color: "bg-warning",
  },
  {
    type: "success",
    title: "Backup Completed",
    description: "Daily backup finished successfully",
    color: "bg-success",
  },
  {
    type: "info",
    title: "System Update Available",
    description: "New OCR engine update ready for deployment",
    color: "bg-info",
  },
  {
    type: "warning",
    title: "Storage Alert",
    description: "Document storage at 78% capacity",
    color: "bg-warning",
  },
  {
    type: "success",
    title: "Security Scan Complete",
    description: "Weekly security scan completed with no issues",
    color: "bg-success",
  },
]

const metricsData = {
  admin: [
    { title: "Documents Processed", value: "2,847", change: "+12.3%", icon: FileText },
    { title: "Processing Accuracy", value: "98.3%", change: "+2.1%", icon: BarChart3 },
    { title: "Active Departments", value: "12", change: "0", icon: Users },
    { title: "Avg Processing Time", value: "2.4s", change: "-15.2%", icon: Clock },
  ],
  default: [
    { title: "My Documents", value: "127", change: "+5", icon: FileText },
    { title: "Pending Reviews", value: "23", change: "-2", icon: Clock },
    { title: "Compliance Score", value: "96%", change: "+1%", icon: Shield },
    { title: "Recent Updates", value: "8", change: "+3", icon: TrendingUp },
  ],
}

export function OverviewPage({ userRole }: OverviewPageProps) {
  const { t } = useTranslation()
  const [alertsExpanded, setAlertsExpanded] = useState(false)
  const metrics = userRole === "admin" ? metricsData.admin : metricsData.default

  const visibleAlerts = alertsExpanded ? systemAlerts : systemAlerts.slice(0, 2)

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-card transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <metric.icon className="h-4 w-4 text-muted-foreground" />
                  <Badge
                    variant={
                      metric.change.startsWith("+")
                        ? "default"
                        : metric.change.startsWith("-")
                          ? "destructive"
                          : "secondary"
                    }
                    className="text-xs"
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
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Latest Bulletins */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                {t("Latest Bulletins")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sampleBulletins.map((bulletin, index) => (
                <BulletinCard key={index} {...bulletin} index={index} />
              ))}
              <Button variant="outline" className="w-full bg-transparent">
                {t("View All Bulletins")}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats & System Alerts */}
        <div className="space-y-4">
          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                {t("Quick Stats")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{t("Pending Reviews")}</span>
                <Badge variant="outline">23</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{t("Compliance Issues")}</span>
                <Badge variant="destructive">3</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{t("System Health")}</span>
                <Badge variant="default" className="bg-success text-success-foreground">
                  {t("Optimal")}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{t("Storage Used")}</span>
                <span className="text-sm font-medium">67.3%</span>
              </div>
            </CardContent>
          </Card>

          {/* System Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                {t("System Alerts")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <AnimatePresence>
                {visibleAlerts.map((alert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-2"
                  >
                    <div className={`w-2 h-2 rounded-full ${alert.color} mt-2`}></div>
                    <div>
                      <p className="text-sm font-medium">{alert.title}</p>
                      <p className="text-xs text-muted-foreground">{alert.description}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-transparent gap-2"
                onClick={() => setAlertsExpanded(!alertsExpanded)}
              >
                {alertsExpanded ? (
                  <>
                    {t("Show Less")}
                    <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    {t("View All Alerts")}
                    <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                {t("Performance Metrics")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{t("Daily Processing")}</span>
                <div className="text-right">
                  <div className="text-sm font-medium">847</div>
                  <div className="text-xs text-success">+12%</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{t("Error Rate")}</span>
                <div className="text-right">
                  <div className="text-sm font-medium">1.7%</div>
                  <div className="text-xs text-success">-0.3%</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{t("Response Time")}</span>
                <div className="text-right">
                  <div className="text-sm font-medium">2.4s</div>
                  <div className="text-xs text-success">-15%</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{t("User Satisfaction")}</span>
                <div className="text-right">
                  <div className="text-sm font-medium">4.8/5</div>
                  <div className="text-xs text-success">+0.2</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
