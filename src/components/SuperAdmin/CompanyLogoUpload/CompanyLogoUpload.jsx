import React, { useRef } from "react";
import {
  Wrapper,
  Circle,
  UploadIcon,
  RemoveIcon,
  Label,
  HiddenInput,
} from "./CompanyLogoUpload.styles";
import { FiImage, FiX } from "react-icons/fi";

const CompanyLogoUpload = ({ value, onChange }) => {
  const fileRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onChange(file); 
    }
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    onChange(null);
  };

  const preview =
    value instanceof File
      ? URL.createObjectURL(value)
      : value;
  return (
    <Wrapper>
      <Circle onClick={() => fileRef.current.click()}>
        {preview ? (
          <>
            <img src={preview} alt="logo" />
            <RemoveIcon onClick={handleRemove}>
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
