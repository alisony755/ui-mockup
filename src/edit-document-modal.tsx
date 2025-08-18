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
  // Adding contributors
  const [contributors, setContributors] = useState<string[]>([""])

  const addContributor = () => {
    setContributors([...contributors, ""])
  }

  // Adding keywords
  const [keywords, setKeywords] = useState<string[]>([""])

  const addKeyword = () => {
    setKeywords([...keywords, ""])
  }

  // Adding subject headings
  const [subjectHeadings, setSubjectHeadings] = useState<string[]>([""])

  const addSubjectHeading = () => {
    setSubjectHeadings([...subjectHeadings, ""])
  }

  // Adding languages
  const [languages, setLanguages] = useState<string[]>([""])

  const addLanguage = () => {
    setLanguages([...languages, ""])
  }

  // Adding spatial coverages
  const [spatialCoverages, setSpatialCoverages] = useState<string[]>([""])

  const addSpatialCoverage = () => {
    setSpatialCoverages([...spatialCoverages, ""])
  }

  // Handle form submission
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
              <input 
                type="text" 
                className={styles.input} 
                placeholder="Constitution of Cherokee Nation"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Date Written</label>
              <input 
                type="text" 
                className={styles.input} 
                placeholder="1827"
                />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Genre</label>
              <input 
                type="text" 
                className={styles.input} 
                placeholder="Legal Document"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Format</label>
              <input 
                type="text" 
                className={styles.input} 
                placeholder="PDF"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Pages [Start, End]</label>
              <input 
                type="text" 
                className={styles.input} 
                placeholder="[1, 24]"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Creator (separate by ';' if multiple)</label>
              <input 
                type="text" 
                className={styles.input} 
                placeholder="Sam Houston"
              />
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
            <input 
              type="text" 
              className={styles.input} 
              placeholder="https://teva.contentdm.oclc.org/digital/collection/tfd/id/304"
            />
          </div>

          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>DOI</label>
            <input 
              type="text" 
              className={styles.input} 
              placeholder="https://doi.org/10.1000/182"
            />
          </div>

          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>Keywords</label>
            {keywords.map((_, index) => (
              <input key={index} type="text" className={styles.input} />
            ))}
            <button type="button" onClick={addKeyword} className={styles.addButton}>
              + Add Keyword
            </button>
          </div>

          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>Subject Headings</label>
            {subjectHeadings.map((_, index) => (
              <input key={index} type="text" className={styles.input} />
            ))}
            <button type="button" onClick={addSubjectHeading} className={styles.addButton}>
              + Add Subject Heading
            </button>
          </div>

          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>Languages</label>
            {languages.map((_, index) => (
              <input key={index} type="text" className={styles.input} />
            ))}
            <button type="button" onClick={addLanguage} className={styles.addButton}>
              + Add Language
            </button>
          </div>

          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>Subject Headings</label>
            {subjectHeadings.map((_, index) => (
              <input key={index} type="text" className={styles.input} />
            ))}
            <button type="button" onClick={addSubjectHeading} className={styles.addButton}>
              + Add Subject Heading
            </button>
          </div>

          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>Citation</label>
            <textarea
              className={styles.input}
              placeholder={`Houston, S. (n.d.). Constitution of Cherokee Nation, 1827. Tennessee Virtual Archive (TeVA). https://teva.contentdm.oclc.org/digital/collection/tfd/id/304`}
            />

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
