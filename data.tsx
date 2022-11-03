import { FaHashtag, FaHome, FaQuestion } from "react-icons/fa";
import { Post } from "./models";

// data main index
export const Posts = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Vt_eVVRg--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://www.entropywins.wtf/blog/wp-content/uploads/2022/09/code.jpg",
    author: {
      url: "johnny.depp",
      name: "Johnny Depp",
      intro: "I'm an actor",
      work: "Hollywood",
      joined: new Date(2019, 5, 9),
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--4Jbi0yB4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/2884/27097c7514e0bf985ccbe9a8ccd2a550.jpeg",
    },
    createdDate: new Date(2022, 9, 9),
    title: "Advice for junior developers",
    url: "123456",
    tags: ["beginners", "newbie", "learning"],
    likes: 900,
    comments: 30,
    timeToRead: 9,
  },
  {
    id: 2,
    image: "",
    author: {
      id: 2,
      name: "Johnny Depp",
      intro: "I'm an actor",
      work: "Hollywood",
      joined: new Date(2019, 5, 9),
      image: "",
    },
    createdDate: new Date(2022, 9, 9),
    title: "Advice for junior developers",
    url: "123451",
    tags: ["beginners", "newbie", "learning"],
    likes: 1,
    comments: 30,
    timeToRead: 9,
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Vt_eVVRg--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://www.entropywins.wtf/blog/wp-content/uploads/2022/09/code.jpg",
    author: {
      url: "johnny.depp",
      name: "Johnny Depp",
      intro: "I'm an actor",
      work: "Hollywood",
      joined: new Date(2019, 5, 9),
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--4Jbi0yB4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/2884/27097c7514e0bf985ccbe9a8ccd2a550.jpeg",
    },
    createdDate: new Date(2022, 9, 9),
    title: "Advice for junior developers",
    url: "123456",
    tags: ["beginners", "newbie", "learning"],
    likes: 900,
    comments: 30,
    timeToRead: 9,
  },
  {
    id: 4,
    image: "",
    author: {
      url: "johnny.depp",
      name: "Johnny Depp",
      intro: "I'm an actor",
      work: "Hollywood",
      joined: new Date(2019, 5, 9),
      image: "",
    },
    createdDate: new Date(2022, 9, 9),
    title: "Advice for junior developers",
    url: "123451",
    tags: ["beginners", "newbie", "learning"],
    likes: 1,
    comments: 30,
    timeToRead: 9,
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Vt_eVVRg--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://www.entropywins.wtf/blog/wp-content/uploads/2022/09/code.jpg",
    author: {
      url: "johnny.depp",
      name: "Johnny Depp",
      intro: "I'm an actor",
      work: "Hollywood",
      joined: new Date(2019, 5, 9),
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--4Jbi0yB4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/2884/27097c7514e0bf985ccbe9a8ccd2a550.jpeg",
    },
    createdDate: new Date(2022, 9, 9),
    title: "Advice for junior developers",
    url: "123456",
    tags: ["beginners", "newbie", "learning"],
    likes: 900,
    comments: 30,
    timeToRead: 9,
  },
  {
    id: 6,
    image: "",
    author: {
      url: "johnny.depp",
      name: "Johnny Depp",
      intro: "I'm an actor",
      work: "Hollywood",
      joined: new Date(2019, 5, 9),
      image: "",
    },
    createdDate: new Date(2022, 9, 9),
    title: "Advice for junior developers",
    url: "123451",
    tags: ["beginners", "newbie", "learning"],
    likes: 1,
    comments: 30,
    timeToRead: 9,
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Vt_eVVRg--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://www.entropywins.wtf/blog/wp-content/uploads/2022/09/code.jpg",
    author: {
      url: "johnny.depp",
      name: "Johnny Depp",
      intro: "I'm an actor",
      work: "Hollywood",
      joined: new Date(2019, 5, 9),
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--4Jbi0yB4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/2884/27097c7514e0bf985ccbe9a8ccd2a550.jpeg",
    },
    createdDate: new Date(2022, 9, 9),
    title: "Advice for junior developers",
    url: "123456",
    tags: ["beginners", "newbie", "learning"],
    likes: 900,
    comments: 30,
    timeToRead: 9,
  },
  {
    id: 8,
    image: "",
    author: {
      url: "johnny.depp",
      name: "Johnny Depp",
      intro: "I'm an actor",
      work: "Hollywood",
      joined: new Date(2019, 5, 9),
      image: "",
    },
    createdDate: new Date(2022, 9, 9),
    title: "Advice for junior developers",
    url: "123451",
    tags: ["beginners", "newbie", "learning"],
    likes: 1,
    comments: 30,
    timeToRead: 9,
  },
];

