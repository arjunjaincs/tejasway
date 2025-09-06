"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell, AlertTriangle, Info, CheckCircle, Clock, X, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

const alertsData = [
  {
    id: 1,
    type: "urgent" as const,
    titleKey: "alerts.systemMaintenance",
    descriptionKey: "alerts.systemMaintenanceDesc",
    time: "1 hour ago",
    isNew: true,
  },
  {
    id: 2,
    type: "warning" as const,
    titleKey: "alerts.highDocumentVolume",
    descriptionKey: "alerts.highDocumentVolumeDesc",
    time: "2 hours ago",
    isNew: true,
  },
  {
    id: 3,
    type: "info" as const,
    titleKey: "alerts.newFeatures",
    descriptionKey: "alerts.newFeaturesDesc",
    time: "5 hours ago",
    isNew: false,
  },
  {
    id: 4,
    type: "success" as const,
    titleKey: "alerts.backupCompleted",
    descriptionKey: "alerts.backupCompletedDesc",
    time: "12 hours ago",
    isNew: false,
  },
]

const getAlertIcon = (type: string) => {
  switch (type) {
    case "urgent":
      return AlertTriangle
    case "warning":
      return AlertTriangle
    case "success":
      return CheckCircle
    case "info":
      return Info
    default:
      return Bell
  }
}

const getAlertColor = (type: string) => {
  switch (type) {
    case "urgent":
      return "text-destructive"
    case "warning":
      return "text-warning"
    case "success":
      return "text-success"
    case "info":
      return "text-info"
    default:
      return "text-muted-foreground"
  }
}

export function AlertsDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useTranslation()
  const unreadCount = alertsData.filter((alert) => alert.isNew).length

  const handleCloseAndFlash = () => {
    setIsOpen(false)
  }

  const displayedAlerts = isExpanded ? alertsData : alertsData.slice(0, 3)

  return (
    <>
      <div className="relative">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="relative transition-all duration-300"
        >
          <Bell className="w-4 h-4 mr-2" />
          {unreadCount} {t("common.alerts")}
          {unreadCount > 0 && (
            <motion.span
              className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          )}
        </Button>

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 z-[9998]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseAndFlash}
              />

              {/* Dropdown */}
              <motion.div
                className="absolute right-0 top-full mt-2 w-96 z-[9999]"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="shadow-xl border bg-popover">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{t("common.systemAlerts")}</CardTitle>
                      <Button variant="ghost" size="icon" onClick={handleCloseAndFlash} className="h-6 w-6">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent
                    className={`transition-all duration-300 ${isExpanded ? "max-h-96" : "max-h-64"} overflow-y-auto`}
                  >
                    <div className="space-y-3">
                      {displayedAlerts.map((alert, index) => {
                        const Icon = getAlertIcon(alert.type)
                        return (
                          <motion.div
                            key={alert.id}
                            className="flex items-start gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Icon className={`w-4 h-4 mt-0.5 ${getAlertColor(alert.type)}`} />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <p className="text-sm font-medium text-foreground truncate">{t(alert.titleKey)}</p>
                                {alert.isNew && (
                                  <Badge variant="default" className="text-xs py-0 px-1.5">
                                    {t("common.new")}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground line-clamp-2">{t(alert.descriptionKey)}</p>
                              <div className="flex items-center gap-1 mt-1">
                                <Clock className="w-3 h-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{alert.time}</span>
                              </div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-4 bg-transparent"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-2" />
                          {t("common.showLess")}
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-2" />
                          {t("common.viewAllAlerts")} ({alertsData.length - 3} {t("common.more")})
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
