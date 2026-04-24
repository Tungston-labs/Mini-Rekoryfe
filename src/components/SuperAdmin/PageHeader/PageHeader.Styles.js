import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #FAFAFC;
  border-bottom: 1px solid #0000001A;

  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap; /* ✅ allows stacking on small screens */
  gap: 10px;

  @media (min-width: 768px) {
    padding: 20px 20px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  min-width: 200px; /* ✅ prevents breaking */

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: #111827;
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;

  font-size: 18px;

  @media (min-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const SubTitle = styled.p`
  color: #6b7280;
  margin-top: 8px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;

  font-size: 12px;

  @media (min-width: 480px) {
    font-size: 13px;
  }

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  flex-wrap: wrap; /* ✅ wrap buttons */

  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-start; /* stack below title */
  }

  @media (min-width: 481px) {
    justify-content: flex-end;
  }
`;