import * as React from "react";
import { Box, Flex, Text } from "rebass/styled-components";
import styled from "styled-components";
import logoBlack from "url:../assets/icons/logo_black.svg";
import bgShape from "url:../assets/shapes/triangle-corner.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Layout } from "../components/Layout";

interface FooterProps {
  image: any;
  style?: React.CSSProperties;
}

const StyledBackground = styled.div`
  pointer-events: none;
  position: absolute;
  left:0;
  height: 80%;
  z-index: -1;
  `;

const Background: React.FC<FooterProps> = ({
  image,
  ...props
}) => (
  <StyledBackground>
    <img src={image} style={{ height: "80%" }} />
    <Text color="white" style={{ margin: "1px 1px 1px 1px" }}>
      Tip local<br />stay social
    </Text>
  </StyledBackground>
);

const inputLabels = [
  { title: "First name", state: "firstName" },
  { title: "Last name", state: "lastName" },
  { title: "Username", state: "username" },
  { title: "Email", state: "email" },
  { title: "Password", state: "password" },
  { title: "Repeat password", state: "passwordRepeat" },
  { title: "Location", state: "location" },
];

export const Register: React.FC = () => {
  const [formInput, setFormInput] = React.useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
    location: "",
  });

  return <Layout>
    <Background image={bgShape} />
    <Flex>
      <Box width={1 / 2} />
      <Box
        width={1 / 2}
        as="form"
        onSubmit={(e) => e.preventDefault()}
        py={3}
      >
        <img
          src={logoBlack}
          style={{
            margin: "0 auto",
            display: "block",
            width: "160px",
            padding: "2rem 0",
          }}
        />
        <Box mx="auto" maxWidth="500px">
          {inputLabels.map((el) =>
            <Input
              sx={{ marginBottom: 2 }}
              title={el.title}
              value={formInput[el.state]}
              onChange={(e) =>
                setFormInput({
                  ...formInput,
                  [el.state]: e.target.value,
                })}
            />
          )}
          <Button text="Register" sx={{ float: "right" }} />
        </Box>

        <Box mx="auto">
        </Box>
      </Box>
    </Flex>
  </Layout>;
};
