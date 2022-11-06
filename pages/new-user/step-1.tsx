import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import { Markdown } from "../../components/elements/text/markdown";

type PolicyType = "codeOfConduct" | "termsAndConditions";

const codeOfConduct = `
All participants of Teblo are expected to abide by our Code of Conduct, both online and during in-person events that are hosted and/or associated with Teblo.

## Our Pledge
In the interest of fostering an open and welcoming environment, we as moderators of [Teblo](/) pledge to make participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

## Our Standards
Examples of behavior that contributes to creating a positive environment include:
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Referring to people by their preferred pronouns and using gender-neutral pronouns when uncertain
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:
- The use of sexualized language or imagery and unwelcome sexual attention or advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or electronic address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a professional setting
- Dismissing or attacking inclusion-oriented requests

We pledge to prioritize marginalized people’s safety over privileged people’s comfort. We will not act on complaints regarding:
- ‘Reverse’ -isms, including ‘reverse racism’, ‘reverse sexism’, and ‘cisphobia’
- Reasonable communication of boundaries, such as 'leave me alone', 'go away', or 'I’m not discussing this with you.'
- Someone’s refusal to explain or debate social justice concepts
- Criticisms of racist, sexist, cissexist, or otherwise oppressive behavior or assumptions

## Enforcement
Violations of the Code of Conduct may be reported by contacting the team via the [abuse report form](#) or by sending an email to [yo@dev.to](mailto:yo@dev.to). All reports will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. Further details of specific enforcement policies may be posted separately.

Moderators have the right and responsibility to remove comments or other contributions that are not aligned to this Code of Conduct, or to suspend temporarily or permanently any members for other behaviors that they deem inappropriate, threatening, offensive, or harmful.

## Attribution
This Code of Conduct is adapted from:
- [Contributor Covenant, version 1.4](http://contributor-covenant.org/version/1/4)
- [Write/Speak/Code](http://www.writespeakcode.com/code-of-conduct.html)
- [Geek Feminism](https://geekfeminism.org/about/code-of-conduct)
`;

const termsAndConditions = `
1. Terms

By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, our [Privacy Policy](/privacy-policy), all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.

2. Use License
    1. Permission is granted to temporarily download one copy of the materials (information or software) on Teblo's web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        1. modify or copy the materials;
        2. use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
        3. attempt to decompile or reverse engineer any software contained on Teblo's web site;
        4. remove any copyright or other proprietary notations from the materials;
        5. or transfer the materials to another person or "mirror" the materials on any other server.

    2. This license shall automatically terminate if you violate any of these restrictions and may be terminated by Teblo at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.

3. Disclaimer
    1. The materials on Teblo's web site are provided "as is". Teblo makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Teblo does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.

4. Limitations

In no event shall Teblo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Teblo's Internet site, even if Teblo or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.

5. Revisions and Errata

The materials appearing on Teblo's web site could include technical, typographical, or photographic errors. Teblo does not warrant that any of the materials on its web site are accurate, complete, or current. Teblo may make changes to the materials contained on its web site at any time without notice. Teblo does not, however, make any commitment to update the materials.

6. Links

Teblo has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Teblo of the site. Use of any such linked web site is at the user's own risk.

7. Copyright / Takedown

Users agree and certify that they have rights to share all content that they post on Teblo — including, but not limited to, information posted in articles, discussions, and comments. This rule applies to prose, code snippets, collections of links, etc. Regardless of citation, users may not post copy and pasted content that does not belong to them. Users assume all risk for the content they post, including someone else's reliance on its accuracy, claims relating to intellectual property, or other legal rights. If you believe that a user has plagiarized content, misrepresented their identity, misappropriated work, or otherwise run afoul of DMCA regulations, please email [yo@dev.to](mailto:yo@dev.to). Teblo may remove any content users post for any reason.

8. Site Terms of Use Modifications

Teblo may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.

9. Teblo Trademarks and Logos Policy

All uses of the Teblo logo, Teblo badges, brand slogans, iconography, and the like, may only be used with express permission from Teblo. Teblo reserves all rights, even if certain assets are included in Teblo open source projects. Please contact [yo@dev.to](mailto:yo@dev.to) with any questions or to request permission.

10. Reserved Names

Teblo has the right to maintain a list of reserved names which will not be made publicly available. These reserved names may be set aside for purposes of proactive trademark protection, avoiding user confusion, security measures, or any other reason (or no reason).

Additionally, Teblo reserves the right to change any already-claimed name at its sole discretion. In such cases, Teblo will make reasonable effort to find a suitable alternative and assist with any transition-related concerns.

11. Content Policy

The following policy applies to comments, articles, and all other works shared on the Teblo platform:
- Users must make a good-faith effort to share content that is on-topic, of high-quality, and is not designed primarily for the purposes of promotion or creating backlinks.
- Posts must contain substantial content — they may not merely reference an external link that contains the full post.
- If a post contains affiliate links, that fact must be clearly disclosed. For instance, with language such as: “This post includes affiliate links; I may receive compensation if you purchase products or services from the different links provided in this article.”

Teblo reserves the right to remove any content that it deems to be in violation of this policy at its sole discretion. Additionally, Teblo reserves the right to restrict any user’s ability to participate on the platform at its sole discretion.

12. Governing Law

Any claim relating to Teblo's web site shall be governed by the laws of the State of New York without regard to its conflict of law provisions.

General Terms and Conditions applicable to Use of a Web Site.
`;

