import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Components/Loader';
import './TopFiveTwo.css';

import Date from './Components/Date.jsx';

// let user_token = process.env.USER_TOKEN;
const page_token = process.env.PAGE_TOKEN;

//don't forget to make this suuuuper accessible (alt tage etc)
function TopFive() {

    const [top, setTop] = useState({name:'', postinfo:''});
    const [topName, setTopName] = useState('');
    const [formattedDates, setFormattedDates] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // const fetchData = async () => {
        //     const respName = await axios(
        //         `https://graph.facebook.com/v12.0/ 111560247096449/&access_token={page_token}`
        //       );
        //       const respPost = await axios(
        //         `https://graph.facebook.com/v12.0/ 111560247096449/published_posts?fields=created_time%2Cinsights%2Clikes%2Creactions%2Cmessage%2Cpermalink_url&access_token={page_token}`
        //       );
        //       setTop({ name: respName.data, postinfo: respPost.data });
        //     };
        
        //     fetchData();
        //   }, []);
        //   console.log('render');
        //   if (top.data) {
        //     console.log("d", top.name, top.postinfo);
        //   }


        axios
          .get(`https://graph.facebook.com/v12.0/ 111560247096449/published_posts?fields=created_time%2Cinsights%2Clikes%2Creactions%2Cmessage%2Cpermalink_url&access_token=EAARmuEuuogkBAIZBn1bBqQl3jNur5PJoXHafmnrhLpw6XG5AmvZCfc8z6jDoOT8MIYGziGiTJ3tzNqoQYmylqAmH2phGlxIxwoDGMQjZBxME4WKwPVqrCD0duAmXcvbh0afPVZAptfUtxNZAQqYjd5MrMWBiKmpZCyj9bNS4uV1NBNO0jyFsa9n9ZBB7CvrByOATdZASgWJ4dDHZCtWLDxVlyXDvWdFuoEFcZD`)
          .then((response) => {
            setTop(response.data);
            // formatData(response.data)
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }, []);

        console.log("page token is" + page_token)
    //   useEffect(() => {
    //     axios
    //       .get(`https://graph.facebook.com/v12.0/ 111560247096449/published_posts?fields=created_time%2Cinsights%2Clikes%2Creactions%2Cmessage%2Cpermalink_url&access_token=EAARmuEuuogkBAKRdimPARz7c01ZAakHUeLpqD0p9ZCmZC0wWiO8dEKClZAsCMyMQEWupy3SOcK9ccH6prIWGpTMiuqcomJZCZAX6tjetwSthZCkwbjfU4G5ujjXD6XGV6G6fBaZCZCxTItBaI7hD3uBkUZAFnIh5YcsAZAZCPfzLsb441qliWMFm3J3ZBDuKEJxQbzGl3Rk0f4X8frZCYYtjuUuqQGZCiSNctTqkwEZD`)
    //       .then((response) => {
    //         setTopName(response.data);
    //         // formatData(response.data)
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       })
    //       .finally(() => {
    //         setIsLoading(false);
    //       });
    //   }, []);


    //   const formatData = (data) => {
    //      const dates = data.data.map(item => new Date(item.created_time))
    //      console.log(dates)
    //      setFormattedDates(dates)
    //   }

    //   const formdate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full'}).format(top.data.created_time)
      console.log(top)
    //   console.log(formdate)

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
                        <table className="table">
                            <tr className="header">
                                <th>Brand</th>
                                <th>Date</th>
                                <th>Post Preview</th>
                                {/* <th>Eng. Score</th> */}
                                {/* <th>Increase</th> */}
                            </tr>

                            {top ? 
                                (
                            <tr className="ranking" id="first">
                                <td>{top.data[0].reactions.data[0].name || "Crant.ai"}</td>
                                <td>{top.data[0].created_time}</td>
                                <td><a href={top.data[0].permalink_url}>{top.data[0].message}</a></td>
                                {/* <td className="engscore">{top.engscore}</td> */}
                                {/* <td className="increase">{top.increase}</td> */}
                            </tr>
                            ) : (<Loader />)}

                            {top ? 
                                (
                            <tr className="ranking" id="second">
                                <td>{top.data[1].name || "Crant.ai"}</td>
                                <td>{top.data[1].created_time}</td>
                                <td><a href={top.data[1].permalink_url}>{top.data[1].message}</a></td>
                                {/* <td className="engscore">{top.engscore}</td> */}
                                {/* <td className="increase">{top.increase}</td> */}
                            </tr>
                            ) : (<Loader />)}

                            {top ? 
                                (
                            <tr className="ranking" id="third">
                                <td>{top.data[2].name || "Crant.ai"}</td>
                                <td>{top.data[2].created_time}</td>
                                <td><a href={top.data[2].permalink_url}>{top.data[2].message}</a></td>
                                {/* <td className="engscore">{top.engscore}</td> */}
                                {/* <td className="increase">{top.increase}</td> */}
                            </tr>
                            ) : (<Loader />)}

                            {top ? 
                                (
                            <tr className="ranking" id="fourth">
                                <td>{top.data[3].name || "Crant.ai"}</td>
                                <td>{top.data[3].created_time}</td>
                                <td><a href={top.data[3].permalink_url}>{top.data[3].message}</a></td>
                                {/* <td className="engscore">{top.engscore}</td> */}
                                {/* <td className="increase">{top.increase}</td> */}
                            </tr>
                            ) : (<Loader />)}

                            {top ? 
                                (
                            <tr className="ranking" id="fifth">
                                <td>{top.data[4].name || "Crant.ai"}</td>
                                <td>{top.data[4].created_time}</td>
                                <td><a href={top.data[4].permalink_url}>{top.data[4].message}</a></td>
                                {/* <td className="engscore">{top.engscore}</td> */}
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






