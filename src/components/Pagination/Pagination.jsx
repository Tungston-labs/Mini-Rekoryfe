import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (!totalPages || totalPages <= 1) return null;
const getPages = () => {
  const pages = [];
  const delta = 1; // how many pages around current

  const left = Math.max(2, currentPage - delta);
  const right = Math.min(totalPages - 1, currentPage + delta);

  pages.push(1);

  if (left > 2) {
    pages.push("...");
  }

  for (let i = left; i <= right; i++) {
    pages.push(i);
  }

  if (right < totalPages - 1) {
    pages.push("...");
  }

  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
};

  return (
    <div style={styles.container}>
      <button
        style={styles.navButton}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ‹
      </button>
     {getPages().map((item, index) =>
  item === "..." ? (
    <span key={index} style={{ padding: "0 4px" }}>
      ...
    </span>
  ) : (
    <button
      key={item}
      onClick={() => onPageChange(item)}
      style={{
        ...styles.pageButton,
        ...(currentPage === item && styles.active),
      }}
    >
      {item}
    </button>
  )
)}
      <button
        style={styles.navButton}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ›
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding:"10px",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    gap: "4px",
    marginTop: "20px",
  },

  navButton: {
    width: "22px",
    height: "23px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    background: "#f5f5f5",
    cursor: "pointer",
    fontSize: "12px",
  },

  pageButton: {
    width: "25px",
    height: "25px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
    fontWeight: "500",
 fontSize: "10px",
  },

  active: {
    background: "#C61217", 
    color: "#fff",
    border: "1px solid #C61217",
   
  },
};

export default Pagination;