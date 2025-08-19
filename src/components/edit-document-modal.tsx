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
  const [title, setTitle] = useState("Constitution of Cherokee Nation")
  const [date, setDate] = useState("1827")
  const [genre, setGenre] = useState("Legal Document")
  const [format, setFormat] = useState("PDF")
  const [pages, setPages] = useState("[1, 24]")
  const [creator, setCreator] = useState("Sam Houston")
  const [source, setSource] = useState("https://teva.contentdm.oclc.org/digital/collection/tfd/id/304")
  const [doi, setDOI] = useState("https://doi.org/10.1000/182")
  const [citation, setCitation] = useState("Houston, S. (n.d.). Constitution of Cherokee Nation, 1827. Tennessee Virtual Archive (TeVA). https://teva.contentdm.oclc.org/digital/collection/tfd/id/304")

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

  // Handle subject heading editing
  const approvedHeadings = [
    "Cherokee Political Structure",
    "Sacred Relationships to Land",
    "Indigenous Self-Determination",
    "Ecological Stewardship",
    "Colonial Disruption and Resilience",
    "Ceremony and Sacred Practice",
    "Indigenous Governance Models",
  ]
  
  const {
    tags: subjectHeadings,
    newTags: newHeadings,
    showDropdown: showHeadingDropdown,
    setShowDropdown: setShowHeadingDropdown,
    addTag: addHeading,
    removeTag: removeHeading,
  } = useTagSelector(
    ["Cherokee Political Structure", "Sacred Relationships to Land", "Indigenous Self-Determination"],
    approvedHeadings
  )

  // Handle language editing
  const approvedLanguages = [
    "English",
    "Mandarin Chinese",
    "Hindi",
    "Spanish",
    "French",
    "Arabic",
    "Bengali",
    "Portuguese",
    "Navajo",
    "Cree",
    "Sioux",
    "Chippewa",
  ]
  
  const {
    tags: languages,
    newTags: newLanguages,
    showDropdown: showLanguageDropdown,
    setShowDropdown: setShowLanguageDropdown,
    addTag: addLanguage,
    removeTag: removeLanguage,
  } = useTagSelector(
    ["English"],
    approvedLanguages
  )

  // Handle spatial coverage editing
  // TODO: Could use API to fetch location names (figure out what kinds of location names to include)
  const approvedCoverages = [
    "New Echota, GA",
    "Tennessee, USA",
    "Boston, MA",
    "New York City, NY",
    "Los Angeles, CA",
    "Tokyo, Japan",
    "Beijing, China",
    "Paris, France",
    "Dubai, UAE",
  ]

  const {
    tags: spatialCoverages,
    newTags: newCoverages,
    showDropdown: showCoverageDropdown,
    setShowDropdown: setShowCoverageDropdown,
    addTag: addCoverage,
    removeTag: removeCoverage,
  } = useTagSelector(
    ["New Echota, GA", "Tennessee, USA"],
    approvedCoverages
  )

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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Editing date created */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Date Created</label>
              <input 
                type="text" 
                className={styles.input} 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
            </div>

            {/* Editing genre */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Genre</label>
              <input 
                type="text" 
                className={styles.input} 
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>

            {/* Editing format */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Format</label>
              <input 
                type="text"
                className={styles.input} 
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              />
            </div>

            {/* Editing pages */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Pages [Start, End]</label>
              <input 
                type="text" 
                className={styles.input} 
                value={pages}
                onChange={(e) => setPages(e.target.value)}
              />
            </div>

            {/* Editing creator */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Creator (separate by ';' if multiple)</label>
              <input 
                type="text" 
                className={styles.input} 
                value={creator}
                onChange={(e) => setCreator(e.target.value)}
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
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </div>

          {/* Editing DOI */}
          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>DOI</label>
            <input 
              type="text" 
              className={styles.input} 
              value={doi}
              onChange={(e) => setDOI(e.target.value)}
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
          <TagSelector
            label="Subject Headings"
            tags={subjectHeadings}
            approvedTags={approvedHeadings}
            newTags={newHeadings}
            onAdd={addHeading}
            onRemove={removeHeading}
            addButtonLabel="+ Subject Heading"
          />

          {/* Editing languages */}
          <TagSelector
            label="Languages"
            tags={languages}
            approvedTags={approvedLanguages}
            newTags={newLanguages}
            onAdd={addLanguage}
            onRemove={removeLanguage}
            addButtonLabel="+ Language"
          />

          {/* Editing spatial coverages */}
          <TagSelector
            label="Spatial Coverages"
            tags={spatialCoverages}
            approvedTags={approvedCoverages}
            newTags={newCoverages}
            onAdd={addCoverage}
            onRemove={removeCoverage}
            addButtonLabel="+ Spatial Coverage"
          />

          {/* Editing citation */}
          <div className={styles.fullWidthGroup}>
            <label className={styles.label}>Citation</label>
            <textarea
              className={styles.input}
              value={citation}
              onChange={(e) => setCitation(e.target.value)}
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
