import React, { Fragment } from "react";
import * as styles from "../styles/document-header.css";

export type DocumentHeaderProps = {
  className?: string;
};

export type DocumentMetadata = {
  title: string;
  year: string;
  collection: string;
  description: string;
  pageCount: number;
  author?: string;
  source?: string;
};

export const DocumentHeader: React.FC<DocumentHeaderProps> = ({
  className,
}) => {
  const documentData: DocumentMetadata = {
    title: "Constitution of Cherokee Nation",
    year: "1827",
    collection: "Stories as Knowledge /",
    description: "A product of a convention held in early July 1827 at New Echota, Georgia, the constitution appears to be a version of the American Constitution adapted to suit Cherokee needs. The constitution does not represent a position of assimilation to white society but, rather, a conscious strategy to resist removal and maintain autonomy. However, traditionalists saw it as one more concession to white, Christian authority.",
    pageCount: 24,
    author: "Sam Houston",
    source: "1827 Tennessee legislative papers",
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={`${styles.documentLayout} lg:flex-row flex-col`}>
          <div className={styles.documentImageContainer}>
            <img
              src="https://teva.contentdm.oclc.org/iiif/2/tfd:328/full/730,/0/default.jpg?page=1"
              alt={`${documentData.title} - Historical handwritten document`}
              className={`${styles.documentImage} lg:w-80 lg:h-96 w-full h-72`}
            />
          </div>

          <div className={styles.contentSection}>
            <div>
              <nav className={styles.breadcrumb}>
                <a 
                  href="https://dailp.northeastern.edu/collections/cwkw/stories-as-knowledge"
                  className={styles.breadcrumb}
                >
                  {documentData.collection}
                </a>
              </nav>

              <div className={styles.titleContainer}>
                <h1 className={`${styles.title} lg:text-5xl text-3xl`}>
                  {documentData.title}
                  <span
                    className={`${styles.year} lg:text-2xl text-xl lg:ml-4 ml-2`}
                  >
                    {documentData.year}
                  </span>
                </h1>
              </div>
            </div>

            <div className={`${styles.documentTypes} lg:flex-row flex-col`}>
              <div className={styles.documentType}>
                <div className={`${styles.documentIcon} lg:w-8 lg:h-8 w-6 h-6`}>
                  📄
                </div>
                <span
                  className={`${styles.documentTypeText} lg:text-lg text-base`}
                >
                  Legal Document
                </span>
              </div>
              <div className={styles.documentType}>
                <div className={`${styles.documentIcon} lg:w-8 lg:h-8 w-6 h-6`}>
                  📋
                </div>
                <span
                  className={`${styles.documentTypeText} lg:text-lg text-base`}
                >
                  PDF
                </span>
              </div>
            </div>

            <p className={`${styles.description} lg:text-base text-sm`}>
              {documentData.description}
            </p>

            <div className={`${styles.actionButtons} lg:flex-row flex-col`}>
              <button
                className={`${styles.actionButton} lg:px-6 lg:py-3 px-5 py-2 lg:text-base text-sm lg:min-w-36 min-w-30`}
              >
                <span className={`${styles.buttonIcon} lg:w-5 lg:h-5 w-4 h-4`}>
                  🔊
                </span>
                Audio
              </button>
              <button
                className={`${styles.actionButton} lg:px-6 lg:py-3 px-5 py-2 lg:text-base text-sm lg:min-w-36 min-w-30 hover:bg-slate-700`}
              >
                <span className={`${styles.buttonIcon} lg:w-5 lg:h-5 w-4 h-4`}>
                  🖨️
                </span>
                Print
              </button>
              <button
                className={`${styles.actionButton} lg:px-6 lg:py-3 px-5 py-2 lg:text-base text-sm lg:min-w-36 min-w-30 hover:bg-slate-700`}
              >
                <span className={`${styles.buttonIcon} lg:w-5 lg:h-5 w-4 h-4`}>
                  🔖
                </span>
                Bookmark
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DocumentHeader;
