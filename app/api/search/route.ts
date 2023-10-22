import { NextResponse } from "next/server";

const generateEmbeddings = async (query: string) => {
    return [0, 1, 0];
}

const search = async (embeddings: any) => {
    return [
        {subreddit:"pokemon",id:"166rg7o",author:"Corpus_Scout",score:1,title:"How'd I do lads? I drew a Sneasel",date:"2023-08-31",selftext:"",image:"https://preview.redd.it/rt0nwimuajlb1.jpg?width=216&crop=smart&auto=webp&s=8e4eabfa199489e8efcc68d6483685939494df6d",spoiler:false},
        {subreddit:"DuvalCounty",id:"166rg7r",author:"Optimal_Win162",score:1,title:"In gators we trust",date:"2023-08-31",selftext:"",image:"https://preview.redd.it/5pvr880hbjlb1.jpg?width=216&crop=smart&auto=webp&s=b6a096a8fcf367e9732fefc6168c597a5be8e954",spoiler:false},
        {subreddit:"GeographicaXYZ",id:"166rg7u",author:"Durian_Ecstatic",score:1,title:"Candid Coaches: What NIL worth is a projected high-major starter within the switch wanting portal on the lookout for? - Live Streams Online Free - Watch & Download Latest Sports Videos from [thealmanaf.com]",date:"2023-08-31",selftext:"",spoiler:false},
        {subreddit:"OPBR",id:"166rg7y",author:"Xeyex7",score:1,title:"Is it worth it to spend 250 gems to get the 200 crystals frag ?",date:"2023-08-31",selftext:"",spoiler:false},
        {subreddit:"Pen_Swap",id:"166rg7z",author:"FPPenSwapBot",score:1,title:"September 2023 Confirmed Trade Thread",date:"2023-08-31",selftext:"Post your confirmed trades below; when confirming a post put Confirmed only. The bot will treat anything else as a conversation and ignore it.\n\n Previous month's confirmation thread: [August 2023 Confirmed Trade Thread](https://www.reddit.com/r/pen_swap/comments/15ewdhl/)\n \n If the bot is malfunctioning, please send a [modmail](http://www.reddit.com/message/compose?to=%2Fr%2Fpen_swap)",spoiler:false},
        {subreddit:"SaintRampalJi",id:"166rg80",author:"JaiN1313",score:1,title:"Sat Bhakti Sandesh",date:"2023-08-31",selftext:"",image:"https://preview.redd.it/0jck13wgbjlb1.jpg?width=320&crop=smart&auto=webp&s=0df1133ee2d1e84f7c36bb4b433716f38e66a6b4",spoiler:false},
        {subreddit:"every15min",id:"166rg83",author:"erer1243",score:1,title:"Currently, it's August 31, 2023 at 08:00PM",date:"2023-08-31",selftext:"Currently, it's August 31, 2023 at 08:00PM",spoiler:false},
        {subreddit:"paintball",id:"166rg84",author:"JeepGymJams",score:1,title:"Etha 2 w/ EMC Rail Kit",date:"2023-08-31",selftext:"Upgraded from my Salvo to this Etha 2 with EMC Rail Kit. Way too excited. Paid $420 shipped.",image:"https://preview.redd.it/gfnu34tgbjlb1.jpg?width=320&crop=smart&auto=webp&s=4145b5d6a503c4a042d10c1241036722745ca308",spoiler:false},
        {subreddit:"Num",id:"166rg89",author:"The-Number-God",score:1,title:"Daily Update (01/09/2023) - Day #1326",date:"2023-08-31",selftext:"# Hello, everyone!\n\nIt is now Num Day #1326.\n\n# Daily Statistics\n\n* As of this post 4205 numbers have been given out.\n   * There are 2118 odd numbers and 2087 even numbers assigned.\n* The mean of the numbers is 2408.9683709869205, and the median is 2321.\n* The sum of all numbers assigned is 10129712.\n\n# Number of the Day\n\nNumber of the Day is currently disabled (as of 15th July 2021).\n\n# Points Leaderboard\n\n|**Place**|**Nation**|**Number of Points**|\n|:-|:-|:-|\n|1st|800s|69|\n|2nd|100s|65|\n|3rd|Numberless|57|\n|4th|000s|55|\n|5th|400s|51|\n|6th|300s|47|\n|7th|500s|27|\n|8th|900s|18|\n|9th|600s|9|\n|10th|700s|9|\n|11th|200s|6|\n\n# Newly Assigned Points\n\nNo points have been assigned today.\n\n[^(Assignment Thread)](https://www.reddit.com/r/Num/comments/okvjk2) ^(|) [^(Getting Started Guide)](https://numbergod.fandom.com/wiki/Guide:_Getting_Started_in_NUM) ^(|) [^(The Num Story)](https://numbergod.fandom.com/wiki/Guide:_The_NUM_Story_So_Far)",spoiler:false},
        {subreddit:"remotebackendjobs",id:"166rg8a",author:"angelnikolov",score:1,title:"Staff Backend Engineer",date:"2023-08-31",selftext:"👉 Orum is looking for a Staff Backend Engineer! (💰💰💰 Probably worldwide). This is a #remote opportunity! #remotework #wfh #remotejobs 👇 👇 👇 https://www.remotebackendjobs.com/cllzlbs1n2328pjbw2tzq8yo6",spoiler:false},
    ]
}

export async function GET(request: Request) { 
    const params = new URL(request.url).searchParams;
    const query = params.get('q') || "";
    
    // use google vertex ai to generate query embeddings
    const embeddings = await generateEmbeddings(query);

    // use embeddings to search for similar posts
    const results = await search(embeddings);

    return NextResponse.json(results);
}
