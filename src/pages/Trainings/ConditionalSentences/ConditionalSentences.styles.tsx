import styled from "@emotion/styled";

export const SectionTitle = styled.h1({
  fontWeight: 500,
  fontSize: "1rem",
  textTransform: "uppercase",
});

export const ConditionalTitle = styled.h4({
  fontWeight: 500,
  fontSize: "1.25rem",
});

export const ConditionalText = styled.p({
  fontWeight: 400,
  fontSize: "1rem",
  "& > span": {
    fontWeight: 500,
  },
  "& > u": {
    fontWeight: 500,
  },
});
