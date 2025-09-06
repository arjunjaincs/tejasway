"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const stockData = [
  {
    symbol: "NIFTY 50",
    name: "Nifty 50",
    price: "21,456.75",
    change: "+234.50",
    changePercent: "+1.11%",
    trend: "up",
  },
  {
    symbol: "SENSEX",
    name: "BSE Sensex",
    price: "70,842.33",
    change: "+412.18",
    changePercent: "+0.58%",
    trend: "up",
  },
  {
    symbol: "BANKNIFTY",
    name: "Bank Nifty",
    price: "45,123.80",
    change: "-156.25",
    changePercent: "-0.35%",
    trend: "down",
  },
  {
    symbol: "RELIANCE",
    name: "Reliance Industries",
    price: "2,847.60",
    change: "+23.45",
    changePercent: "+0.83%",
    trend: "up",
  },
  {
    symbol: "TCS",
    name: "Tata Consultancy Services",
    price: "3,456.90",
    change: "-12.30",
    changePercent: "-0.35%",
    trend: "down",
  },
]

export function StockMarketWidget() {
  return (
    <Card className="bg-card-glass border-border/50 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <BarChart3 className="h-5 w-5 text-primary" />
          Market Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 flex-1 flex flex-col">
        <div className="flex-1 space-y-3">
          {stockData.map((stock, index) => (
            <motion.div
              key={stock.symbol}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">{stock.symbol}</span>
                  {stock.trend === "up" ? (
                    <TrendingUp className="w-3 h-3 text-success" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-destructive" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground truncate">{stock.name}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-foreground">₹{stock.price}</div>
                <div className="flex items-center gap-1">
                  <Badge
                    variant={stock.trend === "up" ? "default" : "destructive"}
                    className={`text-xs py-0 px-1.5 ${stock.trend === "up" ? "bg-success text-success-foreground" : ""}`}
                  >
                    {stock.changePercent}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="pt-2 border-t text-center">
          <p className="text-xs text-muted-foreground">Last updated: {new Date().toLocaleTimeString()}</p>
        </div>
      </CardContent>
    </Card>
  )
}
