"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, BarChart3, Shield, Settings, LogOut, Menu, X, Home, Users, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { AlertsDropdown } from "@/components/alerts-dropdown"
import { LanguageToggle } from "@/components/language-toggle"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { OverviewPage } from "@/components/dashboard-pages/overview-page"
import { CompliancePage } from "@/components/dashboard-pages/compliance-page"
import { AnalyticsPage } from "@/components/dashboard-pages/analytics-page"
import { DocumentsPage } from "@/components/dashboard-pages/documents-page"
import { SettingsPage } from "@/components/dashboard-pages/settings-page"
import { useTranslation } from "react-i18next"

interface DashboardProps {
  userRole: string
  onLogout: () => void
}

const roleConfig = {
  admin: {
    nameKey: "adminRole",
    titleKey: "adminTitle",
    subtitleKey: "adminSubtitle",
  },
  "train-ops": {
    nameKey: "trainOpsRole",
    titleKey: "trainOpsTitle",
    subtitleKey: "trainOpsSubtitle",
  },
  engineering: {
    nameKey: "engineeringRole",
    titleKey: "engineeringTitle",
    subtitleKey: "engineeringSubtitle",
  },
  safety: {
    nameKey: "safetyRole",
    titleKey: "safetyTitle",
    subtitleKey: "safetySubtitle",
  },
  operations: {
    nameKey: "operationsRole",
    titleKey: "operationsTitle",
    subtitleKey: "operationsSubtitle",
  },
  compliance: {
    nameKey: "complianceRole",
    titleKey: "complianceTitle",
    subtitleKey: "complianceSubtitle",
  },
}

export default function Dashboard({ userRole, onLogout }: DashboardProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activePage, setActivePage] = useState("Overview")
  const { t } = useTranslation()
  const effectiveRole = userRole || (typeof window !== "undefined" ? sessionStorage.getItem("kmrl:role") || "" : "")
  const config = roleConfig[effectiveRole as keyof typeof roleConfig] || roleConfig["train-ops"]

  const navigationItems = [
    { icon: Home, label: t("Overview"), page: "Overview" },
    { icon: Shield, label: t("Compliance"), page: "Compliance" },
    ...(effectiveRole === "admin"
      ? [
          { icon: BarChart3, label: t("Analytics"), page: "Analytics" },
          { icon: Users, label: t("All Departments"), page: "AllDepartments" },
        ]
      : [{ icon: FileText, label: t("My Documents"), page: "Documents" }]),
    { icon: Settings, label: t("Settings"), page: "Settings" },
  ]

  const renderActivePage = () => {
    switch (activePage) {
      case "Overview":
        return <OverviewPage userRole={effectiveRole} />
      case "Compliance":
        return <CompliancePage />
      case "Analytics":
        return <AnalyticsPage />
      case "AllDepartments":
        return <AnalyticsPage viewMode="departments" />
      case "Documents":
        return <DocumentsPage />
      case "Settings":
        return <SettingsPage />
      default:
        return <OverviewPage userRole={effectiveRole} />
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.5,
            }}
            className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col shadow-lg"
          >
            {/* Sidebar Header */}
            <div className="p-4 border-b border-sidebar-border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-sidebar-foreground">KMRL Dashboard</h3>
                  <p className="text-xs text-sidebar-foreground/60">{t("Document Intelligence")}</p>
                </div>
              </div>
            </div>

            {/* User Info */}
            <div className="p-4 border-b border-sidebar-border">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-sidebar-foreground">{t(config.nameKey)}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={onLogout}
                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent/50 border-sidebar-border bg-transparent"
              >
                <LogOut className="w-4 h-4 mr-2" />
                {t("Logout")}
              </Button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
              <div className="space-y-1">
                {navigationItems.map((item) => (
                  <Button
                    key={item.label}
                    type="button"
                    variant={activePage === item.page ? "default" : "ghost"}
                    className={`w-full justify-start transition-all duration-200 ${
                      activePage === item.page
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                    }`}
                    onClick={() => setActivePage(item.page)}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                ))}
              </div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        className="flex-1 flex flex-col min-w-0"
        animate={{
          marginLeft: isSidebarOpen ? 0 : 0,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 200,
          duration: 0.5,
        }}
      >
        {/* Header */}
        <header className="bg-background border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="hover:bg-accent transition-colors duration-200"
              >
                {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
              <div>
                <h1 className="text-xl font-semibold text-foreground">{t(config.titleKey)}</h1>
                <p className="text-sm text-muted-foreground">{t(config.subtitleKey)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <AlertsDropdown />
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderActivePage()}
          </motion.div>
        </main>
      </motion.div>

      <ChatbotWidget />
    </div>
  )
}
