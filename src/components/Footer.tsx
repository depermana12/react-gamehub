import { Stack, Link, Image, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.webp";

const socials = [
  {
    id: 1,
    url: "https://github.com/depermana12",
    label: "Github Account",
    type: "gray",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://twitter.com/",
    label: "Twitter Account",
    type: "twitter",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://linkedin.com/in/deddiapermana",
    label: "LinkedIn Account",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  return (
    <Stack
      maxW="5xl"
      marginInline="auto"
      p={8}
      spacing={{ base: 8, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: "column", md: "row" }}
    >
      <Image w="100px" src={logo} alt="logo game hub" />

      <Stack
        direction="row"
        spacing={5}
        pt={{ base: 4, md: 0 }}
        alignItems="center"
      >
        {socials.map(({ id, url, label, type, icon }) => (
          <IconButton
            key={id}
            as={Link}
            isExternal
            href={url}
            aria-label={label}
            colorScheme={type}
            icon={icon}
            rounded="md"
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
