import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { 
  ChevronDown, 
  Users, 
  Train, 
  Shield, 
  Wrench, 
  Building, 
  UserCog 
} from "lucide-react"

interface LoginDropdownProps {
  onLogin: (role: string) => void
}

export function LoginDropdown({ onLogin }: LoginDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const departments = [
    { id: "train-ops", name: "Train Operations", icon: Train },
    { id: "engineering", name: "Engineering", icon: Wrench },
    { id: "safety", name: "Safety & Security", icon: Shield },
    { id: "operations", name: "Operations", icon: Building },
    { id: "compliance", name: "Compliance", icon: Users },
  ]

  const handleSelect = (role: string) => {
    setIsOpen(false)
    onLogin(role)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="default" 
          size="lg"
          className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
        >
          Employee Login
          <ChevronDown className="ml-2 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="center" 
        className="w-56 bg-card/95 backdrop-blur-sm border-border/50"
      >
        <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
          Select Department
        </div>
        <DropdownMenuSeparator />
        
        {departments.map((dept) => (
          <DropdownMenuItem
            key={dept.id}
            onClick={() => handleSelect(dept.id)}
            className="cursor-pointer hover:bg-accent/20 transition-colors"
          >
            <dept.icon className="mr-2 h-4 w-4 text-primary" />
            {dept.name}
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem
          onClick={() => handleSelect("admin")}
          className="cursor-pointer hover:bg-accent/20 transition-colors text-primary font-medium"
        >
          <UserCog className="mr-2 h-4 w-4 text-primary" />
          Administrator
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
