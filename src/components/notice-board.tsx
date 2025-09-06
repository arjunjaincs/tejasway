"use client"

import { motion } from "framer-motion"
import { MessageSquare, Calendar, Target, AlertCircle, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const notices = [
  {
    id: 1,
    type: "holiday" as const,
    title: "Republic Day Holiday",
    message: "Office will remain closed on January 26th, 2025. Regular operations resume on January 27th.",
    date: "Jan 26, 2025",
    priority: "info",
    isNew: true,
  },
  {
    id: 2,
    type: "goal" as const,
    title: "Daily Processing Target",
    message: "Today's goal: Process 500+ documents with 98%+ accuracy. Current progress: 342/500 (68%)",
    date: "Today",
    priority: "normal",
    isNew: false,
  },
  {
    id: 3,
    type: "announcement" as const,
    title: "New Safety Training",
    message: "Mandatory safety training session scheduled for all departments. Register by January 20th.",
    date: "Jan 15-20, 2025",
    priority: "urgent",
    isNew: true,
  },
  {
    id: 4,
    type: "reminder" as const,
    title: "Monthly Report Submission",
    message: "Department monthly reports due by January 31st. Submit to your respective HODs.",
    date: "Due: Jan 31",
    priority: "normal",
    isNew: false,
  },
]

const getNoticeIcon = (type: string) => {
  switch (type) {
    case "holiday":
      return Calendar
    case "goal":
      return Target
    case "announcement":
      return MessageSquare
    case "reminder":
      return Clock
    default:
      return AlertCircle
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "urgent":
      return "text-destructive"
    case "normal":
      return "text-primary"
    case "info":
      return "text-info"
    default:
      return "text-muted-foreground"
  }
}

export function NoticeBoard() {
  return (
    <Card className="bg-card-glass border-border/50 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <MessageSquare className="h-5 w-5 text-primary" />
          Admin Notice Board
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 flex-1 flex flex-col">
        <div className="flex-1 space-y-4">
          {notices.map((notice, index) => {
            const Icon = getNoticeIcon(notice.type)
            return (
              <motion.div
                key={notice.id}
                className="flex items-start gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon className={`w-4 h-4 mt-0.5 ${getPriorityColor(notice.priority)}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-medium text-foreground truncate">{notice.title}</h4>
                    {notice.isNew && (
                      <Badge variant="default" className="text-xs py-0 px-1.5">
                        New
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-1">{notice.message}</p>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{notice.date}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        <Button variant="outline" className="w-full bg-transparent">
          View All Notices
        </Button>
      </CardContent>
    </Card>
  )
}
