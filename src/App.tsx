import React from "react";
import DocumentViewer from "./DocumentHeader";
import DocumentTabs from "./DocumentTabs";
import DocumentInfo from "./DocumentInfo";

export default function App() {
  return (
    <div>
      <DocumentViewer />
      <DocumentTabs />
      <DocumentInfo />
    </div>
  );
}
