"use client"

import { motion } from "framer-motion"
import { FileText, Search, Filter, Download, Eye, Edit, Trash2, Upload, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useTranslation } from "react-i18next"

const documents = [
  {
    id: 1,
    name: "Safety Protocol Update Q4 2024",
    type: "PDF",
    size: "2.4 MB",
    status: "processed",
    accuracy: 98.5,
    uploadDate: "2024-12-15",
    department: "Safety & Security",
  },
  {
    id: 2,
    name: "Engineering Maintenance Schedule",
    type: "DOCX",
    size: "1.8 MB",
    status: "processing",
    accuracy: null,
    uploadDate: "2024-12-14",
    department: "Engineering",
  },
  {
    id: 3,
    name: "Compliance Report November",
    type: "PDF",
    size: "3.2 MB",
    status: "processed",
    accuracy: 97.2,
    uploadDate: "2024-12-13",
    department: "Compliance",
  },
  {
    id: 4,
    name: "Train Operations Manual v2.1",
    type: "PDF",
    size: "5.7 MB",
    status: "processed",
    accuracy: 99.1,
    uploadDate: "2024-12-12",
    department: "Train Operations",
  },
  {
    id: 5,
    name: "Emergency Response Procedures",
    type: "DOCX",
    size: "2.1 MB",
    status: "failed",
    accuracy: null,
    uploadDate: "2024-12-11",
    department: "Safety & Security",
  },
]

export function DocumentsPage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      {/* Document Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <FileText className="h-4 w-4 text-primary" />
              <Badge variant="default">+5</Badge>
            </div>
            <div className="text-2xl font-bold text-foreground">127</div>
            <p className="text-xs text-muted-foreground">Total Documents</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Clock className="h-4 w-4 text-warning" />
              <Badge variant="outline">23</Badge>
            </div>
            <div className="text-2xl font-bold text-foreground">23</div>
            <p className="text-xs text-muted-foreground">Pending Review</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Eye className="h-4 w-4 text-success" />
              <Badge variant="default" className="bg-success text-success-foreground">
                98.3%
              </Badge>
            </div>
            <div className="text-2xl font-bold text-foreground">98.3%</div>
            <p className="text-xs text-muted-foreground">Avg Accuracy</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Upload className="h-4 w-4 text-info" />
              <Badge variant="outline">8</Badge>
            </div>
            <div className="text-2xl font-bold text-foreground">8</div>
            <p className="text-xs text-muted-foreground">Recent Updates</p>
          </CardContent>
        </Card>
      </div>

      {/* Document Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              {t("My Documents")}
            </CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Upload className="h-4 w-4" />
                  {t("Upload Document")}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>{t("Upload New Document")}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="file">{t("Select File")}</Label>
                    <Input id="file" type="file" accept=".pdf,.doc,.docx,.txt" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="title">{t("Document Title")}</Label>
                    <Input id="title" placeholder={t("Enter document title")} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="department">{t("Department")}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t("Select department")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">{t("Engineering")}</SelectItem>
                        <SelectItem value="safety">{t("Safety & Security")}</SelectItem>
                        <SelectItem value="operations">{t("Operations")}</SelectItem>
                        <SelectItem value="compliance">{t("Compliance")}</SelectItem>
                        <SelectItem value="admin">{t("Administration")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">
                      {t("Description")} ({t("Optional")})
                    </Label>
                    <Textarea id="description" placeholder={t("Enter document description")} />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="gap-2">
                    <Upload className="h-4 w-4" />
                    {t("Upload Document")}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search documents..." className="pl-10" />
            </div>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>

          {/* Documents List */}
          <div className="space-y-3">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.id}
                className="flex items-center gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{doc.name}</h4>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                    <span>{doc.type}</span>
                    <span>{doc.size}</span>
                    <span>{doc.uploadDate}</span>
                    <span>{doc.department}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {doc.accuracy && (
                    <div className="text-right">
                      <div className="text-sm font-medium">{doc.accuracy}%</div>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </div>
                  )}

                  <Badge
                    variant={
                      doc.status === "processed" ? "default" : doc.status === "processing" ? "secondary" : "destructive"
                    }
                    className={
                      doc.status === "processed"
                        ? "bg-success text-success-foreground"
                        : doc.status === "processing"
                          ? "bg-warning text-warning-foreground"
                          : ""
                    }
                  >
                    {doc.status}
                  </Badge>

                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
