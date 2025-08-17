"use client"

import React from "react"
import * as styles from "./document-info.css"

export type DocumentInfoProps = {
  className?: string
}

export const DocumentInfo: React.FC<DocumentInfoProps> = ({ className }) => {
  return (
    <div className={styles.container + (className ? ` ${className}` : "")}>
      <div className={styles.header}>
        <button className={styles.editButton}>
          <span className={styles.editIcon}>✏️</span>
          Edit
        </button>
        <h2 className={styles.title}>Document Information</h2>
        <p className={styles.subtitle}>Uploaded 7/04/2025 • Last Edited 7/06/2025</p>
      </div>

      <div className={styles.content}>
        <div className={styles.field}>
          <div className={styles.label}>TITLE</div>
          <div className={styles.value}>Constitution of Cherokee Nation</div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>DATE CREATED</div>
          <div className={styles.value}>July 24, 1827</div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>GENRE</div>
          <div className={styles.value}>Legal Document</div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>FORMAT</div>
          <div className={styles.value}>PDF</div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>PAGES</div>
          <div className={styles.value}>1-24</div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>CREATOR</div>
          <div className={styles.value}>Sam Houston</div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>CONTRIBUTORS</div>
          <div className={styles.value}>Clara Proctor (translator), Ellen Cushman (editor)</div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>SOURCE</div>
          <div className={styles.value}>
            <a href="https://teva.contentdm.oclc.org/digital/collection/fd/id/328/" className={styles.link}>
              https://teva.contentdm.oclc.org/digital/collection/fd/id/328/
            </a>
          </div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>DOI</div>
          <div className={styles.value}>
            <a href="https://doi.org/10.1000/182" className={styles.link}>
              https://doi.org/10.1000/182
            </a>
          </div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>KEYWORDS</div>
          <div className={styles.value}>Cherokee, Sovereignty, Traditionalism, Resistance, Native American Removal</div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>SUBJECT HEADINGS</div>
          <div className={styles.value}>
            Cherokee Political Structure, Resistance to Removal, Sacred Relationships to Land, Indigenous
            Self-Determination
          </div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>LANGUAGES</div>
          <div className={styles.value}>English</div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>SPATIAL COVERAGE</div>
          <div className={styles.value}>New Echota, Georgia (written), Tennessee, USA (found)</div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>CITATION</div>
          <div className={styles.value}>
            Houston, S. (n.d.). Constitution of Cherokee Nation, 1827. Tennessee Virtual Archive (TeVA).
            <a href="https://teva.contentdm.oclc.org/digital/collection/fd/id/304" className={styles.link}>
              https://teva.contentdm.oclc.org/digital/collection/fd/id/304
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentInfo
