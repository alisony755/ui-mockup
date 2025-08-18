import { style } from "@vanilla-extract/css"

export const tabContainer = style({
  display: "flex",
  width: "100%",
  backgroundColor: "#573C38",
  alignItems: "stretch",
})

export const tab = style ({
  backgroundColor: "#573C38",
  height: "100px",
  border: "none",
  cursor: "pointer",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",
  outline: "none",
  ":hover": {
    backgroundColor: "#8D6660",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
})

export const activeTab = style({
  backgroundColor: "#8D6660",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
});

export const tabText = style({
  color: "white",
  fontSize: "20px",
  fontWeight: "600",
  fontFamily: "'Inter', sans-serif",
  textAlign: "center" as const,
})

export const tabSeparator = style ({
  width: "1px",
  backgroundColor: "white",
  alignSelf: "stretch",
})
