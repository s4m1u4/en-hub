import styled from "@emotion/styled";

export const SectionTitle = styled.h1({
  fontWeight: 500,
  fontSize: "1rem",
  textTransform: "uppercase",
});

export const InfoText = styled.p({
  fontWeight: 400,
  fontSize: "1rem",
  "& > span": {
    fontWeight: 500,
  },
});
