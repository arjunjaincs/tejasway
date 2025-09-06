"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  FileText,
  Train,
  Database,
  Users,
  Folder,
  Server,
  Network,
  Settings,
  HardDrive,
  Zap,
  Cpu,
  Globe,
} from "lucide-react"
import React from "react"

export const ThreeDBackground = React.memo(function ThreeDBackground() {
  const prefersReduced = useReducedMotion()

  const [density, setDensity] = React.useState(() => {
    if (typeof window === "undefined") return { rows: 10, cols: 12 }
    const w = window.innerWidth
    const h = window.innerHeight
    if (w < 640) return { rows: 6, cols: 8 }
    if (w < 1024) return { rows: 8, cols: 10 }
    if (w < 1440) return { rows: 10, cols: 12 }
    return { rows: 12, cols: 14 }
  })

  React.useEffect(() => {
    let raf = 0
    const onResize = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const w = window.innerWidth
        const h = window.innerHeight
        setDensity(
          w < 640
            ? { rows: 6, cols: 8 }
            : w < 1024
              ? { rows: 8, cols: 10 }
              : w < 1440
                ? { rows: 10, cols: 12 }
                : { rows: 12, cols: 14 },
        )
      })
    }
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const floatingElements = React.useMemo(
    () => [
      { icon: Train, delay: 0, duration: 15, zone: 1, size: "w-12 h-12" },
      { icon: Network, delay: 1.2, duration: 18, zone: 2, size: "w-10 h-10" },
      { icon: Database, delay: 0.8, duration: 16, zone: 3, size: "w-11 h-11" },
      { icon: Server, delay: 2.1, duration: 17, zone: 4, size: "w-9 h-9" },
      { icon: HardDrive, delay: 3.2, duration: 15, zone: 5, size: "w-10 h-10" },
      { icon: FileText, delay: 1.8, duration: 19, zone: 6, size: "w-8 h-8" },
      { icon: Folder, delay: 4.1, duration: 16, zone: 7, size: "w-9 h-9" },
      { icon: Settings, delay: 0.5, duration: 20, zone: 8, size: "w-10 h-10" },
      { icon: Users, delay: 2.8, duration: 17, zone: 9, size: "w-11 h-11" },
      { icon: Zap, delay: 1.5, duration: 14, zone: 10, size: "w-8 h-8" },
      { icon: Cpu, delay: 3.7, duration: 18, zone: 11, size: "w-9 h-9" },
      { icon: Globe, delay: 2.3, duration: 16, zone: 12, size: "w-10 h-10" },
    ],
    [],
  )

  const getZonePosition = (zone: number) => {
    const positions = [
      { x: "8%", y: "12%" },
      { x: "85%", y: "18%" },
      { x: "22%", y: "35%" },
      { x: "75%", y: "45%" },
      { x: "45%", y: "15%" },
      { x: "12%", y: "65%" },
      { x: "88%", y: "75%" },
      { x: "65%", y: "28%" },
      { x: "32%", y: "82%" },
      { x: "55%", y: "55%" },
      { x: "18%", y: "88%" },
      { x: "78%", y: "8%" },
    ]
    return positions[zone - 1] || positions[0]
  }

  // Respect reduced motion by rendering a static, lightweight background
  if (prefersReduced) {
    return (
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          contain: "layout paint size",
          transform: "translateZ(0)",
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(6, 1fr)`,
              gridTemplateRows: `repeat(6, 1fr)`,
              height: "100%",
              width: "100%",
            }}
          >
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="border border-primary/15" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  const rows = density.rows
  const cols = density.cols
  const totalCells = rows * cols

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        contain: "layout paint size",
        transform: "translateZ(0)",
      }}
    >
      <div className="absolute inset-0 opacity-25">
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            height: "100%",
            width: "100%",
          }}
        >
          {Array.from({ length: totalCells }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-primary/12 transform-gpu"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{
                scale: [0.98, 1.02, 0.98],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 8,
                delay: (i % cols) * 0.05 + (Math.floor(i / cols) % rows) * 0.03,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {floatingElements.map((element, index) => {
        const position = getZonePosition(element.zone)
        return (
          <motion.div
            key={index}
            className="absolute transform-gpu"
            style={{
              left: position.x,
              top: position.y,
            }}
            initial={{
              opacity: 0.7,
              scale: 0.9,
              rotate: 0,
            }}
            animate={{
              y: [0, -15, 5, -8, 0],
              x: [0, 8, -3, 6, 0],
              opacity: [0.7, 0.95, 0.8, 0.9, 0.7],
              scale: [0.9, 1.1, 0.95, 1.05, 0.9],
              rotate: [0, 12, -6, 8, 0],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <element.icon
              className={`${element.size} ${
                [Train, Network, Globe].includes(element.icon)
                  ? "text-primary/40"
                  : [Database, Server, HardDrive, Cpu].includes(element.icon)
                    ? "text-accent/35"
                    : [Zap].includes(element.icon)
                      ? "text-warning/40"
                      : "text-muted-foreground/35"
              } drop-shadow-sm`}
            />
          </motion.div>
        )
      })}

      <motion.div
        className="absolute top-1/5 left-1/5 w-72 h-72 bg-gradient-to-r from-primary/25 to-accent/20 rounded-full blur-3xl transform-gpu"
        animate={{
          scale: [1, 1.15, 0.95, 1.08, 1],
          x: [0, 20, -10, 15, 0],
          y: [0, -15, 10, -8, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-l from-accent/25 to-primary/20 rounded-full blur-3xl transform-gpu"
        animate={{
          scale: [1.05, 0.9, 1.12, 0.98, 1.05],
          x: [0, -25, 15, -18, 0],
          y: [0, 12, -20, 8, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-2/3 left-2/3 w-48 h-48 bg-gradient-to-br from-warning/20 to-info/15 rounded-full blur-2xl transform-gpu"
        animate={{
          scale: [0.95, 1.1, 1.02, 0.88, 0.95],
          x: [0, 18, -12, 22, 0],
          y: [0, -18, 25, -10, 0],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100">
        {/* Horizontal flow lines */}
        <motion.path
          d="M0,25 Q25,20 50,25 T100,25"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          fill="none"
          strokeDasharray="2,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,75 Q25,70 50,75 T100,75"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          fill="none"
          strokeDasharray="2,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 12, delay: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Vertical connection lines */}
        <motion.path
          d="M25,0 Q20,25 25,50 T25,100"
          stroke="hsl(var(--accent))"
          strokeWidth="0.4"
          fill="none"
          strokeDasharray="1,3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 15, delay: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.path
          d="M75,0 Q70,25 75,50 T75,100"
          stroke="hsl(var(--accent))"
          strokeWidth="0.4"
          fill="none"
          strokeDasharray="1,3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 15, delay: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Central diamond pattern */}
        <motion.path
          d="M50,30 L65,45 L50,60 L35,45 Z"
          stroke="hsl(var(--info))"
          strokeWidth="0.3"
          fill="none"
          strokeDasharray="1,2"
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            pathLength: { duration: 8, repeat: Number.POSITIVE_INFINITY },
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
          style={{ transformOrigin: "50px 45px" }}
        />
      </svg>

      <div className="absolute inset-0 overflow-hidden">
        {/* Horizontal scanning lines */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`scan-${i}`}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent transform-gpu"
            style={{
              top: `${25 + i * 25}%`,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              delay: i * 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Vertical data streams */}
        {Array.from({ length: 2 }).map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-accent/25 to-transparent transform-gpu"
            style={{
              left: `${30 + i * 40}%`,
              top: "-10%",
            }}
            animate={{
              y: ["0%", "120%"],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: 6,
              delay: i * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary/30 rounded-full transform-gpu"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
})
