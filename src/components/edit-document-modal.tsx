"use client"

import type React from "react"
import { useState } from "react"
import * as styles from "../styles/edit-document-modal.css"
import { useTagSelector } from "../hooks/use-tag-selector"
import { TagSelector } from "./tag-selector"

export type EditDocumentModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: any) => void
}

export const EditDocumentModal: React.FC<EditDocumentModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [contributors, setContributors] = useState<string[]>([""])

  // Adding contributors
  const addContributor = () => {
    setContributors([...contributors, ""])
  }

  // Handle keyword editing
  const approvedKeywords = [
    "Colonialism",
    "Government",
    "Politics",
    "History",
    "Culture",
    "Law",
    "Constitution",
    "Indigenous Rights",
    "Treaty",
    "Land Rights",
    "Self-Determination",
    "Tribal Governance",
  ]
  
  const {
    tags: keywords,
    newTags: newKeywords,
    showDropdown: showKeywordDropdown,
    setShowDropdown: setShowKeywordDropdown,
    addTag: addKeyword,
    removeTag: removeKeyword,
  } = useTagSelector(
    ["Cherokee", "Sovereignty", "Traditionalism", "Resistance", "Native American Removal"],
    approvedKeywords
)

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

            {/* Editing title */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Title*</label>
              <input 
                type="text" 
                className={styles.input} 
                value="Constitution of Cherokee Nation"
              />
            </div>

            {/* Editing date created */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Date Created</label>
              <input 
                type="text" 
                className={styles.input} 
                value="1827"
                />
            </div>

            {/* Editing genre */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Genre</label>
              <input 
                type="text" 
                className={styles.input} 
                value="Legal Document"
              />
            </div>

            {/* Editing format */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Format</label>
              <input 
                type="text" 
                className={styles.input} 
                value="PDF"
              />
            </div>

            {/* Editing pages */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Pages [Start, End]</label>
              <input 
                type="text" 
                className={styles.input} 
                value="[1, 24]"
              />
            </div>

            {/* Editing creator */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Creator (separate by ';' if multiple)</label>
              <input 
                type="text" 
                className={styles.input} 
                value="Sam Houston"
              />
            </div>
          </div>

          {/* Editing contributors */}
          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>Contributors</label>
            {contributors.map((_, index) => (
              <input key={index} type="text" className={styles.input} />
            ))}
            <button type="button" onClick={addContributor} className={styles.addButton}>
              + Add Contributor
            </button>
          </div>

          {/* Editing source */}
          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>Source</label>
            <input 
              type="text" 
              className={styles.input} 
              value="https://teva.contentdm.oclc.org/digital/collection/tfd/id/304"
            />
          </div>

          {/* Editing DOI */}
          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>DOI</label>
            <input 
              type="text" 
              className={styles.input} 
              value="https://doi.org/10.1000/182"
            />
          </div>

          {/* Editing keywords */}
          <TagSelector
            label="Keywords"
            tags={keywords}
            approvedTags={approvedKeywords}
            newTags={newKeywords}
            onAdd={addKeyword}
            onRemove={removeKeyword}
            addButtonLabel="+ Keyword"
          />


          {/* Editing subject headings */}
          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>Subject Headings</label>
            {subjectHeadings.map((_, index) => (
              <input key={index} type="text" className={styles.input} />
            ))}
            <button type="button" onClick={addSubjectHeading} className={styles.addButton}>
              + Add Subject Heading
            </button>
          </div>

          {/* Editing languages */}
          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>Languages</label>
            {languages.map((_, index) => (
              <input key={index} type="text" className={styles.input} />
            ))}
            <button type="button" onClick={addLanguage} className={styles.addButton}>
              + Add Language
            </button>
          </div>

          {/* Editing spatial coverages */}
          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>Spatial Coverages</label>
            {spatialCoverages.map((_, index) => (
              <input key={index} type="text" className={styles.input} />
            ))}
            <button type="button" onClick={addSpatialCoverage} className={styles.addButton}>
              + Add Spatial Coverage
            </button>
          </div>

          {/* Editing citation */}
          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>Citation</label>
            <textarea
              className={styles.input}
              placeholder={`Houston, S. (n.d.). Constitution of Cherokee Nation, 1827. Tennessee Virtual Archive (TeVA). https://teva.contentdm.oclc.org/digital/collection/tfd/id/304`}
            />

          </div>

          {/* Cancel and submit buttons */}
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
