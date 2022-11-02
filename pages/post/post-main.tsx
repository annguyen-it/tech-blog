import { Stack } from "@chakra-ui/react";
import { Markdown } from "../../components/elements/text/markdown";

function Post() {
  const body = `
As the Flutter community grows, it is also creating a variety of libraries to support the native functionality. When a user’s fingerprints, facial characteristics, or voice are used to authenticate their identification, this is referred to as biometric authentication. Let’s see how you can implement Local Authentication for Biometrics in Flutter.

Almost every phone on the market today has some kind of biometric authentication. We no longer need to type in a password since we can just press our fingerprints to verify our identity. Fingerprint Authentication in Flutter Apps is the topic of this essay.

## Import \`local_auth\` Package
First off, We include \`local_auth\` package into our \`pubspec.yaml\` file so we can use it in our project.
\`\`\`
dependencies:
  flutter:
    sdk: flutter
  # The following adds the Cupertino Icons font to your application.
  # Use with the CupertinoIcons class for iOS style icons.
  cupertino_icons: ^1.0.5
  local_auth: ^2.1.2
  local_auth_android: ^1.0.14
  local_auth_ios: ^1.0.10
\`\`\`

## How to Use \`local_auth\`
This Flutter plugin enables us to authenticate users locally, on the device, using this feature.

To check whether there is local authentication available on this device or not, call canCheckBiometrics (if you need biometrics support) and/or isDeviceSupported() (if you just need some device-level authentication):
\`\`\`
final LocalAuthentication auth = LocalAuthentication();
final bool canAuthenticateWithBiometrics = await auth.canCheckBiometrics;
final bool canAuthenticate =
    canAuthenticateWithBiometrics || await auth.isDeviceSupported();
\`\`\`
Don’t forget to import the package into your file like this:
\`import 'package:local_auth/local_auth.dart';\`
Currently the following biometric types are implemented:
- BiometricType.face
- BiometricType.fingerprint
- BiometricType.weak
- BiometricType.strong
## Enrolled Biometrics
canCheckBiometrics indicates whether hardware support is available, not whether the device has any biometrics enrolled. To get a list of enrolled biometrics, call getAvailableBiometrics().

The types are device-specific and platform-specific, and other types may be added in the future, so when possible you should not rely on specific biometric types and only check that some biometric is enrolled:
\`\`\`
final List<BiometricType> availableBiometrics =
await auth.getAvailableBiometrics();

if (availableBiometrics.isNotEmpty) {
  // Some biometrics are enrolled.
}

if (availableBiometrics.contains(BiometricType.strong) ||
    availableBiometrics.contains(BiometricType.face)) {
  // Specific types of biometrics are available.
  // Use checks like this with caution!
}
\`\`\`
## Options
authenticate() method uses biometric authentication when possible, but also allows fallback to pin, pattern, or passcode.

For more advanced features, check out the original post on [how to implement local authentication for biometrics in Flutter](https://instaflutter.com/flutter-tutorials/flutter-local-authentication-biometrics/).
  `;
  return (
    <Stack as="nav">
      <Markdown>{body}</Markdown>
    </Stack>
  );
}

export default function PostMain() {
  return <Post />;
}
