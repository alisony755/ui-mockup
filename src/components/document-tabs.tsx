"use client"

import React, { useState } from "react"
import * as styles from "../styles/document-tabs.css"

export type TabItem = {
  id: string
  label: string
}

export type DocumentTabsProps = {
  className?: string
}

export const DocumentTabs: React.FC<DocumentTabsProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<string>("document-info")

  const tabs: TabItem[] = [
    { id: "translation", label: "Translation" },
    { id: "original-text", label: "Original Text" },
    { id: "document-info", label: "Document Info" },
  ]

  return (
    <div className={`${styles.tabContainer} ${className || ""}`}>
      {tabs.map((tab, index) => (
        <React.Fragment key={tab.id}>
          <button
            className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ""} lg:px-8 lg:py-4 px-6 py-3`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className={`${styles.tabText} lg:text-lg text-base`}>
              {tab.label}
            </span>
          </button>
          {index < tabs.length - 1 && <div className={styles.tabSeparator} />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default DocumentTabs
