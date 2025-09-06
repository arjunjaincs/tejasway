"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useTranslation } from "react-i18next"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm your KMRL DocuFlow assistant. How can I help you today?",
    isBot: true,
    timestamp: new Date(),
  },
]

const botResponses = [
  "I can help you with document processing, system alerts, and general KMRL information.",
  "For document uploads, please use the Employee Login to access your dashboard.",
  "System maintenance is scheduled from 11 PM to 3 AM tonight. Limited access expected.",
  "Our OCR system now supports Malayalam text processing with 98.3% accuracy.",
  "For urgent issues, please contact your department administrator or IT support.",
]

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const { t } = useTranslation()

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chatbot Avatar */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Button
                onClick={() => setIsOpen(true)}
                className="w-14 h-14 rounded-full bg-gradient-primary shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chatbox */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-20 right-0 w-80 h-96"
              initial={{ scale: 0, opacity: 0, originX: 1, originY: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Card className="w-full h-full shadow-2xl border bg-background">
                <CardHeader className="pb-3 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-sm">{t("chatbot.title")}</CardTitle>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="p-0 flex flex-col h-full">
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          className={`flex gap-2 ${message.isBot ? "justify-start" : "justify-end"}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {message.isBot && (
                            <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <Bot className="w-3 h-3 text-primary-foreground" />
                            </div>
                          )}
                          <div
                            className={`max-w-[70%] p-3 rounded-lg text-sm ${
                              message.isBot ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
                            }`}
                          >
                            {message.text}
                          </div>
                          {!message.isBot && (
                            <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <User className="w-3 h-3 text-accent-foreground" />
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>

                  <div className="p-4 border-t bg-background">
                    <div className="flex gap-2">
                      <Input
                        placeholder={t("chatbot.placeholder")}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1 bg-background"
                      />
                      <Button size="icon" onClick={handleSendMessage} disabled={!inputValue.trim()}>
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
