
import './App.css';
import VideoCard from './videocard.js';



function App(videos) {
  videos = [{
    id: 1,
    title: "Anchors ने Show में जमाया रंग! | Anjana Om Kashyap | The Kapil Sharma Show 2 | Ep 304 | NEW FE",
    thumbnail : "https://i.ytimg.com/an_webp/vdZWPNNZBhE/mqdefault_6s.webp?du=3000&sqp=CIHoo60G&rs=AOn4CLCay4x-h91vpge6CUcx7_zn0iQobw",
    likes: 79000,
    views: 8400000,
    channelName: "Set india",
    channelLogoUrl: "https://yt3.ggpht.com/eu051krrRNQMMi5h6ynfnvhFJzxzSKulJQ42g5v72MQ9Bvv8KdpNIa6yM-0iGpnDgSF0itAD=s48-c-k-c0x00ffffff-no-rj"
   },
  {
    id: 2,
    title: "Mass (HD) - Full Movie |Nagarjuna, Jyothika, Charmy Kaur, Rahul Dev, Raghuvaran, Sunil, Prakash Raj",
    thumbnail : "https://i.ytimg.com/an_webp/c6SJid71K20/mqdefault_6s.webp?du=3000&sqp=CJfko60G&rs=AOn4CLAVFbHlZzk3IKppvEdWpIxRbz2Dpg",
    likes: 291000,
    views: 5000000,
    channelName: "Gold mines",
    channelLogoUrl: "https://yt3.ggpht.com/wblvtoHFXpBoat-oNukycB5auBa45inSwiyghE8gac3MN_ridYgeY1kHRKCkBrb1slgpIlO6Vw=s48-c-k-c0x00ffffff-no-rj" 
  },
  {
    id: 3,
    title: "अद्भुत है कृष्ण-कर्ण संवाद | Dr Kumar Vishwas | Apne Apne Shyam",
    thumbnail : "https://i.ytimg.com/an_webp/W7ckpFIjphM/mqdefault_6s.webp?du=3000&sqp=CMOGpK0G&rs=AOn4CLCXyyRQnE9IVPhheqpJ1VLzx63KIw",
    likes: 48000,
    views: "20k",
    channelName: "PopKorns",
    channelLogoUrl: "https://yt3.ggpht.com/8_OakLlaaImjUQJr3IeDJAMf2-qwt5vevmNsDs-kxnr356Y7ILFwwcL_gSi5w9bo-Jd45rDA=s48-c-k-c0x00ffffff-no-rj" 
  },
  
    {
      id: 4,
      title: "नकली Rocky Bhai और Pushparaj ने शुरू किया एक Laughter Riot! | The Kapil Sharma Show | Pehchaan Kaun",
      thumbnail : "https://i.ytimg.com/an_webp/w9KTJjRdw8I/mqdefault_6s.webp?du=3000&sqp=CMTPo60G&rs=AOn4CLAldVAJWiUvr04iiVmibDVkxl5JNA",
      likes: 50000,
      views: 270000,
      channelName: "Best of kumar biswas",
      channelLogoUrl: "https://yt3.ggpht.com/lmK4vZw5AKF2mKs8D9mY3XSm8IPR7cpAK_UJ-7Ye_vrvLeDXbnWhFEFo8yKNxvCVW3UaIvYj-Q=s48-c-k-c0x00ffffff-no-rj" 
    },
    {
      id: 5,
      title: "Full Video|Shah Rukh Khan,Kajol |Kumar Sanu,Alka Yagnik |Timeless Classics",
      thumbnail : "https://i.ytimg.com/vi/WlWlGlvN4L4/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLDugOvt_TCOYFDphCj4QzNowY3jag",
      likes: 160000,
      views: 49200000,
      channelName: "SonyMusicIndiaVEVO",
      channelLogoUrl: "https://yt3.ggpht.com/dvQZCez1TKLEmjyOSGEYBSm-ObD5YYHt9Z2c1TMiNwpAPSHSmNYDDtCnPOJDh7SBvJR8CDgSLg=s48-c-k-c0x00ffffff-no-rj" 
    },
    {
      id: 6,
      title: "Valentine's Day Special 2015 | Hum Bane Tum Bane | Audio Jukebox | Love Songs Collection",
      thumbnail : "https://i.ytimg.com/vi/0tCIRlbey34/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCanRIs3hFrcGCuYCPq99Y41qMNLQ",
      likes: 15000,
      views: 370000,
      channelName: "Saregama Musi",
      channelLogoUrl: "https://yt3.ggpht.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s48-c-k-c0x00ffffff-no-rj" 
    },
    {
      id: 7,
      title: "Zara Sa Full Video - Jannat|Emraan Hashmi, Sonal|KK|Pritam|Sayeed Quadri|Mahesh Bhatt",
      thumbnail : "https://i.ytimg.com/vi/5IY4BNj0-10/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLA2cH-om5AHCQ7urVvQGBZUmsvDSA",
      likes: 812000,
      views: 6300000,
      channelName: "SonyMusicIndiaVEVO",
      channelLogoUrl: "https://yt3.ggpht.com/dvQZCez1TKLEmjyOSGEYBSm-ObD5YYHt9Z2c1TMiNwpAPSHSmNYDDtCnPOJDh7SBvJR8CDgSLg=s48-c-k-c0x00ffffff-no-rj" 
    },
    {
      id: 8,
      title: "The Kapil Sharma Show - दी कपिल शर्मा शो-Ep-84-Govinda & Shakti Kapoor In Kapil's Show–25th Feb 2017",
      thumbnail : "https://i.ytimg.com/an_webp/o3m2F6CDktc/mqdefault_6s.webp?du=3000&sqp=CIyApK0G&rs=AOn4CLDs3Hu4hFOkUEs_Sx_KF6w1-j5vgg",
      likes: 298000,
      views: 5300000,
      channelName: "SonyMusicIndiaVEVO",
      channelLogoUrl: "https://yt3.ggpht.com/dvQZCez1TKLEmjyOSGEYBSm-ObD5YYHt9Z2c1TMiNwpAPSHSmNYDDtCnPOJDh7SBvJR8CDgSLg=s48-c-k-c0x00ffffff-no-rj" 
    },
    {
      id: 9,
      title: "जब भरत प्रसंग पर बोलते रो पड़े थे विश्वास | Dr Kumar Vishwas | Best of KV",
      thumbnail : "https://i.ytimg.com/an_webp/E_EduPBmERY/mqdefault_6s.webp?du=3000&sqp=COaBpK0G&rs=AOn4CLA9NANwcjcI9tIve7TVrx5S9y5fYg",
      likes: 90000,
      views: 5300000,
      channelName: "Best Of Kumar Vishwas",
      channelLogoUrl: "https://yt3.ggpht.com/lmK4vZw5AKF2mKs8D9mY3XSm8IPR7cpAK_UJ-7Ye_vrvLeDXbnWhFEFo8yKNxvCVW3UaIvYj-Q=s48-c-k-c0x00ffffff-no-rj" 
    },
    {
      id: 10,
      title: "श्री कृष्ण लीला | कर्ण के वैष्णो शस्त्र के सामने आए श्री कृष्ण",
      thumbnail : "https://i.ytimg.com/an_webp/uRVZO5ZFVHY/mqdefault_6s.webp?du=3000&sqp=COSKpK0G&rs=AOn4CLALs8s6wYK2c7B9T0l50aYtRQGZHw",
      likes: 232000,
      views: 3000000,
      channelName: "Tilak",
      channelLogoUrl: "https://yt3.ggpht.com/IHGWTq5tOmWjBcxTDAWYJLPUe_bgsMFiW5Ywm28qytOqrE5vyL_AEF9Z4cvEujuCtiTR8BY9IDk=s48-c-k-c0x00ffffff-no-rj" 
    },
    {
      id: 11,
      title: "रावण ने किया अमृत से बने अस्त्र का प्रयोग कैसे बचेंगे श्री राम जी || महाबली हनुमान",
      thumbnail : "https://i.ytimg.com/an_webp/VvJ36rMfdGI/mqdefault_6s.webp?du=3000&sqp=CKD2o60G&rs=AOn4CLDIqxkrnOtgDMr3JTl8Xtn2OuIcjw",
      likes: 31000,
      views: 4300000,
      channelName: "Captain Bhakti",
      channelLogoUrl: "https://yt3.ggpht.com/9Z5N4VW0n9MjeiYofkP7XZZ_ePwufZKL3ppuoA1l6ZkII9R-gTBLTegps0GzUwjlRRqRWhNN=s48-c-k-c0x00ffffff-no-rj" 
    },
    {
      id: 12,
      title: "आखिर किस बात पर यशोदा मैया ने दिया कान्हा को दंड || यशोमती मईया के नंदलाला",
      thumbnail : "https://i.ytimg.com/vi/DCJE7J5zO7w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0x7ZQSb-b10T8eusQwuTd04oFug",
      likes: 162000,
      views: 2800000,
      channelName: "Rishu T.V",
      channelLogoUrl: "https://yt3.ggpht.com/2KWOzTOjybgp-2mwNnzBj0MLHsG6TaQXQJdk0T6CjTN6TvVqV5E08Ms4FtQQF2PzgaSTcbg0=s48-c-k-c0x00ffffff-no-rj" 
    }
  ]
  return (
    <>
      <h1 id="heading">VIDEO PLAYER</h1>
      <div id="video-list-section">
        {videos.map((data,i)=>{
          return <VideoCard videoData = {data}/>
        })}
        
      </div>
    </>
  );
}



export default App;

<iframe width="853" height="480" src="https://www.youtube.com/embed/zzrTIjF4g3g" title="ZINDAGI AA BHI JAA Song Out | Shabbir Ahmed | Saaj Bhatt | Shantanu Tambe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>