const dialogContentMap: Record<PolicyType, string> = {
  codeOfConduct,
  termsAndConditions,
};

type Step1Props = { setStep: (value: SetStateAction<number>) => void };
function Step1({ setStep }: Step1Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dialogContent, setDialogContent] = useState("");
  const [acceptCodeOfConduct, setAcceptCodeOfConduct] = useState(false);
  const [acceptTermsAndConditions, setAcceptTermsAndConditions] =
    useState(false);

  function onClickPolicy(button: PolicyType) {
    setDialogContent(dialogContentMap[button]);
    onOpen();
  }

  return (
    <>
      <Box borderRadius="2xl" overflow="hidden" zIndex="1">
        <Stack spacing="1" p="12" bg="base-100" color="white">
          <Box as="figure">
            <Image
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--K-811qxB--/c_limit,f_auto,fl_progressive,q_80,w_500/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png"
              w="12"
              h="12"
              transform="rotate(-30deg)"
            />
          </Box>
          <Heading as="h1" fontWeight="800" lineHeight="shorter">
            An Nguyễn — welcome to Tech blog!
          </Heading>
          <Heading fontSize="xl" fontWeight="400" lineHeight="tall">
            A constructive and inclusive social network for software developers.
            With you every step of your journey.
          </Heading>
        </Stack>
        <Stack spacing="6" p="8" bg="white">
          <Stack as="form" spacing="2" fontWeight="500">
            <Checkbox
              onChange={() => setAcceptCodeOfConduct(!acceptCodeOfConduct)}
            >
              You agree to uphold our{" "}
              <Button
                onClick={() => onClickPolicy("codeOfConduct")}
                variant="link"
                color="primary"
              >
                Code of Conduct
              </Button>
              .
            </Checkbox>
            <Checkbox
              onChange={() =>
                setAcceptTermsAndConditions(!acceptTermsAndConditions)
              }
            >
              You agree to our{" "}
              <Button
                onClick={() => onClickPolicy("termsAndConditions")}
                variant="link"
                color="primary"
              >
                Terms and Conditions
              </Button>
              .
            </Checkbox>
          </Stack>
          <Flex justify="center">
            <Button
              size="lg"
              onClick={() => setStep(2)}
              disabled={!acceptCodeOfConduct || !acceptTermsAndConditions}
            >
              Continue
            </Button>
          </Flex>
        </Stack>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="4xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent px="12" py="4">
          <ModalHeader pb="2">
            <Button onClick={onClose} variant="primary">
              Back
            </Button>
          </ModalHeader>
          <ModalBody>
            <Markdown
              style={{
                h2: { fontSize: "27px", lineHeight: "36px" },
                li: { fontSize: "18px", lineHeight: "36px" },
                ol: {
                  fontSize: "18px",
                  lineHeight: "36px",
                },
                p: { fontSize: "18px", lineHeight: "36px" },
                ul: {
                  marginTop: "18px",
                  marginBottom: "18px",
                  fontSize: "18px",
                  lineHeight: "36px",
                },
              }}
            >
              {dialogContent}
            </Markdown>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}

export default Step1;
