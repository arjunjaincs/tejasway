import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

const resources = {
  en: {
    translation: {
      // Navigation
      "KMRL DocuFlow": "KMRL DocuFlow",
      "Employee Portal": "Employee Portal",
      "Welcome to": "Welcome to",
      "Access your department's document dashboard and stay updated with the latest information.":
        "Access your department's document dashboard and stay updated with the latest information.",

      // Stats
      Documents: "Documents",
      Accuracy: "Accuracy",
      Departments: "Departments",
      Alerts: "Alerts",

      // Dashboard
      Overview: "Overview",
      Compliance: "Compliance",
      Analytics: "Analytics",
      "All Departments": "All Departments",
      "My Documents": "My Documents",
      Settings: "Settings",
      Logout: "Logout",
      documentIntelligence: "Document Intelligence",
      adminRole: "Administrator",
      adminTitle: "Admin Dashboard",
      adminSubtitle: "System-wide analytics and department management",
      trainOpsRole: "Train Operations",
      trainOpsTitle: "Train Operations Dashboard",
      trainOpsSubtitle: "Department documents, compliance updates, and notifications",
      engineeringRole: "Engineering",
      engineeringTitle: "Engineering Dashboard",
      engineeringSubtitle: "Technical documents, maintenance schedules, and updates",
      safetyRole: "Safety & Security",
      safetyTitle: "Safety Dashboard",
      safetySubtitle: "Safety protocols, incident reports, and compliance",
      operationsRole: "Operations",
      operationsTitle: "Operations Dashboard",
      operationsSubtitle: "Operational procedures, schedules, and coordination",
      complianceRole: "Compliance",
      complianceTitle: "Compliance Dashboard",
      complianceSubtitle: "Regulatory updates, audit reports, and guidelines",

      // Dashboard specific translations
      dashboard: {
        overallCompliance: "Overall Compliance",
        activeIssues: "Active Issues",
        documentsReviewed: "Documents Reviewed",
        daysUntilDeadline: "Days Until Deadline",
        complianceAreas: "Compliance Areas",
        complianceScore: "Compliance Score",
        documents: "documents",
        issues: "issues",
        recentAudits: "Recent Audits",
        generateComplianceReport: "Generate Compliance Report",

        status: {
          compliant: "Compliant",
          warning: "Warning",
          critical: "Critical",
          pending: "Pending",
          passed: "Passed",
        },
      },

      // Alerts
      "System Alerts": "System Alerts",
      "View All Alerts": "View All Alerts",
      "Show Less": "Show Less",
      more: "more",

      // Notice Board
      "Admin Notice Board": "Admin Notice Board",
      "View All Notices": "View All Notices",
      "Republic Day Holiday": "Republic Day Holiday",
      "Office will remain closed on January 26th, 2025. Regular operations resume on January 27th.":
        "Office will remain closed on January 26th, 2025. Regular operations resume on January 27th.",
      "Daily Processing Target": "Daily Processing Target",
      "Today's goal: Process 500+ documents with 98%+ accuracy. Current progress: 342/500 (68%)":
        "Today's goal: Process 500+ documents with 98%+ accuracy. Current progress: 342/500 (68%)",
      "New Safety Training": "New Safety Training",
      "Mandatory safety training session scheduled for all departments. Register by January 20th.":
        "Mandatory safety training session scheduled for all departments. Register by January 20th.",
      "Monthly Report Submission": "Monthly Report Submission",
      "Department monthly reports due by January 31st. Submit to your respective HODs.":
        "Department monthly reports due by January 31st. Submit to your respective HODs.",

      // KMRL Info Dashboard
      "KMRL Metro Dashboard": "KMRL Metro Dashboard",
      "Active Trains": "Active Trains",
      "Daily Ridership": "Daily Ridership",
      Stations: "Stations",
      "On-Time Performance": "On-Time Performance",

      // Bulletins
      "Latest Bulletins": "Latest Bulletins",
      "View All Bulletins": "View All Bulletins",
      "System Maintenance Tonight": "System Maintenance Tonight",
      "Scheduled maintenance from 11 PM to 3 AM. Limited access expected.":
        "Scheduled maintenance from 11 PM to 3 AM. Limited access expected.",
      "New Document Format Support": "New Document Format Support",
      "Now supporting Malayalam OCR and bilingual document processing.":
        "Now supporting Malayalam OCR and bilingual document processing.",
      "Weekly Processing Complete": "Weekly Processing Complete",
      "Successfully processed 2,847 documents with 98.3% accuracy this week.":
        "Successfully processed 2,847 documents with 98.3% accuracy this week.",

      // Footer
      "© 2025 KMRL DocuFlow - Employee Portal": "© 2025 KMRL DocuFlow - Employee Portal",
      footer: {
        quickLinks: "Quick Links",
        employeeHandbook: "Employee Handbook",
        itSupport: "IT Support",
        documentGuidelines: "Document Guidelines",
        trainingResources: "Training Resources",
        departments: "Departments",
        trainOperations: "Train Operations",
        engineering: "Engineering",
        safetyAndSecurity: "Safety & Security",
        administration: "Administration",
        contact: "Contact Information",
        helpdesk: "Helpdesk",
        emergencyLine: "Emergency Line",
        hrDepartment: "HR Department",
      },

      common: {
        alerts: "Alerts",
        systemAlerts: "System Alerts",
        viewAllAlerts: "View All Alerts",
        showLess: "Show Less",
        more: "more",
        new: "New",
        close: "Close",
        resolve: "Resolve",
      },

      alerts: {
        systemMaintenance: "System Maintenance Tonight",
        systemMaintenanceDesc: "Scheduled maintenance from 11 PM to 3 AM. Limited access expected.",
        highDocumentVolume: "High Document Volume",
        highDocumentVolumeDesc: "Processing queue at 85% capacity. Consider prioritizing critical documents.",
        newFeatures: "New Features Available",
        newFeaturesDesc: "Updated OCR capabilities now support Malayalam text processing.",
        backupCompleted: "Backup Completed",
        backupCompletedDesc: "Daily system backup completed successfully at 2:00 AM.",
      },

      chatbot: {
        title: "KMRL Assistant",
        placeholder: "Type your message...",
        welcome: "Hello! I'm your KMRL DocuFlow assistant. How can I help you today?",
      },

      // Upload Dialog
      "Upload Document": "Upload Document",
      "Upload New Document": "Upload New Document",
      "Select File": "Select File",
      "Document Title": "Document Title",
      "Enter document title": "Enter document title",
      "Select department": "Select department",
      Description: "Description",
      Optional: "Optional",
      "Enter document description": "Enter document description",
      Administration: "Administration",
    },
  },
  ml: {
    translation: {
      // Navigation
      "KMRL DocuFlow": "കെഎംആർഎൽ ഡോക്യുഫ്ലോ",
      "Employee Portal": "ജീവനക്കാരുടെ പോർട്ടൽ",
      "Welcome to": "സ്വാഗതം",
      "Access your department's document dashboard and stay updated with the latest information.":
        "നിങ്ങളുടെ വകുപ്പിന്റെ ഡോക്യുമെന്റ് ഡാഷ്‌ബോർഡ് ആക്‌സസ് ചെയ്യുകയും ഏറ്റവും പുതിയ വിവരങ്ങൾ അറിയുകയും ചെയ്യുക.",

      // Stats
      Documents: "രേഖകൾ",
      Accuracy: "കൃത്യത",
      Departments: "വകുപ്പുകൾ",
      Alerts: "മുന്നറിയിപ്പുകൾ",

      // Dashboard
      Overview: "അവലോകനം",
      Compliance: "അനുസരണം",
      Analytics: "വിശകലനം",
      "All Departments": "എല്ലാ വകുപ്പുകളും",
      "My Documents": "എന്റെ രേഖകൾ",
      Settings: "ക്രമീകരണങ്ങൾ",
      Logout: "ലോഗൗട്ട്",
      documentIntelligence: "ഡോക്യുമെന്റ് ഇന്റലിജൻസ്",
      adminRole: "അഡ്മിനിസ്ട്രേറ്റർ",
      adminTitle: "അഡ്മിൻ ഡാഷ്‌ബോർഡ്",
      adminSubtitle: "സിസ്റ്റം-വൈഡ് അനലിറ്റിക്സും വകുപ്പ് മാനേജ്മെന്റും",
      trainOpsRole: "ട്രെയിൻ ഓപ്പറേഷൻസ്",
      trainOpsTitle: "ട്രെയിൻ ഓപ്പറേഷൻസ് ഡാഷ്‌ബോർഡ്",
      trainOpsSubtitle: "വകുപ്പ് രേഖകൾ, അനുസരണ അപ്‌ഡേറ്റുകൾ, അറിയിപ്പുകൾ",
      engineeringRole: "എഞ്ചിനീയറിംഗ്",
      engineeringTitle: "എഞ്ചിനീയറിംഗ് ഡാഷ്‌ബോർഡ്",
      engineeringSubtitle: "സാങ്കേതിക രേഖകൾ, മെയിന്റനൻസ് ഷെഡ്യൂളുകൾ, അപ്‌ഡേറ്റുകൾ",
      safetyRole: "സുരക്ഷയും സെക്യൂരിറ്റിയും",
      safetyTitle: "സുരക്ഷാ ഡാഷ്‌ബോർഡ്",
      safetySubtitle: "സുരക്ഷാ പ്രോട്ടോക്കോളുകൾ, സംഭവ റിപ്പോർട്ടുകൾ, അനുസരണം",
      operationsRole: "ഓപ്പറേഷൻസ്",
      operationsTitle: "ഓപ്പറേഷൻസ് ഡാഷ്‌ബോർഡ്",
      operationsSubtitle: "പ്രവർത്തന നടപടിക്രമങ്ങൾ, ഷെഡ്യൂളുകൾ, ഏകോപനം",
      complianceRole: "അനുസരണം",
      complianceTitle: "അനുസരണ ഡാഷ്‌ബോർഡ്",
      complianceSubtitle: "നിയന്ത്രണ അപ്‌ഡേറ്റുകൾ, ഓഡിറ്റ് റിപ്പോർട്ടുകൾ, മാർഗ്ഗനിർദ്ദേശങ്ങൾ",

      // Dashboard specific translations
      dashboard: {
        overallCompliance: "മൊത്തത്തിലുള്ള അനുസരണം",
        activeIssues: "സജീവ പ്രശ്നങ്ങൾ",
        documentsReviewed: "അവലോകനം ചെയ്ത രേഖകൾ",
        daysUntilDeadline: "അവസാന തീയതി വരെയുള്ള ദിവസങ്ങൾ",
        complianceAreas: "അനുസരണ മേഖലകൾ",
        complianceScore: "അനുസരണ സ്കോർ",
        documents: "രേഖകൾ",
        issues: "പ്രശ്നങ്ങൾ",
        recentAudits: "സമീപകാല ഓഡിറ്റുകൾ",
        generateComplianceReport: "അനുസരണ റിപ്പോർട്ട് സൃഷ്ടിക്കുക",

        status: {
          compliant: "അനുസരിക്കുന്നു",
          warning: "മുന്നറിയിപ്പ്",
          critical: "നിർണായകം",
          pending: "തീർപ്പുകൽപ്പിക്കാത്തത്",
          passed: "വിജയിച്ചു",
        },
      },

      // Alerts
      "System Alerts": "സിസ്റ്റം മുന്നറിയിപ്പുകൾ",
      "View All Alerts": "എല്ലാ മുന്നറിയിപ്പുകളും കാണുക",
      "Show Less": "കുറച്ച് കാണിക്കുക",
      more: "കൂടുതൽ",

      // Notice Board
      "Admin Notice Board": "അഡ്മിൻ നോട്ടീസ് ബോർഡ്",
      "View All Notices": "എല്ലാ നോട്ടീസുകളും കാണുക",
      "Republic Day Holiday": "റിപ്പബ്ലിക് ദിന അവധി",
      "Office will remain closed on January 26th, 2025. Regular operations resume on January 27th.":
        "2025 ജനുവരി 26-ന് ഓഫീസ് അടച്ചിരിക്കും. ജനുവരി 27-ന് സാധാരണ പ്രവർത്തനങ്ങൾ പുനരാരംഭിക്കും.",
      "Daily Processing Target": "ദൈനംദിന പ്രോസസിംഗ് ലക്ഷ്യം",
      "Today's goal: Process 500+ documents with 98%+ accuracy. Current progress: 342/500 (68%)":
        "ഇന്നത്തെ ലക്ഷ്യം: 98%+ കൃത്യതയോടെ 500+ രേഖകൾ പ്രോസസ് ചെയ്യുക. നിലവിലെ പുരോഗതി: 342/500 (68%)",
      "New Safety Training": "പുതിയ സുരക്ഷാ പരിശീലനം",
      "Mandatory safety training session scheduled for all departments. Register by January 20th.":
        "എല്ലാ വകുപ്പുകൾക്കും നിർബന്ധിത സുരക്ഷാ പരിശീലന സെഷൻ ഷെഡ്യൂൾ ചെയ്തിട്ടുണ്ട്. ജനുവരി 20-നകം രജിസ്റ്റർ ചെയ്യുക.",
      "Monthly Report Submission": "മാസിക റിപ്പോർട്ട് സമർപ്പണം",
      "Department monthly reports due by January 31st. Submit to your respective HODs.":
        "വകുപ്പിന്റെ മാസിക റിപ്പോർട്ടുകൾ ജനുവരി 31-നകം സമർപ്പിക്കേണ്ടതാണ്. നിങ്ങളുടെ ബന്ധപ്പെട്ട HOD-കൾക്ക് സമർപ്പിക്കുക.",

      // KMRL Info Dashboard
      "KMRL Metro Dashboard": "കെഎംആർഎൽ മെട്രോ ഡാഷ്‌ബോർഡ്",
      "Active Trains": "സജീവ ട്രെയിനുകൾ",
      "Daily Ridership": "ദൈനംദിന യാത്രക്കാർ",
      Stations: "സ്റ്റേഷനുകൾ",
      "On-Time Performance": "സമയനിഷ്ഠ പ്രകടനം",

      // Bulletins
      "Latest Bulletins": "ഏറ്റവും പുതിയ ബുള്ളറ്റിനുകൾ",
      "View All Bulletins": "എല്ലാ ബുള്ളറ്റിനുകളും കാണുക",
      "System Maintenance Tonight": "ഇന്ന് രാത്രി സിസ്റ്റം മെയിന്റനൻസ്",
      "Scheduled maintenance from 11 PM to 3 AM. Limited access expected.":
        "രാത്രി 11 മുതൽ പുലർച്ചെ 3 വരെ ഷെഡ്യൂളുകൾ ചെയ്ത മെയിന്റനൻസ്. പരിമിതമായ ആക്സസ് പ്രതീക്ഷിക്കുന്നു.",
      "New Document Format Support": "പുതിയ ഡോക്യുമെന്റ് ഫോർമാറ്റ് പിന്തുണ",
      "Now supporting Malayalam OCR and bilingual document processing.":
        "ഇപ്പോൾ മലയാളം OCR-ഉം ദ്വിഭാഷാ ഡോക്യുമെന്റ് പ്രോസസിംഗും പിന്തുണയ്ക്കുന്നു.",
      "Weekly Processing Complete": "പ്രതിവാര പ്രോസസിംഗ് പൂർത്തിയായി",
      "Successfully processed 2,847 documents with 98.3% accuracy this week.":
        "ഈ ആഴ്ച 98.3% കൃത്യതയോടെ 2,847 രേഖകൾ വിജയകരമായി പ്രോസസ് ചെയ്തു.",

      // Footer
      "© 2025 KMRL DocuFlow - Employee Portal": "© 2025 കെഎംആർഎൽ ഡോക്യുഫ്ലോ - ജീവനക്കാരുടെ പോർട്ടൽ",
      footer: {
        quickLinks: "ദ്രുത ലിങ്കുകൾ",
        employeeHandbook: "ജീവനക്കാരുടെ കൈപ്പുസ്തകം",
        itSupport: "ഐടി പിന്തുണ",
        documentGuidelines: "ഡോക്യുമെന്റ് മാർഗ്ഗനിർദ്ദേശങ്ങൾ",
        trainingResources: "പരിശീലന വിഭവങ്ങൾ",
        departments: "വകുപ്പുകൾ",
        trainOperations: "ട്രെയിൻ ഓപ്പറേഷൻസ്",
        engineering: "എഞ്ചിനീയറിംഗ്",
        safetyAndSecurity: "സുരക്ഷയും സെക്യൂരിറ്റിയും",
        administration: "അഡ്മിനിസ്ട്രേഷൻ",
        contact: "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
        helpdesk: "ഹെൽപ്പ്ഡെസ്ക്",
        emergencyLine: "എമർജൻസി ലൈൻ",
        hrDepartment: "എച്ച്ആർ വകുപ്പ്",
      },

      common: {
        alerts: "മുന്നറിയിപ്പുകൾ",
        systemAlerts: "സിസ്റ്റം മുന്നറിയിപ്പുകൾ",
        viewAllAlerts: "എല്ലാ മുന്നറിയിപ്പുകളും കാണുക",
        showLess: "കുറച്ച് കാണിക്കുക",
        more: "കൂടുതൽ",
        new: "പുതിയത്",
        close: "അടയ്ക്കുക",
        resolve: "പരിഹരിക്കുക",
      },

      alerts: {
        systemMaintenance: "ഇന്ന് രാത്രി സിസ്റ്റം മെയിന്റനൻസ്",
        systemMaintenanceDesc: "രാത്രി 11 മുതൽ പുലർച്ചെ 3 വരെ ഷെഡ്യൂളുകൾ ചെയ്ത മെയിന്റനൻസ്. പരിമിതമായ ആക്സസ് പ്രതീക്ഷിക്കുന്നു.",
        highDocumentVolume: "ഉയർന്ന ഡോക്യുമെന്റ് വോളിയം",
        highDocumentVolumeDesc: "പ്രോസസിംഗ് ക്യൂ 85% ശേഷിയിലാണ്. നിർണായക രേഖകൾക്ക് മുൻഗണന നൽകുന്നത് പരിഗണിക്കുക.",
        newFeatures: "പുതിയ ഫീച്ചറുകൾ ലഭ്യമാണ്",
        newFeaturesDesc: "അപ്‌ഡേറ്റ് ചെയ്ത OCR കഴിവുകൾ ഇപ്പോൾ മലയാളം ടെക്‌സ്റ്ട് പ്രോസസിംഗിനെ പിന്തുണയ്ക്കുന്നു.",
        backupCompleted: "ബാക്കപ്പ് പൂർത്തിയായി",
        backupCompletedDesc: "പുലർച്ചെ 2:00-ന് ദൈനംദിന സിസ്റ്റം ബാക്കപ്പ് വിജയകരമായി പൂർത്തിയായി.",
      },

      chatbot: {
        title: "കെഎംആർഎൽ അസിസ്റ്റന്റ്",
        placeholder: "നിങ്ങളുടെ സന്ദേശം ടൈപ്പ് ചെയ്യുക...",
        welcome: "ഹലോ! ഞാൻ നിങ്ങളുടെ കെഎംആർഎൽ ഡോക്യുഫ്ലോ അസിസ്റ്റന്റാണ്. ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?",
      },

      // Upload Dialog
      "Upload Document": "ഡോക്യുമെന്റ് അപ്‌ലോഡ് ചെയ്യുക",
      "Upload New Document": "പുതിയ ഡോക്യുമെന്റ് അപ്‌ലോഡ് ചെയ്യുക",
      "Select File": "ഫയൽ തിരഞ്ഞെടുക്കുക",
      "Document Title": "ഡോക്യുമെന്റ് ശീർഷകം",
      "Enter document title": "ഡോക്യുമെന്റ് ശീർഷകം നൽകുക",
      "Select department": "വകുപ്പ് തിരഞ്ഞെടുക്കുക",
      Description: "വിവരണം",
      Optional: "ഓപ്ഷണൽ",
      "Enter document description": "ഡോക്യുമെന്റ് വിവരണം നൽകുക",
      Administration: "അഡ്മിനിസ്ട്രേഷൻ",
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })

export default i18n
