import React, { useState } from "react"
import * as styles from "../styles/tag-selector.css"

interface TagSelectorProps {
  label: string
  tags: string[]
  approvedTags: string[]
  newTags?: Set<string>
  onAdd: (tag: string) => void
  onRemove: (index: number) => void
  addButtonLabel: string
}

export const TagSelector: React.FC<TagSelectorProps> = ({
  label,
  tags,
  approvedTags,
  newTags = new Set(),
  onAdd,
  onRemove,
  addButtonLabel,
}) => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className={styles.fullWidthGroup}>
      <label className={styles.label}>{label}</label>

      <div className={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <div
            key={index}
            className={newTags.has(tag) ? styles.newTag : styles.tag}
          >
            <span>{tag}</span>
            <button
              type="button"
              onClick={() => onRemove(index)}
              className={styles.removeTagButton}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className={styles.tagDropdownContainer}>
        <button
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          className={styles.addTagButton}
        >
          {addButtonLabel}
        </button>

        {showDropdown && (
          <div className={styles.tagDropdown}>
            {approvedTags
              .filter((tag) => !tags.includes(tag))
              .map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => onAdd(tag)}
                  className={styles.tagOption}
                >
                  {tag}
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default TagSelector
