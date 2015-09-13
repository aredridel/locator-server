lynmuldrow [10:32] 
I’ve kept this lingering idea for a while- a lesbian link up app, to see concentrations of self-identified lesbians in your area for dating, social events, and networking. Simpler than something like grindr or tinder- more like “I'm a lesbian, and here I am. Find me and hang out?”

lynmuldrow [15:19] 
Ooh, you all like my idea? I’d love to actually bake this, but have always thought the way i’m thinking of building it is wrong

aredridel [15:19] 
Oh?

lynmuldrow [15:20] 
I have a network of ladies through Lesbians who Tech that I can market to/work with

aredridel [15:20] 
There's lots of sharp corners to get snagged on, but ... I think it's workable if one doesn't think of it as the Next Huge Thing and more like "Hey, cool project, maybe meet some people"

lynmuldrow [15:20] 
right- I’d love for it to just be a thing…small project that works for folks

aredridel [15:21] 
grins.

aredridel [15:21] 
I'd love to help. The server side parts of it are like things I've built before.

aredridel [15:22]
"login" "log out" "sign up" "find stuff near ____"

lynmuldrow [15:25] 
I’d love to work on it with you, and create it open source so that others could use it for their groups. Should I make a repo? I’m not the best repo master, however.

aredridel [15:37] 
Sure! Probably two, for something like that.

aredridel [15:37]
a `thing-app` and a `thing-server` repo

aredridel [15:37]
You thinking native app?

lynmuldrow [15:48] 
When I thought of building it, I thought hybrid first using ionic…but native would probably be easier.

aredridel [15:54] 
ionic was gonna be what I suggest. I still call that native.

lynmuldrow [16:01] 
ah ok, i understand! I’d be more comfortable if you took the lead and I contributed however, as I’m still learning and wouldn’t want to gunk things up :smile:

aredridel [16:02] 
Hehe. The only real tricky part is privacy. Nothing like making an app that says "DYKE RIGHT HERE COME GET ME".

aredridel [16:03]
So probably needs to not be super specific about location.

aredridel [16:03]
At least until you mutually something.

aredridel [16:03]
And then there's harassment -- perhaps limited things you can say until you've linked up to meet up.

lynmuldrow [16:03] 
Right, maybe some sort of short messaging functionality would be good.

aredridel [16:04] 
Yeah.

aredridel [16:04]
"I'm hanging out for a while" "I'd like to meet you!" and only then "Share exact location"

lynmuldrow [16:05] 
Makes sense.

aredridel [16:05] 
Low spam, simple UI (and works on the go one handed...)

lynmuldrow [16:10] 
Super simple- in my head I see large “press this big button” styles in a punchy color.

aredridel [16:11] 
Totally what I was thinking.

aredridel [16:11]
Nothing more than a photo and a name about a person either.

aredridel [16:12]
Press the "get people to meet me" button. Put in where and when you'll be, or "here and now" as a button, and what you're doing.

aredridel [16:12]
Or press the "Meet someone!" button and find people near and a list of what they're doing now/soon

aredridel [16:13]
"Hike around the arboretum, 3pm" "Hanging out and working at ____ coffeeshop. I'll be here a couple more hours."

aredridel [16:14]
(... I may be interested in such an app because it's kinda how I meet people, only more ad hoc.)

lynmuldrow [16:16] 
Same here! When I was in SF, I found it upsetting that I couldn’t find a good les bar to hang out in, when the city is supposedly known for it’s LGBT friendliness, lol. That’s when I came up with the idea, but couldn’t really pull together how to do it simply. I kept envisioning tons of APIs and such, and said nevermind, lol.

aredridel [16:18] 
Heh, yeah. I don't think it really takes much. Just have to keep the app simple an focused on getting people to use it _often_ more than _continuously_

lynmuldrow [16:19] 
so i see that the flow would be - open app, landing screen, log in/sign up, profile screen (add photo), buttons (meet me/i’m here), meet someone screen (map, dots of people near you, list of what people are doing, button to meet people where they are). is that correct?

lynmuldrow [16:19]
right, i agree.

aredridel [16:21] 
Sounds about right. Privacy implications of dots on maps are the only touchy part.

lynmuldrow [16:24] 
That’s right- but would the map service we use then just identify where they are and not broadcast…or show a heatmap maybe of a general area?

aredridel [16:35] 
Heatmaps are nice.

aredridel [16:36]
And if they pick an area with something specific going on, they can tap "That sounds like fun ..." on it and then once they agree to meet up, it can release the specifics.

aredridel [16:36]
I mean, it'll always be imperfect, but that solves the silent stalking case.
