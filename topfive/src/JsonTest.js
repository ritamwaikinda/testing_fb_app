import React, { useState, useEffect } from 'react';
import axios from 'axios';

const page_token = process.env.PAGE_TOKEN;
const token = "EAARmuEuuogkBAGoDNcyXfsCIqA1I6NRrClUpxIMZAytsUVqFfYO2fo9rZAktZCUoZCbZCD1MsQPYj39wDN8AeXVrKAh2jFYihS8eX18dDm15LkUwDXiJDAnu9nWaBrwrfPhZC1wN4aSbkVQNjswjAhZAvvrRBmIjGNNZBV1l7LUAJ58dII5fQV57Ku43a2ZAcsvB3hxeYxojrZBMdcaBMJvsMqSSkComMHSP0ZD";

function JsonTest() {

    const [top, setTop] = useState('');

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
          });
      }, []);

    return (
    <div>
        {top}
        {/* {top.id}
        {top.name}
        {top.posts.data[0].created_time}
        {top.posts.data[0].permalink_url}
        {top.posts.data[0].message}
        {top.posts.data[0].comments}
        {top.posts.data[0].likes.data.length}
        {top.posts.data[0].reactions.data.length} */}

     </div>
    )
}

export default JsonTest;