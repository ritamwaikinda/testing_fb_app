import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Components/Loader';
import './TopFiveTwo.css';

import Date from './Components/Date.jsx';

// const page_token = process.env.PAGE_TOKEN;
const token = "EAARmuEuuogkBAA2AfBZCppTiJ4ZBJQR1ZANeF8oswjuHyMPEUu98CR1jhDjxJ0svZCjBp4uhBn8WTkFI5wYVfTVlqYPSExNBQrJ4FbG41w7NoNumj6ROAYW3rynqWlQEiygGXUzZC8u1bRJdIIwPXRWOJgkPEWjP0D0r99SLMUhytan9lOBoOjSDmnwZCae3wQQxlFhwbYLyFUrSFKZCvSj";

//don't forget to make this suuuuper accessible (alt tage etc)
function TopFive() {

    const [top, setTop] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
          .get(`https://graph.facebook.com/v12.0/111560247096449?fields=id%2Cname%2Cengagement%2Crating_count%2Clikes%2Cposts.limit(10)%7Bcreated_time%2Cmessage%2Cmessage_tags%2Cshares%2Clikes%2Cpermalink_url%2Creactions%7Btype%7D%2Cattachments%7Bdescription%2Cdescription_tags%2Cmedia%2Cmedia_type%2Ctitle%2Ctype%2Cunshimmed_url%2Curl%7D%2Cid%2Cinsights%7Bvalues%2Cid%2Cname%2Cperiod%2Ctitle%2Cdescription%2Cdescription_from_api_doc%7D%2Ccomments%7Bid%2Cis_hidden%2Cattachment%2Ccomment_count%2Ccreated_time%2Clike_count%2Cmessage%2Cmessage_tags%2Cuser_likes%2Clikes%2Cpermalink_url%2Ccomments%7Bmessage%2Cid%2Ccreated_time%2Cattachment%2Clike_count%2Clikes%2Cmessage_tags%2Cuser_likes%2Cpermalink_url%2Ccomments%7Buser_likes%2Clikes%2Creactions%2Ccomments%7Blikes%7D%7D%2Creactions%7D%2Creactions%7Btype%7D%7D%2Csharedposts%7D%2Cpublished_posts.limit(10)%7Bcreated_time%2Cmessage%2Cmessage_tags%2Cshares%2Clikes%2Cpermalink_url%2Creactions%7Btype%7D%2Cattachments%7Bdescription%2Cdescription_tags%2Cmedia%2Cmedia_type%2Ctitle%2Ctype%2Cunshimmed_url%2Curl%7D%2Cid%2Cinsights%7Bvalues%2Cid%2Cname%2Cperiod%2Ctitle%2Cdescription%2Cdescription_from_api_doc%7D%2Ccomments%7Bid%2Cis_hidden%2Cattachment%2Ccomment_count%2Ccreated_time%2Clike_count%2Cmessage%2Cmessage_tags%2Cuser_likes%2Clikes%2Cpermalink_url%2Ccomments%7Bmessage%2Cid%2Ccreated_time%2Cattachment%2Clike_count%2Clikes%2Cmessage_tags%2Cuser_likes%2Cpermalink_url%2Ccomments%7Buser_likes%2Clikes%2Creactions%2Ccomments%7Blikes%7D%7D%2Creactions%7D%2Creactions%7Btype%7D%7D%2Csharedposts%7D%2Cratings&access_token=${token}`)
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






