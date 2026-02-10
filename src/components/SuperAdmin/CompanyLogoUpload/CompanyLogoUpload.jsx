import React, { useRef, useState } from "react";
import {
  Wrapper,
  Circle,
  UploadIcon,
  RemoveIcon,
  Label,
  HiddenInput,
} from "./CompanyLogoUpload.styles";
import { FiImage, FiX } from "react-icons/fi";

const CompanyLogoUpload = () => {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <Wrapper>
      <Circle onClick={() => fileRef.current.click()}>
        {preview ? (
          <>
            <img src={preview} alt="logo" />
            <RemoveIcon onClick={() => setPreview(null)}>
              <FiX size={12} />
            </RemoveIcon>
          </>
        ) : (
          <UploadIcon>
            <FiImage size={22} />
          </UploadIcon>
        )}
      </Circle>

      <Label>Upload Company Logo</Label>

      <HiddenInput
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default CompanyLogoUpload;
