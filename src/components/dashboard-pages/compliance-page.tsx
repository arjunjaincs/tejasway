"use client"

import { motion } from "framer-motion"
import { Shield, AlertTriangle, CheckCircle, Clock, FileText, Download, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useTranslation } from "react-i18next"

const complianceData = [
  {
    id: 1,
    title: "Safety Protocol Compliance",
    status: "compliant",
    score: 98,
    lastUpdated: "2 days ago",
    documents: 45,
    issues: 0,
  },
  {
    id: 2,
    title: "Environmental Standards",
    status: "warning",
    score: 85,
    lastUpdated: "1 week ago",
    documents: 23,
    issues: 2,
  },
  {
    id: 3,
    title: "Data Protection (GDPR)",
    status: "compliant",
    score: 95,
    lastUpdated: "3 days ago",
    documents: 18,
    issues: 0,
  },
  {
    id: 4,
    title: "Ministry Guidelines",
    status: "critical",
    score: 72,
    lastUpdated: "2 weeks ago",
    documents: 67,
    issues: 5,
  },
]

const recentAudits = [
  {
    id: 1,
    title: "Q4 Safety Audit",
    date: "Dec 15, 2024",
    status: "passed",
    score: 94,
  },
  {
    id: 2,
    title: "Environmental Compliance Review",
    date: "Nov 28, 2024",
    status: "pending",
    score: null,
  },
  {
    id: 3,
    title: "Data Security Assessment",
    date: "Nov 10, 2024",
    status: "passed",
    score: 97,
  },
]

export function CompliancePage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      {/* Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Shield className="h-4 w-4 text-success" />
              <Badge variant="default" className="bg-success text-success-foreground">
                +2%
              </Badge>
            </div>
            <div className="text-2xl font-bold text-foreground">92%</div>
            <p className="text-xs text-muted-foreground">{t("dashboard.overallCompliance")}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <Badge variant="destructive">7</Badge>
            </div>
            <div className="text-2xl font-bold text-foreground">7</div>
            <p className="text-xs text-muted-foreground">{t("dashboard.activeIssues")}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <FileText className="h-4 w-4 text-info" />
              <Badge variant="outline">153</Badge>
            </div>
            <div className="text-2xl font-bold text-foreground">153</div>
            <p className="text-xs text-muted-foreground">{t("dashboard.documentsReviewed")}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <Badge variant="outline">3</Badge>
            </div>
            <div className="text-2xl font-bold text-foreground">3</div>
            <p className="text-xs text-muted-foreground">{t("dashboard.daysUntilDeadline")}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance Areas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              {t("dashboard.complianceAreas")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {complianceData.map((item) => (
              <motion.div
                key={item.id}
                className="p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: item.id * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">{item.title}</h4>
                  <Badge
                    variant={
                      item.status === "compliant" ? "default" : item.status === "warning" ? "warning" : "destructive"
                    }
                    className={item.status === "compliant" ? "bg-success text-success-foreground" : ""}
                  >
                    {t(`dashboard.status.${item.status}`)}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{t("dashboard.complianceScore")}</span>
                    <span>{item.score}%</span>
                  </div>
                  <Progress value={item.score} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>
                      {item.documents} {t("dashboard.documents")}
                    </span>
                    <span>
                      {item.issues} {t("dashboard.issues")}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Audits */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              {t("dashboard.recentAudits")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAudits.map((audit) => (
              <div key={audit.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{audit.title}</h4>
                  <p className="text-xs text-muted-foreground">{audit.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  {audit.score && <span className="text-sm font-medium">{audit.score}%</span>}
                  <Badge
                    variant={
                      audit.status === "passed" ? "default" : audit.status === "pending" ? "warning" : "destructive"
                    }
                    className={audit.status === "passed" ? "bg-success text-success-foreground" : ""}
                  >
                    {t(`dashboard.status.${audit.status}`)}
                  </Badge>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Eye className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              {t("dashboard.generateComplianceReport")}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
