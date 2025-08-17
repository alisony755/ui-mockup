import React, { useState } from "react";
import DocumentViewer from "./document-header";
import DocumentTabs from "./document-tabs";
import DocumentInfo from "./document-info";
import EditDocumentModal from "./edit-document-modal";

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClose = () => setModalOpen(false);

  const handleSubmit = (data: any) => {
    console.log("Form submitted:", data);
    setModalOpen(false);
  };

  return (
    <div>
      <DocumentViewer />
      <DocumentTabs />
      <DocumentInfo />

      <EditDocumentModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
