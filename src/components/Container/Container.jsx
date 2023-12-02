import {
  ContainerHeader,
  ContainerSection,
  HeaderWrapper,
  SectionWrapper,
} from "./Container.styled";

const Container = ({ children, elementType, ...props }) => {
  if (elementType === "header") {
    return (
      <HeaderWrapper {...props}>
        <ContainerHeader {...props}>{children}</ContainerHeader>
      </HeaderWrapper>
    );
  }
  if (elementType === "section") {
    return (
      <SectionWrapper {...props}>
        <ContainerSection {...props}>{children}</ContainerSection>
      </SectionWrapper>
    );
  }
};

export default Container;
