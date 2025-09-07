"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Bell, FileText, BarChart3, Shield, Users, Heart } from "lucide-react"
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

const teamMembers = [
  "Arjun Jain",
  "Nimish Ratra",
  "Aditya Kumar Jha",
  "Nishtha Jain",
  "Ashita Chaudhary",
  "Sarthak Mehra", // Keeping only the 6 actual team member names
]

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState("")
  const [teamPopups, setTeamPopups] = useState<
    Array<{ id: number; name: string; x: number; y: number; delay?: number }>
  >([])
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

  const createConfetti = () => {
    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#dda0dd", "#98d8c8"]

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div")
      confetti.style.position = "fixed"
      confetti.style.left = Math.random() * 100 + "vw"
      confetti.style.top = "-10px"
      confetti.style.width = "10px"
      confetti.style.height = "10px"
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      confetti.style.borderRadius = "50%"
      confetti.style.pointerEvents = "none"
      confetti.style.zIndex = "9999"
      confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear forwards`

      document.body.appendChild(confetti)

      setTimeout(() => {
        confetti.remove()
      }, 5000)
    }
  }

  const handleTejasWayClick = () => {
    createConfetti()

    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const bubbleWidth = 250
    const bubbleHeight = 80

    const newPopups = teamMembers.map((member, index) => {
      // Create a more even distribution pattern
      const cols = Math.ceil(Math.sqrt(teamMembers.length))
      const rows = Math.ceil(teamMembers.length / cols)

      const col = index % cols
      const row = Math.floor(index / cols)

      // Calculate base positions with some randomness
      const baseX = (screenWidth / (cols + 1)) * (col + 1) - bubbleWidth / 2
      const baseY = (screenHeight / (rows + 2)) * (row + 1) + 100

      // Add random offset for natural look
      const randomOffsetX = (Math.random() - 0.5) * 100
      const randomOffsetY = (Math.random() - 0.5) * 80

      return {
        id: Date.now() + index,
        name: member,
        x: Math.max(25, Math.min(screenWidth - bubbleWidth - 25, baseX + randomOffsetX)),
        y: Math.max(100, Math.min(screenHeight - bubbleHeight - 100, baseY + randomOffsetY)),
        delay: index * 0.15, // Slightly increased stagger for better visual flow
      }
    })

    setTeamPopups((prev) => [...prev, ...newPopups])

    // Remove popups after 4 seconds with smooth fade out
    setTimeout(() => {
      setTeamPopups((prev) => prev.filter((popup) => !newPopups.some((newPopup) => newPopup.id === popup.id)))
    }, 4000)
  }

  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      @keyframes confetti-fall {
        0% {
          transform: translateY(-10px) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(720deg);
          opacity: 0;
        }
      }
      
      @keyframes bubble-float {
        0% {
          transform: scale(0) translateY(20px) rotate(-5deg);
          opacity: 0;
        }
        20% {
          transform: scale(1.1) translateY(-10px) rotate(2deg);
          opacity: 1;
        }
        50% {
          transform: scale(1) translateY(-20px) rotate(-1deg);
          opacity: 1;
        }
        80% {
          transform: scale(1.05) translateY(-15px) rotate(1deg);
          opacity: 1;
        }
        100% {
          transform: scale(0.8) translateY(-30px) rotate(0deg);
          opacity: 0;
        }
      }
      
      @keyframes bubble-drift {
        0%, 100% {
          transform: translateX(0px);
        }
        25% {
          transform: translateX(15px);
        }
        75% {
          transform: translateX(-10px);
        }
      }
      
      @keyframes sparkle {
        0%, 100% {
          opacity: 0;
          transform: scale(0);
        }
        50% {
          opacity: 1;
          transform: scale(1);
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  if (isLoggedIn) {
    return <Dashboard userRole={userRole} onLogout={handleLogout} />
  }

  return (
    <div className="min-h-screen bg-background relative overflow-visible">
      {/* 3D Background */}
      <ThreeDBackground />

      {teamPopups.map((popup, index) => (
        <motion.div
          key={popup.id}
          className="fixed z-[10000] pointer-events-none"
          style={{ left: popup.x, top: popup.y }}
          initial={{ scale: 0, y: 20, opacity: 0, rotate: -5 }}
          animate={{
            scale: [0, 1.1, 1, 1.05, 0.8],
            y: [20, -10, -20, -15, -30],
            opacity: [0, 1, 1, 1, 0],
            rotate: [-5, 2, -1, 1, 0],
            x: [0, 15, -10, 0],
          }}
          transition={{
            duration: 4,
            delay: popup.delay || 0,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        >
          <div className="relative">
            {/* Sparkle effects around the bubble */}
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-1 -right-2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1 -right-3 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>

            {/* Main bubble */}
            <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-[3px] rounded-full shadow-2xl animate-pulse">
              <div className="bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full animate-spin"></div>
                  <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent whitespace-nowrap">
                    {popup.name}
                  </span>
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>

            {/* Floating sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-0 right-1/4 w-0.5 h-0.5 bg-yellow-300 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 left-0 w-0.5 h-0.5 bg-pink-300 rounded-full animate-bounce"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Header */}
      <header className="relative z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-2 sm:gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center overflow-hidden">
                <img src="/kmrl-logo.jpg" alt="KMRL Tejasway Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-foreground">{t("KMRL Dashboard")}</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">{t("Employee Portal")}</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 sm:gap-3"
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
      <main className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Welcome Section */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
                {t("Welcome to")}{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">{t("KMRL Dashboard")}</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
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
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Card className="bg-card-glass border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-3 sm:p-4 text-center">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-foreground">2,847</div>
                  <p className="text-xs text-muted-foreground">{t("Documents")}</p>
                </CardContent>
              </Card>

              <Card className="bg-card-glass border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-3 sm:p-4 text-center">
                  <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-success mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-foreground">98.3%</div>
                  <p className="text-xs text-muted-foreground">{t("Accuracy")}</p>
                </CardContent>
              </Card>

              <Card className="bg-card-glass border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-3 sm:p-4 text-center">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-info mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-foreground">12</div>
                  <p className="text-xs text-muted-foreground">{t("Departments")}</p>
                </CardContent>
              </Card>

              <Card className="bg-card-glass border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-3 sm:p-4 text-center">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-warning mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-foreground">5</div>
                  <p className="text-xs text-muted-foreground">{t("Alerts")}</p>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                <CardTitle className="flex items-center gap-2 text-foreground text-base sm:text-lg">
                  <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  {t("Latest Bulletins")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col p-4 sm:p-6">
                <div className="flex-1 space-y-4">
                  {landingBulletins.map((bulletin, index) => (
                    <BulletinCard key={index} {...bulletin} index={index} />
                  ))}
                </div>
                <Button variant="outline" className="w-full bg-transparent text-sm">
                  {t("View All Bulletins")}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center overflow-hidden">
                  <img src="/kmrl-logo.jpg" alt="KMRL Tejasway Logo" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-foreground">KMRL Dashboard</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empowering employees with seamless document management and real-time collaboration tools.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                {t("footer.quickLinks")}
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {t("footer.employeeHandbook")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {t("footer.itSupport")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {t("footer.documentGuidelines")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {t("footer.trainingResources")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                {t("footer.departments")}
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {t("footer.trainOperations")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {t("footer.engineering")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {t("footer.safetyAndSecurity")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {t("footer.administration")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                {t("footer.contact")}
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-success rounded-full"></span>
                  {t("footer.helpdesk")}: ext. 2500
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-info rounded-full"></span>
                  {t("footer.itSupport")}: ext. 2501
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-warning rounded-full"></span>
                  {t("footer.emergencyLine")}: ext. 911
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  {t("footer.hrDepartment")}: ext. 2502
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/30 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="text-center md:text-left">
                <div className="text-sm text-muted-foreground mb-3">
                  © 2025 KMRL Dashboard - Employee Portal. All rights reserved.
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start flex-wrap">
                  <span className="text-sm text-muted-foreground">Built with</span>
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">by team</span>
                  <motion.button
                    onClick={handleTejasWayClick}
                    className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200 underline decoration-2 underline-offset-2 hover:decoration-primary/60"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Tejasway
                  </motion.button>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>Made in India</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                <span>Powered by Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  )
}

export default Index
