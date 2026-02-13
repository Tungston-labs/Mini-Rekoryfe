import React from "react";

const shimmer = {
  background: "linear-gradient(90deg, #f3f3f3 25%, #ecebeb 37%, #f3f3f3 63%)",
  backgroundSize: "400% 100%",
  animation: "skeleton 1.4s ease infinite",
};

const PageSkeleton = () => {
  return (
    <div style={styles.container}>
      <div style={styles.cardRow}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={styles.card}>
            <div style={{ ...styles.cardIcon, ...shimmer }} />
            <div style={styles.cardText}>
              <div style={{ ...styles.lineSmall, ...shimmer }} />
              <div style={{ ...styles.lineLarge, ...shimmer }} />
            </div>
          </div>
        ))}
      </div>
      <div style={styles.table}>
        <div style={styles.tableHeader}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{ ...styles.headerCell, ...shimmer }} />
          ))}
        </div>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} style={styles.tableRow}>
            <div style={{ ...styles.avatar, ...shimmer }} />
            <div style={{ ...styles.cellWide, ...shimmer }} />
            <div style={{ ...styles.cell, ...shimmer }} />
            <div style={{ ...styles.cell, ...shimmer }} />
            <div style={{ ...styles.cellSmall, ...shimmer }} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    marginTop:"20px"
    
  },
  cardRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  cardIcon: {
    width: "50px",
    height: "50px",
    borderRadius: "12px",
  },
  cardText: {
    flex: 1,
  },
  lineSmall: {
    height: "10px",
    width: "60%",
    borderRadius: "6px",
    marginBottom: "8px",
  },
  lineLarge: {
    height: "16px",
    width: "80%",
    borderRadius: "6px",
  },
  table: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  tableHeader: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  headerCell: {
    flex: 1,
    height: "14px",
    borderRadius: "6px",
  },
  tableRow: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "18px",
  },
  avatar: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
  },
  cellWide: {
    flex: 2,
    height: "14px",
    borderRadius: "6px",
  },
  cell: {
    flex: 1,
    height: "14px",
    borderRadius: "6px",
  },
  cellSmall: {
    width: "60px",
    height: "14px",
    borderRadius: "6px",
  },
};

export default PageSkeleton;
