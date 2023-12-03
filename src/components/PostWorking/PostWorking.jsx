import { useRef, useState } from "react";
import Container from "../Container/Container";
import {
  HelperText,
  FieldInput,
  FieldLable,
  FormItem,
  ErrorText,
  RadioInput,
  RadioLable,
  RadioInputCustom,
  UploadButon,
  UploadLable,
  InputWrapper,
  Group,
  Form,
  Subtitle,
  ButtonWrapper,
} from "./PostWorking.styled";
import { useForm } from "react-hook-form";
import ButtonPrimery from "../ButtonPrimery/ButtonPrimery";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    position: yup.string().required(),
    avatar: yup.object(),
  })
  .required();

const PostWorking = () => {
  const [url, setUrl] = useState({});
  const [dataField, setDataField] = useState({});
  const uploadRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormData = (data) => {
    console.log(data);
    console.log({ ...data, avatar: url });
    const dataToStirng = JSON.stringify({ ...data, avatar: url });
    alert(dataToStirng);
  };

  const onUpload = (e) => uploadRef.current.click();

  const uploadImage = (event) => {
    const file = event.currentTarget.files[0];
    const pathFile = event.target.value;
    const formData = new FormData();
    formData.append("avatarURL", file);
    formData.append("path", pathFile);
    setUrl({ avatarFile: file, path: pathFile });
  };

  const handleDataBeforeSubmit = (event) => {
    const { value, name } = event.target;
    setDataField({ ...dataField, [name]: value });
  };

  const handleButtonStatus = () => {
    if (
      dataField.name?.length > 0 &&
      dataField.email?.length > 0 &&
      dataField.phone?.length > 0 &&
      dataField.position?.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Container
      elementType={"section"}
      padding={"70px 16px 70px 16px"}
      paddingTbalet={"70px 32px 70px 32px"}
      paddingDesctop={"70px 60px 70px 60px"}
      paddingLarge={"70px 0px 70px 0px"}
    >
      <Form onSubmit={handleSubmit(handleFormData)}>
        <Group role="group">
          <Subtitle>Working with POST request</Subtitle>
          <FormItem>
            <FieldInput
              type="text"
              id="author-name"
              {...register("name", { required: "The name is required" })}
              placeholder=""
              onChange={handleDataBeforeSubmit}
            />
            <FieldLable htmlFor="author-name">Name</FieldLable>
            {errors.name && <ErrorText>{errors.name?.message}</ErrorText>}
          </FormItem>

          <FormItem>
            <FieldInput
              type="email"
              id="author-email"
              {...register("email", { required: "Email Address is required" })}
              placeholder=""
              onChange={handleDataBeforeSubmit}
            />
            <FieldLable htmlFor="author-email">Email</FieldLable>
            {errors.email && <ErrorText>{errors.email?.message}</ErrorText>}
          </FormItem>

          <FormItem>
            <FieldInput
              type="tel"
              id="author-tel"
              {...register("phone", {
                required:
                  "The phone number is required. Number must contains only numbers",
                pattern: /^\d+$/,
              })}
              placeholder=""
              minLength="7"
              maxLength="17"
              onChange={handleDataBeforeSubmit}
            />
            <FieldLable htmlFor="author-tel">Phone</FieldLable>
            {errors.phone && <ErrorText>{errors.phone?.message}</ErrorText>}
            <HelperText>+38 (XXX) XXX-XX-XX</HelperText>
          </FormItem>
          <InputWrapper>
            <p>Select your position</p>
            <RadioLable>
              <RadioInput
                type="radio"
                value="frontend developer"
                name="position"
                onClick={handleDataBeforeSubmit}
                {...register("position", { required: true })}
              />
              <RadioInputCustom></RadioInputCustom>
              Frontend developer
            </RadioLable>

            <RadioLable>
              <RadioInput
                type="radio"
                value="backend developer"
                name="position"
                onClick={handleDataBeforeSubmit}
                {...register("position", { required: true })}
              />
              <RadioInputCustom></RadioInputCustom>
              Backend developer
            </RadioLable>

            <RadioLable>
              <RadioInput
                type="radio"
                value="designer"
                name="position"
                onClick={handleDataBeforeSubmit}
                {...register("position", { required: true })}
              />
              <RadioInputCustom></RadioInputCustom>
              Designer
            </RadioLable>

            <RadioLable>
              <RadioInput
                type="radio"
                value="qa"
                name="position"
                onClick={handleDataBeforeSubmit}
                {...register("position", { required: true })}
              />
              <RadioInputCustom></RadioInputCustom>
              QA
            </RadioLable>
            {errors.position && (
              <ErrorText>{errors.position?.message}</ErrorText>
            )}
          </InputWrapper>

          <InputWrapper>
            <UploadButon type="button" onClick={onUpload}>
              Upload
            </UploadButon>
            <UploadLable>
              <input
                type="file"
                name="avatarURL"
                ref={uploadRef}
                style={{ display: "none" }}
                onChange={uploadImage}
                accept=".jpg, .png"
              />
              Upload your photo
            </UploadLable>
          </InputWrapper>

          <ButtonWrapper>
            <ButtonPrimery padding={"4px 19px"} type={"submit"} disabled={!handleButtonStatus()}>
              Sing up
            </ButtonPrimery>
          </ButtonWrapper>
        </Group>
      </Form>
    </Container>
  );
};

export default PostWorking;
