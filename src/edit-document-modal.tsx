"use client"

import type React from "react"
import { useState } from "react"
import * as styles from "./edit-document-modal.css"

export type EditDocumentModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: any) => void
}

export const EditDocumentModal: React.FC<EditDocumentModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [contributors, setContributors] = useState<string[]>([""])

  const addContributor = () => {
    setContributors([...contributors, ""])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({})
  }

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Editing Document Information</h2>
        <p className={styles.subtitle}>* indicates a required field</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Title*</label>
              <input type="text" className={styles.input} />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Date Written</label>
              <input type="text" className={styles.input} />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Genre</label>
              <input type="text" className={styles.input} />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Format</label>
              <input type="text" className={styles.input} />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Pages [Start, End]</label>
              <input type="text" className={styles.input} />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Creator (separate by ';' if multiple)</label>
              <input type="text" className={styles.input} />
            </div>
          </div>

          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>Contributors</label>
            {contributors.map((_, index) => (
              <input key={index} type="text" className={styles.input} />
            ))}
            <button type="button" onClick={addContributor} className={styles.addButton}>
              + Add Contributor
            </button>
          </div>

          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>Source</label>
            <input type="text" className={styles.input} />
          </div>

          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>DOI</label>
            <input type="text" className={styles.input} />
          </div>

          <div className={styles.buttonGroup}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditDocumentModal
