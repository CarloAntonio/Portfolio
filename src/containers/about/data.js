import React from 'react';

import { faVideo, faCompass, faBasketballBall, faDumbbell, faShoePrints, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons' 

export const interestData = [
    {
        icon: faVideo,
        title: "Videography",
        delay: '0.7s',
        content: `I love making videos, almost as much as I love developing applications. I gravitate towards videography over photography because it limits interpretation, in that, context is created by the very nature of time elapsing. You can either create a narrative or capture one, conversely it is far more difficult to do so in photographs. Often times, pictures require background knowlege of context, creator intention, etc. Videos much less so, a trait I love exploring when I'm creating content`
    },
    {
        icon: faCompass,
        title: "Hiking/Camping",
        delay: '0.5s',
        content: `I can think of only a few other places I'd rather be than being with my friends around the campfire telling stores miles away from civilian disconneted from the digital world. There's also nothing like hiking miles of trails to arrive at a destination only a those who have persisted the same path have been. Some people think it's contrary to be both passionate about technology and nature, but in my opinion, it's a necessary balance.`
    },
    {
        icon: faBasketballBall,
        title: "Basketball",
        delay: '0.3s',
        content: `Basketball is an old friend. I've known it since I was 9 years old, and even though I'm no Kobe Bryant and this isn't a "Dear Basketball" ripoff, I can and have always had basketball to help clear my head. Big decisions, breakups, fights, anxiety, impatience, grudges and just about anything else seem a little easier to deal with after running up and down the court and having a silent conversation with the hoop.`
    },
    {
        icon: faDumbbell,
        title: "Gym/Working Out",
        delay: '0.6s',
        content: `"Going to the gym after studying and working in front of a computer, is like taking a shower after going to the gym. It feels ridiculously refreshing." -Carlo B. I literally just thought of this right now. There's something so satisfying about tearing it up in the brain department, then doing the same in the body department. Putting on wireless headphones and going in on the workouts is the most zen you can get on a work day.`
    },
    {
        icon: faShoePrints,
        title: 'Bachata/Salsa',
        delay: '0.4s',
        content: `I've always loved space but felt like space was only for really smart people to think about, but since Elon Musk's audacious attempts at reaching Mars play out in my lifetime, I can't help but think that anyone can dream about reaching the stars. I'd love to play a part in making that dream come true with the skills I have and can't wait till the ticket to space cost as much as traveling to the other side of the world.`
    },
    {
        icon: faSpaceShuttle,
        title: 'Space',
        delay: '0.2s',
        content: `I've always loved space but felt like space was only for really smart people to think about, but since Elon Musk's audacious attempts at reaching Mars play out in my lifetime, I can't help but think that anyone can dream about reaching the stars. I'd love to play a part in making that dream come true with the skills I have and can't wait till the ticket to space cost as much as traveling to the other side of the world.`
    },
]

export const videoData = [
    {
        videoUrl: "https://www.youtube.com/embed/jXOKEFBRAEs",
        title: "Hiking with DJI Osmo",
        content: (
            <p className="p-3">My first hiking trip using my DJI Osmo. Look at all that 3-axis gimble smooth gooeyness. Also, a couple of awesome dogs that love to hike.</p>
        )
    },
    {
        videoUrl: "https://www.youtube.com/embed/6gZz12nXJpM",
        title: "Video of the lantern festival",
        content: (
            <p className="p-3">My first attempt at making a video that tried to embody the lyrics of a song. Also, a trip to Neveda for a lantern festival with a few friends of mine.</p>
        )
    },
    {
        videoUrl: "https://www.youtube.com/embed/dnA_7n4dHx4",
        title: "Todd the trex video",
        content: (
            <p className="p-3">My friend and I enjoy traveling and taking pictures, but weren&#39;t huge fans of taking pictures of ourselves. The solution, for some reason, was to wear a dinosaur suit instead. We&#39;re not sure what other steps led to that conclusion as well. But it did lead to this awesome video.</p> 
        )
    },
    {
        videoUrl: "https://www.youtube.com/embed/Wh-huDNXTws",
        title: "Picnic at McClures Beach",
        content: (
            <p className="p-3">My friends and I head over to Mcclures Beach at Point Reyes for a picnic on a (mostly) sunny day. Give the video time, the sun will come out, believe me, I heard it all when we first arrived at the spot and it was cloudy and cold. I found this place a long time ago while hiking at a nearby area. I knew I&#39;d eventually take my friends here and have a BBQ.</p>
        )
    },
]