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
    UploadText
} from "./EmployeeEdit.styles";
import { LuUserRoundPlus } from "react-icons/lu";

function EmployeeEdit({
    formData,
    handleChange,
    handleSubmit,
    handleCancel,
    departments = [],
    setPage,
    hasNext
}) {
    return (
        <Wrapper>
            <Grid>
                <Left>
                    <UploadBox>
                        <Avatar>
                            {formData.profile_pic ? (
                                <img
                                    src={formData.profile_pic}
                                    alt={formData.fullName}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                                />
                            ) : (
                                <span><LuUserRoundPlus /></span>
                            )}
                        </Avatar>
                    </UploadBox>

                    <Field>
                        <Label>Full Name</Label>
                        <Input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter Full Name"
                        />
                    </Field>

                    <Field>
                        <Label>Email Id</Label>
                        <Input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Your Email Id"
                        />
                    </Field>

                    <Field>
                        <Label>Date Of Birth</Label>
                        <Input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                    </Field>
                    <Field>
                        <Label>Address</Label>
                        <Input
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter Your Address"
                        />
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
                    </Field>

                    <Field>
                        <Label>Department</Label>
                        <Select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            onScroll={(e) => {
                                const target = e.target;

                                const bottom =
                                    target.scrollHeight - target.scrollTop <= target.clientHeight + 5;

                                if (bottom && hasNext) {
                                    setPage((prev) => prev + 1);
                                }
                            }}
                        >
                            <option value="">Select Department</option>

                            {departments.map((dept) => (
                                <option key={dept.id} value={dept.id}>
                                    {dept.name}
                                </option>
                            ))}
                        </Select>
                    </Field>

                    <Field>
                        <Label>Designation</Label>
                        <Input
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            placeholder="Enter Designation"
                        />
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
                    </Field>

                    <Field>
                        <Label>Roles</Label>
                        <Select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="">Select Role</option>
                            <option value="Admin">Admin</option>
                            <option value="Manager">Manager</option>
                            <option value="Employee">Employee</option>
                        </Select>
                    </Field>

                    <Field>
                        <Label>Phone Number</Label>
                        <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter Phone Number"
                        />
                    </Field>
                </Right>
            </Grid>
        </Wrapper>
    );
}

export default EmployeeEdit;