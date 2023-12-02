import { useState } from "react";
import Container from "../Container/Container";
import {
  HelperText,
  FieldInput,
  FieldLable,
  FormItem,
} from "./PostWorking.styled";

const PostWorking = () => {
  const [focus, setFocus] = useState(false);

  console.log(focus);
  return (
    <Container
      elementType={"section"}
      padding={"140px 16px 70px 16px"}
      paddingTbalet={"140px 32px 70px 32px"}
      paddingDesctop={"140px 60px 70px 60px"}
      paddingLarge={"140px 0px 70px 0px"}
    >
      <form>
        <div role="group">
          <FormItem>
            <FieldLable htmlFor="author-name">Name</FieldLable>
            <FieldInput
              type="text"
              id="author-name"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
            <HelperText>{focus && "text"}</HelperText>
          </FormItem>

          <FormItem>
            <FieldLable htmlFor="author-email">Email</FieldLable>
            <FieldInput
              type="email"
              id="author-email"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
            <HelperText>{focus && "text"}</HelperText>
          </FormItem>

          <FormItem>
            <FieldLable htmlFor="author-tel">Phone</FieldLable>
            <FieldInput
              type="tel"
              id="author-tel"
              minLength="7"
              maxLength="17"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
            <HelperText>{focus && "text"}</HelperText>
          </FormItem>
        </div>
      </form>
    </Container>
  );
};

export default PostWorking;
