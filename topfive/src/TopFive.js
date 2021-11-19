import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Components/Loader';
import './TopFiveTwo.css';

import Date from './Components/Date.jsx';

// const page_token = process.env.PAGE_TOKEN;
const token = "EAARmuEuuogkBAO8yjP0svKqPtProvEnSxnbX5aYmmd0BXDmfZCEpSSQ7RpcD4rnvE8lm3HgxXrsY3coZBosofDgR3VuGjLOZC2HivynqYN5YAXR8qUCbH77uG09VjafH4iFRTbU4dyHhbMNsSZBCvpBfGCLevOaZBWLiDAYUPLD8eJAZCqVgfO3U8jdcizerUSdcxjifnywjFZAkwRYNYOOpUbmZAGGYYZAkZD";

//don't forget to make this suuuuper accessible (alt tage etc)
function TopFive() {

    const [top, setTop] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
          .get(`https://graph.facebook.com/v12.0/111560247096449?fields=id%2Cname%2Cpublished_posts%7Bid%2Ccomments%2Clikes.summary(total_count)%2Cpermalink_url%2Cmessage%2Cmessage_tags%2Creactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry)%2Creactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha)%2Creactions.type(LOVE).limit(0).summary(total_count).as(reactions_love)%2Creactions.type(SAD).limit(0).summary(total_count).as(reactions_sad)%2Creactions.type(THANKFUL).limit(0).summary(total_count).as(reactions_thankful)%2Creactions.type(WOW).limit(0).summary(total_count).as(reactions_wow)%2Cshares%2Cattachments%7Bunshimmed_url%7D%2Ccreated_time%7D&access_token=${page_token}`)
        //   &access_token=${page_token}`)
          .then((response) => {
            setTop(response.data);
            console.log(`this is top ${top}`) 
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }, []);
        console.log(top)


    //   const formatData = (data) => {
    //      const dates = data.data.map(item => new Date(item.created_time))
    //      console.log(dates)
    //      setFormattedDates(dates)
    //   }


    if (isLoading) return <Loader />;

    const date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full'}).format(new Date())


    return (
        // <div>
            <div className="wholePage">
            <div className="chart">

                <div className="date">{date}</div>

                    <div className="title">Top Five Posts</div>

                <form className="selectors">
                    <input className="brand" autoComplete="on" placeholder="Search brand..." />
                    <input className="submit" type="button" value="Search" />
                </form>

                <div className="topFive">
                        <table className="table" className="filterOff">
                            <tr className="header">
                                <th>Brand</th>
                                <th>Date</th>
                                <th>Post Preview</th>
                                <th>Comments</th>
                                <th>Engagement</th>
                            </tr>

                            {top ? 
                                (
                            <tr className="ranking" id={top.id}>
                                <td>{top.name || "Crant.ai"}</td>
                                <td>{top.posts.data[0].created_time}</td>
                                <td><a href={top.posts.data[0].permalink_url}>{top.posts.data[0].message}</a></td>
                                <td className="comments">{top.posts.data[0].comments || "no comments available"}</td>
                                {/* <td className="increase">{top.posts.data[0].likes.data.length} like(s), & <br></br> {top.posts.data[0].reactions.data.length} positive reactions <br></br> EngScore = {top.posts.data[0].likes.data.length + top.posts.data[0].reactions.data.length}</td> */}
                                <td className="engscore">{top.posts.data[0].likes.data.length + top.posts.data[0].reactions.data.length}</td>
                            </tr>
                            ) : (<Loader />)}

                            {top ? 
                                (
                            <tr className="ranking" id="second">
                                <td>{top.name || "Crant.ai"}</td>
                                <td>{top.posts.data[1].created_time}</td>
                                <td><a href={top.posts.data[1].permalink_url}>{top.posts.data[1].message}</a></td>
                                <td className="comments">{top.posts.data[1].comments.data[0].message || "no comments available"}</td>
                                <td className="engscore">{top.posts.data[1].likes.data.length + top.posts.data[1].reactions.data.length}</td>
                                {/* <td className="increase">{top.increase}</td> */}
                            </tr>
                            ) : (<Loader />)}

                            {top ? 
                                (
                            <tr className="ranking" id="third">
                                <td>{top.name || "Crant.ai"}</td>
                                <td>{top.posts.data[2].created_time}</td>
                                <td><a href={top.posts.data[2].permalink_url}>{top.posts.data[2].message}</a></td>
                                <td className="comments">{top.posts.data[2].comments || "no comments available"}</td>
                                <td className="engscore">{top.posts.data[2].likes.data.length + top.posts.data[2].reactions.data.length}</td>
                                {/* <td className="increase">{top.increase}</td> */}
                            </tr>
                            ) : (<Loader />)}

                            {top ? 
                                (
                            <tr className="ranking" id="fourth">
                                <td>{top.name || "Crant.ai"}</td>
                                <td>{top.posts.data[3].created_time}</td>
                                <td><a href={top.posts.data[3].permalink_url}>{top.posts.data[3].message}</a></td>
                                <td className="comments">{top.posts.data[3].comments || "no comments available"}</td>
                                <td className="engscore">{top.posts.data[3].likes.data.length + top.posts.data[3].reactions.data.length}</td>
                                {/* <td className="increase">{top.increase}</td> */}
                            </tr>
                            ) : (<Loader />)}

                            {top ? 
                                (
                            <tr className="ranking" id="fifth">
                                <td>{top.name || "Crant.ai"}</td>
                                <td>{top.posts.data[4].created_time}</td>
                                <td><a href={top.posts.data[4].permalink_url}>{top.posts.data[4].message}</a></td>
                                <td className="comments">{top.posts.data[4].comments || "no comments available"}</td>
                                <td className="engscore">{top.posts.data[4].likes.data.length + top.posts.data[4].reactions.data.length}</td>
                                {/* <td className="increase">{top.increase}</td> */}
                            </tr>
                            ) : (<Loader />)}
                        </table> 
                </div>

                {/* <div className="button">
                <span className="buttonText">Go To Comparison Charts</span>
                </div>
                <div className="footer"></div> */}
            
            </div>
            </div>
    // </div>
    )
}

export default TopFive;