// data left index
export const categories = [
  {
    title: "Home",
    icon: <FaHome />,
    href: "/",
  },
  {
    title: "Hashtags",
    icon: <FaHashtag />,
    href: "/hashtags",
  },
  {
    title: "FAQ",
    icon: <FaQuestion />,
    href: "/faq",
  },
];

export const tags = [
  "javascript",
  "webdev",
  "beginners",
  "programming",
  "react",
  "python",
  "angular",
  "csharp",
  "cplusplus",
  "ruby",
];
// data right index
export const listings = [
  {
    id: 1,
    title: "Looking for a Linus  content writter",
    event: "job",
  },
  {
    id: 2,
    title: "Help Needed for Low-code Framework for Node.js",
    event: "collabs",
  },
  {
    id: 3,
    title: "You are font-end developer? This is for you, Sample Data API",
    event: "collabs",
  },
  {
    id: 4,
    title: "Help Needed for Low-code Framework for Node.js",
    event: "collabs",
  },
  {
    id: 5,
    title: "Help Needed for Low-code Framework for Node.js",
    event: "collabs",
  },
];
export const helps = [
  {
    id: 1,
    title: "is there a CMS that produces social networks or communities?",
    numberCmt: 2,
  },
  {
    id: 2,
    title: "Want your blog post to be ready by more? Click here!",
    numberCmt: 0,
  },
  {
    id: 3,
    title:
      "hey guys I need help with a presentation I want the best thing to being related to date engineering",
    numberCmt: 0,
  },
  {
    id: 4,
    title:
      "In handle bars if there is an attribute that is an array values, how we can group by that if the json is not sorted?",
    numberCmt: 13,
  },
];
export const discuss = [
  {
    id: 1,
    title: "What was your win this week?",
    numberCmt: 14,
  },
  {
    id: 2,
    title: "Open Visual Code from  the Terminal",
    numberCmt: 6,
  },
  {
    id: 3,
    title: "How to do machine learning in Javascript?",
    numberCmt: 0,
  },
  {
    id: 4,
    title: "Share a Screenshot of your Terminal",
    numberCmt: 1,
  },
  {
    id: 5,
    title: "A major de todas as fraquezas o medo de parecer fraco",
    numberCmt: 0,
  },
];
export const challenge = [
  {
    id: 1,
    title: "MAANG - Dream for many people",
    numberCmt: 0,
  },
  {
    id: 2,
    title: "How many AWS Services Can You Nam?",
    numberCmt: 0,
  },
  {
    id: 3,
    title: "976.Leetcode solution in python 3",
    numberCmt: 0,
  },
  {
    id: 4,
    title: "Printing Staircase in Javascript",
    numberCmt: 4,
  },
  {
    id: 5,
    title: "Daily Challenge #256 - How many Are Smaller Than I",
    numberCmt: 8,
  },
];

export const Share = [
  {
    id: 1,
    text: "Share to Twitter",
  },
  {
    id: 2,
    text: "Share to Linkedln",
  },
  {
    id: 3,
    text: "Share to Reddit",
  },
  {
    id: 4,
    text: "Share to Hacker News",
  },
  {
    id: 5,
    text: "Share to Facebook",
  },
  {
    id: 6,
    text: "Share Post via...",
  },
  {
    id: 7,
    text: "Report Abuse",
  },
];

export const dummyPost: Post = {
  id: 1,
  coverImage:
    "https://res.cloudinary.com/practicaldev/image/fetch/s--Vt_eVVRg--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://www.entropywins.wtf/blog/wp-content/uploads/2022/09/code.jpg",
  author: {
    url: "johnny.depp",
    name: "Johnny Depp",
    intro: "I'm an actor",
    work: "Hollywood",
    joined: new Date(2019, 5, 9),
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--4Jbi0yB4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/2884/27097c7514e0bf985ccbe9a8ccd2a550.jpeg",
  },
  createdAt: new Date(2022, 9, 9),
  title: "Advice for junior developers",
  tags: ["beginners", "newbie", "learning"],
  likes: 900,
  comments: 30,
  timeToRead: 9,
  body: `
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
`,
};
