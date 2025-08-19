import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: "1200px",
  margin: "50px auto 20px auto",
  padding: "32px",
  backgroundColor: "#ffffff",
});

export const documentLayout = style({
  display: "flex",
  flexDirection: "row",
  gap: "48px",
  alignItems: "flex-start",
});

export const documentLayoutMobile = style({
  flexDirection: "column",
  gap: "32px",
});

export const documentImageContainer = style({
  flexShrink: 0,
});

export const documentImage = style({
  width: "320px",
  height: "400px",
  objectFit: "cover",
  border: "8px solid #2d3748",
  borderRadius: "4px",
  display: "block",
});

export const documentImageMobile = style({
  width: "100%",
  height: "300px",
});

export const contentSection = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  paddingTop: "8px",
});

export const breadcrumb = style({
  fontSize: "18px",
  color: "#405372",
  fontWeight: "600",
  marginBottom: "15px",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});

export const titleContainer = style({
  marginBottom: "8px",
});

export const title = style({
  fontSize: "48px",
  fontWeight: "700",
  color: "#2d3748",
  lineHeight: "1.1",
  margin: "0",
});

export const titleMobile = style({
  fontSize: "32px",
});

export const year = style({
  fontSize: "24px",
  fontFamily: "'Spectral SC', serif",
  color: "#718096",
  fontWeight: "600",
  marginLeft: "16px",
});

export const yearMobile = style({
  fontSize: "20px",
  marginLeft: "8px",
});

export const documentTypes = style({
  display: "flex",
  gap: "32px",
  marginBottom: "8px",
});

export const documentTypesMobile = style({
  flexDirection: "column",
  gap: "16px",
});

export const documentType = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const documentIcon = style({
  width: "32px",
  height: "32px",
  color: "#4a5568",
});

export const documentIconMobile = style({
  width: "24px",
  height: "24px",
});

export const documentTypeText = style({
  fontSize: "18px",
  color: "#2d3748",
  fontWeight: "600",
});

export const documentTypeTextMobile = style({
  fontSize: "16px",
});

export const description = style({
  fontSize: "18px",
  color: "#000000",
  lineHeight: "1.6",
  marginBottom: "12px",
  maxWidth: "900px",
});

export const descriptionMobile = style({
  fontSize: "14px",
});

export const actionButtons = style({
  margin: "10px 0 0 0",
  display: "flex",
  gap: "16px",
});

export const actionButtonsMobile = style({
  flexDirection: "column",
  gap: "12px",
});

export const actionButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  padding: "12px 35px",
  backgroundColor: "#405372",
  color: "white",
  fontFamily: "'Inter', sans-serif",
  fontWeight: "600",
  fontSize: "16px",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  minWidth: "140px",
  ":hover": {
    backgroundColor: "#6F85A9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
});

export const actionButtonMobile = style({
  padding: "10px 20px",
  fontSize: "14px",
  minWidth: "120px",
});

export const buttonIcon = style({
  width: "20px",
  height: "20px",
});

export const buttonIconMobile = style({
  width: "16px",
  height: "16px",
});
