import styled from "styled-components";

/* ================= WRAPPER ================= */
export const Wrapper = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

/* ================= HEADER ================= */
export const Header = styled.div`
  margin-bottom: 30px;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Subtitle = styled.p`
  margin-top: 8px;
  font-size: 13px;
  font-weight: 100;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

/* ================= CARDS GRID ================= */
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;

  /* Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

/* ================= CARD ================= */
export const Card = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0px 2.7px 25px 0px rgba(15, 15, 15, 0.05);
  border: 0.01px solid rgba(61, 51, 51, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

/* ================= LEFT ================= */
export const Left = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

/* ================= ICON ================= */
export const IconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffecec;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c61217;

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;

/* ================= TEXT ================= */
export const CardTitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Count = styled.h3`
  margin: 5px 0 0;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

/* ================= RIGHT ================= */
export const Right = styled.div``;

/* ================= ADD BUTTON ================= */
export const AddButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #c61217;
  border: none;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  box-shadow: 0px 5px 15px rgba(65, 63, 63, 0.3);
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;