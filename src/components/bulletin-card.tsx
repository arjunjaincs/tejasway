import { motion } from "framer-motion"
import { 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  Clock,
  ExternalLink
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type BulletinType = "urgent" | "warning" | "success" | "info"

interface BulletinCardProps {
  type: BulletinType
  title: string
  description: string
  department: string
  timestamp: string
  isNew?: boolean
  index: number
}

const bulletinConfig = {
  urgent: {
    icon: AlertTriangle,
    className: "border-destructive/50 bg-destructive/5",
    badgeVariant: "destructive" as const,
  },
  warning: {
    icon: Clock,
    className: "border-warning/50 bg-warning/5",
    badgeVariant: "secondary" as const,
  },
  success: {
    icon: CheckCircle,
    className: "border-success/50 bg-success/5",
    badgeVariant: "default" as const,
  },
  info: {
    icon: Info,
    className: "border-info/50 bg-info/5",
    badgeVariant: "outline" as const,
  },
}

export function BulletinCard({
  type,
  title,
  description,
  department,
  timestamp,
  isNew = false,
  index
}: BulletinCardProps) {
  const config = bulletinConfig[type]
  const Icon = config.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className={`${config.className} hover:shadow-card transition-all duration-300 cursor-pointer group`}>
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <Icon className={`h-4 w-4 text-${type === 'urgent' ? 'destructive' : type === 'success' ? 'success' : type === 'warning' ? 'warning' : 'info'}`} />
              <Badge variant={config.badgeVariant} className="text-xs">
                {type.toUpperCase()}
              </Badge>
              {isNew && (
                <Badge variant="default" className="text-xs bg-primary">
                  NEW
                </Badge>
              )}
            </div>
            <span className="text-xs text-muted-foreground">{timestamp}</span>
          </div>
          
          <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h4>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-medium">
              {department}
            </span>
            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
              Read More
              <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
