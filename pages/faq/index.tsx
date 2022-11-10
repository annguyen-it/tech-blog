import {Box, Stack } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Layout from '../../components/layout/layout';
import { Text } from '@chakra-ui/react'
import { Code } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import faq1 from './public/faq1.png'
export default function faqLayout(){
    return(
        <Layout>
            <Head>
                <title>FAQ</title>
            </Head>

            <Stack 
            spacing="4"
            width={{ md: "55%" }}
            m="auto"
            p="7"
            pl='3%'
            background='white'
            borderRadius='10px'
            border='1px'
            borderColor='gray.200'>
                <Text 
                as='b'
                fontSize='6xl'>
                Frequently Asked Questions 🤔
                </Text>
                <Text as='i'
                fontSize='xl'>
                Some of these are not actually asked frequently, but they're still good to know.
                </Text>
                <Text as='b'
                fontSize='2xl'>
                Who can post to dev.to?
                </Text>
                <Text
                fontSize='xl'>
                Anyone! Yes, you have permission to make a new post of any kind as long as it meets our community guidelines and gets through common-sense spam filters. Your post is subject to removal at the discretion of the moderators if they believe it does not meet the requirements of our code of conduct.
                </Text>
                <Text as='b'
                fontSize='2xl'>
                How do I post article on dev.to?
                </Text>
               <Stack direction='row'>
               <Text
                fontSize='xl'>
               Click on "Write a Post" in the top right corner of the site. Write your article, give it a title, tag it with appropriate tags, and fill out any other relevant fields. Then, once you're ready, change  to <Code
               borderRadius='10%' 
                children='published: false'/> to  <Code
               borderRadius='10%'
                children='published: true'/> in the front matter of the post and save. Your post will now be published.
                </Text>
               </Stack>

               <Text as='b'
                fontSize='2xl'>
              Is there a guide for how to use DEV's editor?
                </Text>
                <Text
                fontSize='xl'>
               Yes! Here is our editor guide, you can also find it by clicking the "?" page in the editor.
                </Text>

                <Text as='b'
                fontSize='2xl'>
              How do I get featured on the home page?How do I get featured on the home page?
                </Text>
                <Text
                fontSize='xl'>
               The home page is selected by our editorial team. You can email us with any specific questions.
                </Text>

                <Text as='b'
                fontSize='2xl'>
              Can I cross-post something I've already written on my own blog or Medium?
                </Text>
                <Text
                fontSize='xl'>
               Absolutely, as long as you have the rights you need to do so! And if it's of high quality, we'll feature it.
                </Text>

                <Text as='b'
                fontSize='2xl'>
              How do I change my Twitter/GitHub username?
                </Text> 
                <Text
                fontSize='xl'>
               You can add or remove Twitter/GitHub associations from your settings, but note that you can only do this if both Twitter and GitHub are connected to your account. If you have any issues with this, email yo@dev.to and we'll take care of it.
                </Text>

                <Text as='b'
                fontSize='2xl'>
              What about my post's Google ranking?
                </Text>
                <Text
                fontSize='xl'>
               You can set the canonical_url of your post before publishing so that Google knows where to send the link juice (that precious, precious link juice).
                </Text>

                <Text as='b'
                fontSize='2xl'>
              How do I add a canonical URL?
                </Text>
                <Stack direction='column'><Text
                fontSize='xl'>
               In your post editor, click the menu button:
               <Image 
               src='./public/faq1.png'
               fallbackSrc="placeholdit.com/200x200"
               alt='Ảnh con heo'/>
                </Text></Stack>
                
                
                <Text as='b'
                fontSize='2xl'>
              I found a bug (not a security vulnerability). How do I report it?
                </Text><Text
                fontSize='xl'>
               Please create an issue on our repo.
                </Text>
                
                <Text as='b'
                fontSize='2xl'>
              I found a security vulnerability. How do I report it?
                </Text><Text
                fontSize='xl'>
               Please email yo@dev.to.
                </Text>
                
                <Text as='b'
                fontSize='2xl'>
              How do I report spam?
                </Text><Text
                fontSize='xl'>
               For a specific comment: navigate to the comment and click the dropdown arrow to report abuse.
For a specific article: navigate to the article, scroll to the bottom and click report abuse.
In general, you can fill out the report abuse form.
                </Text>
                
                <Text as='b'
                fontSize='2xl'>
              How does dev.to make money?
                </Text><Text
                fontSize='xl'>
               Right now, we count on listings and sponsors. We also sell some merchandise on The DEV Shop.
                </Text>
                
                <Text as='b'
                fontSize='2xl'>
              What's up with your sponsors?
                </Text><Text
                fontSize='xl'>
               If you have questions about sponsorships (i.e. how to turn off sponsor displays), visit our sponsorship info page.
                </Text>
                
                <Text as='b'
                fontSize='2xl'>
              How do I delete my account?
                </Text><Text
                fontSize='xl'>
               You'll find the option to delete your account in your settings. Self-deletion will remove your DEV profile, and all articles, comments, Connect messages, etc.

If you require a full GDPR deletion, please e-mail yo@dev.to with the subject line "GDPR Delete Request" and we will ensure that any of your remaining data is purged from all systems.
                </Text>
                
                <Text as='b'
                fontSize='2xl'>
              Do I own the articles that I publish?
                </Text><Text
                fontSize='xl'>
               Yes, you own the rights to the content you create and post on dev.to and you have the full authority to post, edit, and remove your content as you see fit.

By posting content on dev.to, you give us a nonexclusive license to publish it, including anything reasonably related to publishing it (like storing, displaying, reformatting, and distributing it).
                </Text>
                
                <Text as='b'
                fontSize='2xl'>
              Will you put ads on my posts' pages?
                </Text><Text
                fontSize='xl'>
               No ad will ever be placed next to a user's post without their consent in the matter.
                </Text>
                
                <Text as='b'
                fontSize='2xl'>
              How do I set a cover image on my post?
                </Text><Text
                fontSize='xl'>
               Include <Code
               borderRadius='10%'
                children='cover_image: [url] '/> in the front matter of your post. For more information on our editor, check out our editor guide.
                </Text>
                
                <Text as='b'
                fontSize='2xl'>
              How does comment threading work?
                </Text><Text
                fontSize='xl'>
               Comments are threaded with a maximum depth, and then they become flat. You can respond to flattened-out threads by replying to the last comment in the overall thread.
                </Text>
                
                <Text as='b'
                fontSize='2xl'>
              Can I hide comments on my own posts?
                </Text><Text
                fontSize='xl'>
               Yes. To hide a comment that was added to one of your posts, simply click the dropdown connected to the comment and select the "Hide" option. You can read our original changelog post on the feature for more information.
                </Text>
                
                <Text as='b'
                fontSize='2xl'>
              Can I use profanity in my posts?
                </Text><Text
                fontSize='xl'>
               We don’t disallow profanity in general, but we do have an internal policy of not boosting posts through our social channels that have profanity in the title, so you might want to keep that in mind.
                </Text>
                
                <Text as='b'
                fontSize='2xl'>
              Can I follow RSSes on DEV?
                </Text><Text
                fontSize='xl'>
               Yes, you can. The link for our main feed can be found here: https://dev.to/feed. For user-specific feeds, you can find them via <Code
               borderRadius='10%'
                children='https://dev.to/feed/username '/>. For tag-specific feeds, you can find them via <Code
                borderRadius='10%'
                 children='https://dev.to/feed/tag/tagname'/>.
                </Text>
                
                <Text as='b'
                fontSize='2xl'>
              Upon sign in, why do you require authorization to allow the DEV Community to access info on my Twitter account?
                </Text><Text
                fontSize='xl'>
               
                </Text>
                
                <Text as='b'
                fontSize='2xl'>
              I signed up to DEV with GitHub/Twitter, but can't figure out how to disconnect or switch out this OAuth method from my account. Can you help me?
                </Text><Text
                fontSize='xl'>
               The problem you're running into is because you must have one OAuth method always connected to your DEV account.

The easiest way to go about solving this issue is to add another OAuth method to your DEV account. There are a couple of ways you can approach this…

Firstly, you can add a Forem account to your DEV account by creating one here and then connecting it to your account via your settings. Once you’ve done so, you can then disconnect your GitHub/Twitter account from your DEV profile and add your desired account.

Just scroll down underneath the "Danger Zone" and click "Remove GitHub" or "Remove Twitter" (whichever is applicable). After refreshing the page, you'll see the option to add the new account.

If you’d rather not create a Forem account, you can use the same process above but connect a GitHub/Twitter account to your DEV account instead prior to removing the GitHub/Twitter account you'd like to remove.

Alternatively, if you'd rather not connect a GitHub/Twitter account to your DEV account. You can create a new DEV account with your desired OAuth method and email us at yo@dev.to requesting that we merge your two accounts together. If this is the case, be prepared to prove ownership over both of your accounts.
                </Text>
                
                <Text as='b'
                fontSize='2xl'>
              Can I sign up with email and password?
                </Text><Text
                fontSize='xl'>
               As part of our spam prevention defense, we do not currently offer folks the option to sign up via email.

Right now we only offer the option to sign up using OAuth. We offer traditional OAuth methods like Twitter, Apple, and GitHub, but also offer sign up via our own OAuth method called Forem Passport which you can learn about here. In short, Forem passport will allow you to easily sign up with any Forem community like DEV, CodeNewbie, or others.
                </Text>

            </Stack>

        </Layout>
    )
   
}
