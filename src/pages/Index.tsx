"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Database, Bell, FileText, BarChart3, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThreeDBackground } from "@/components/3d-background"
import { LoginDropdown } from "@/components/login-dropdown"
import { BulletinCard } from "@/components/bulletin-card"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { AlertsDropdown } from "@/components/alerts-dropdown"
import { LanguageToggle } from "@/components/language-toggle"
import { NoticeBoard } from "@/components/notice-board"
import { KMRLInfoWidget } from "@/components/kmrl-info-widget"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { useTranslation } from "react-i18next"
import Dashboard from "./Dashboard"

const landingBulletins = [
  {
    type: "urgent" as const,
    title: "System Maintenance Tonight",
    description: "Scheduled maintenance from 11 PM to 3 AM. Limited access expected.",
    department: "IT Operations",
    timestamp: "1 hour ago",
    isNew: true,
  },
  {
    type: "info" as const,
    title: "New Document Format Support",
    description: "Now supporting Malayalam OCR and bilingual document processing.",
    department: "Engineering",
    timestamp: "3 hours ago",
    isNew: true,
  },
  {
    type: "success" as const,
    title: "Weekly Processing Complete",
    description: "Successfully processed 2,847 documents with 98.3% accuracy this week.",
    department: "Operations",
    timestamp: "6 hours ago",
  },
  {
    type: "warning" as const,
    title: "Server Capacity Alert",
    description: "Document storage approaching 80% capacity. Archive old files to free up space.",
    department: "IT Operations",
    timestamp: "8 hours ago",
  },
]

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState("")
  const { t } = useTranslation()

  useEffect(() => {
    const savedRole = sessionStorage.getItem("kmrl:role")
    const savedLoggedIn = sessionStorage.getItem("kmrl:isLoggedIn") === "true"
    if (savedLoggedIn && savedRole) {
      setUserRole(savedRole)
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = (role: string) => {
    setUserRole(role)
    setIsLoggedIn(true)
    sessionStorage.setItem("kmrl:role", role)
    sessionStorage.setItem("kmrl:isLoggedIn", "true")
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserRole("")
    sessionStorage.removeItem("kmrl:role")
    sessionStorage.removeItem("kmrl:isLoggedIn")
  }

  if (isLoggedIn) {
    return <Dashboard userRole={userRole} onLogout={handleLogout} />
  }

  return (
    <div className="min-h-screen bg-background relative overflow-visible">
      {/* 3D Background */}
      <ThreeDBackground />

      {/* Header */}
      <header className="relative z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <Database className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">{t("KMRL DocuFlow")}</h1>
                <p className="text-sm text-muted-foreground">{t("Employee Portal")}</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AlertsDropdown />
              <LanguageToggle />
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Welcome Section */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                {t("Welcome to")}{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">{t("KMRL Dashboard")}</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("Access your department's document dashboard and stay updated with the latest information.")}
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <LoginDropdown onLogin={handleLogin} />
              </motion.div>
            </motion.div>

            {/* Stats Overview */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Card className="bg-card-glass border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">2,847</div>
                  <p className="text-xs text-muted-foreground">{t("Documents")}</p>
                </CardContent>
              </Card>

              <Card className="bg-card-glass border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <BarChart3 className="w-8 h-8 text-success mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">98.3%</div>
                  <p className="text-xs text-muted-foreground">{t("Accuracy")}</p>
                </CardContent>
              </Card>

              <Card className="bg-card-glass border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 text-info mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">12</div>
                  <p className="text-xs text-muted-foreground">{t("Departments")}</p>
                </CardContent>
              </Card>

              <Card className="bg-card-glass border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <Shield className="w-8 h-8 text-warning mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">5</div>
                  <p className="text-xs text-muted-foreground">{t("Alerts")}</p>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="h-full"
              >
                <NoticeBoard />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="h-full"
              >
                <KMRLInfoWidget />
              </motion.div>
            </div>
          </div>

          {/* Latest Bulletins Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-card-glass border-border/50 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Bell className="h-5 w-5 text-primary" />
                  {t("Latest Bulletins")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="flex-1 space-y-4">
                  {landingBulletins.map((bulletin, index) => (
                    <BulletinCard key={index} {...bulletin} index={index} />
                  ))}
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  {t("View All Bulletins")}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 bg-background/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">{t("footer.quickLinks")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t("footer.employeeHandbook")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t("footer.itSupport")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t("footer.documentGuidelines")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t("footer.trainingResources")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">{t("footer.departments")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t("footer.trainOperations")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t("footer.engineering")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t("footer.safetyAndSecurity")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t("footer.administration")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">{t("footer.contact")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{t("footer.helpdesk")}: ext. 2500</li>
                <li>{t("footer.itSupport")}: ext. 2501</li>
                <li>{t("footer.emergencyLine")}: ext. 911</li>
                <li>{t("footer.hrDepartment")}: ext. 2502</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-4 text-center text-sm text-muted-foreground">
            {t("© 2025 KMRL DocuFlow - Employee Portal")}
          </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  )
}

export default Index
