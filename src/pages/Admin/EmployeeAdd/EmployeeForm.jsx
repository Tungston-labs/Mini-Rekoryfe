import React from "react";
import {
  Wrapper,
  Grid,
  Left,
  Right,
  Field,
  Label,
  Input,
  Select,
  ButtonRow,
  SaveButton,
  CancelButton,
  UploadBox,
  Avatar,
  UploadText,
  ErrorText
} from "./EmployeeForm.styles";
import { LuUserRoundPlus } from "react-icons/lu";


function EmployeeForm({
  formData = {},
  handleChange = () => { },
  handleSubmit = () => { },
  handleCancel = () => { },
  handleImageUpload = () => { },
  errors = {},
  departments = []

}) {
  return (
    <>
      <Wrapper>
        <Grid>
          <Left>
            <UploadBox>
              <label htmlFor="avatar-upload" style={{ cursor: "pointer", display: "flex", flexDirection: "column", }}>
                <Avatar>
                  {formData.avatarPreview ? (
                    <img
                      src={formData.avatarPreview}
                      alt="Employee"
                      style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                    />
                  ) : (
                    <span><LuUserRoundPlus /></span>
                  )}
                </Avatar>
                <UploadText>Upload Employee Photo</UploadText>
              </label>

              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="avatar-upload"
                onChange={handleImageUpload}
              />
              {errors.avatar && <ErrorText>{errors.avatar}</ErrorText>}
            </UploadBox>


            <Field>
              <Label>Full Name</Label>
              <Input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter Full Name"
                autoComplete="off"
              />
              {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}

            </Field>

            <Field>
              <Label>Email Id</Label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email Id"
                autoComplete="off"
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </Field>

            <Field>
              <Label>Date Of Birth</Label>
              <Input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.dob && <ErrorText>{errors.dob}</ErrorText>}
            </Field>

            <Field>
              <Label>Address</Label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter Your Address"
                autoComplete="off"
              />
              {errors.address && <ErrorText>{errors.address}</ErrorText>}
            </Field>

            <Field>
              <Label>Gender</Label>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Select>
              {errors.gender && <ErrorText>{errors.gender}</ErrorText>}
            </Field>

            <ButtonRow>
              <SaveButton onClick={handleSubmit}>Save</SaveButton>
              <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            </ButtonRow>
          </Left>
          <Right>
            <Field>
              <Label>Joining Date</Label>
              <Input
                type="date"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
              />
              {errors.joiningDate && <ErrorText>{errors.joiningDate}</ErrorText>}
            </Field>

            <Field>
              <Label>Department</Label>
              <Select
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select Department</option>

                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </Select>
              {errors.department && <ErrorText>{errors.department}</ErrorText>}
            </Field>

            <Field>
              <Label>Designation</Label>
              <Input
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Enter Designation"
                autoComplete="off"
              />
              {errors.designation && <ErrorText>{errors.designation}</ErrorText>}
            </Field>

            <Field>
              <Label>Employment Type</Label>
              <Select
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
              >
                <option value="">Select Type</option>
                <option value="full_time">Full Time</option>
                <option value="part_time">Part Time</option>
                <option value="contract">Contract</option>
              </Select>
              {errors.employmentType && <ErrorText>{errors.employmentType}</ErrorText>}
            </Field>

            <Field>
              <Label>Roles</Label>
              <Select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select Role</option>   
                <option value="hr">HR</option>
                <option value="employee">Employee</option>
              </Select>
              {errors.role && <ErrorText>{errors.role}</ErrorText>}
            </Field>

            <Field>
              <Label>Phone Number</Label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                autoComplete="off"
              />
              {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
            </Field>
          </Right>
        </Grid>
      </Wrapper>
    </>
  );
}

export default EmployeeForm;
