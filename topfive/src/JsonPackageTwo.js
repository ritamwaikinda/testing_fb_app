import React, { useState, useEffect } from 'react';
import ReactTable from "react-table";
import axios from 'axios';
import 'react-table/react-table.css'

// import "./styles.css";

const page_token = "EAARmuEuuogkBAKZBDKDy4qTh1pfZCA35Qg4piuoyJbhmQpKvSUeN17xvlDCAQvHMaEsLTp5Be1OcPx2O9CAi0Xmj7CA3Kq2xvVTlLorCN1dar7w4D900jyfBaQX0PNMbb81XqAkniEZB16Ms71Ca8EyYZA5V68V9nraizJCXKSq7JH18leuJDOaOFMoboMWAwzU5ijqpwtBrpMgSSVHM";

function JsonPackage() {
  const [data, setData] = useState({});
//   const [likes, setLikes] = useState(0);
//   const [reacCnt, setReacCnt] = useState(0);
  useEffect(() => {
    axios
      .get(
        `https://graph.facebook.com/v12.0/111560247096449?fields=id%2Cname%2Cpublished_posts%7Bid%2Ccomments%2Clikes.summary(total_count)%2Cpermalink_url%2Cmessage%2Cmessage_tags%2Creactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry)%2Creactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha)%2Creactions.type(LOVE).limit(0).summary(total_count).as(reactions_love)%2Creactions.type(SAD).limit(0).summary(total_count).as(reactions_sad)%2Creactions.type(THANKFUL).limit(0).summary(total_count).as(reactions_thankful)%2Creactions.type(WOW).limit(0).summary(total_count).as(reactions_wow)%2Cshares%2Cattachments%7Bunshimmed_url%7D%2Ccreated_time%7D&access_token=${page_token}`)
        // `https://graph.facebook.com/v12.0/111560247096449?fields=id%2Cname%2Cengagement%2Crating_count%2Clikes%2Cposts.limit(10)%7Bcreated_time%2Cmessage%2Cmessage_tags%2Cshares%2Clikes%2Cpermalink_url%2Creactions%7Btype%7D%2Cattachments%7Bdescription%2Cdescription_tags%2Cmedia%2Cmedia_type%2Ctitle%2Ctype%2Cunshimmed_url%2Curl%7D%2Cid%2Cinsights%7Bvalues%2Cid%2Cname%2Cperiod%2Ctitle%2Cdescription%2Cdescription_from_api_doc%7D%2Ccomments%7Bid%2Cis_hidden%2Cattachment%2Ccomment_count%2Ccreated_time%2Clike_count%2Cmessage%2Cmessage_tags%2Cuser_likes%2Clikes%2Cpermalink_url%2Ccomments%7Bmessage%2Cid%2Ccreated_time%2Cattachment%2Clike_count%2Clikes%2Cmessage_tags%2Cuser_likes%2Cpermalink_url%2Ccomments%7Buser_likes%2Clikes%2Creactions%2Ccomments%7Blikes%7D%7D%2Creactions%7D%2Creactions%7Btype%7D%7D%2Csharedposts%7D%2Cpublished_posts.limit(10)%7Bcreated_time%2Cmessage%2Cmessage_tags%2Cshares%2Clikes%2Cpermalink_url%2Creactions%7Btype%7D%2Cattachments%7Bdescription%2Cdescription_tags%2Cmedia%2Cmedia_type%2Ctitle%2Ctype%2Cunshimmed_url%2Curl%7D%2Cid%2Cinsights%7Bvalues%2Cid%2Cname%2Cperiod%2Ctitle%2Cdescription%2Cdescription_from_api_doc%7D%2Ccomments%7Bid%2Cis_hidden%2Cattachment%2Ccomment_count%2Ccreated_time%2Clike_count%2Cmessage%2Cmessage_tags%2Cuser_likes%2Clikes%2Cpermalink_url%2Ccomments%7Bmessage%2Cid%2Ccreated_time%2Cattachment%2Clike_count%2Clikes%2Cmessage_tags%2Cuser_likes%2Cpermalink_url%2Ccomments%7Buser_likes%2Clikes%2Creactions%2Ccomments%7Blikes%7D%7D%2Creactions%7D%2Creactions%7Btype%7D%7D%2Csharedposts%7D%2Cratings&access_token=${page_token}`)
      .then((response) => {
        setData(response.data);
        // setLikes(response.data.published_posts.data.likes.summary.total_count)
        // setReacCnt(response.data.published_posts.data.reactions.summary.total_count)
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const columns = [{
    Header: 'Page Id',
    accessor: 'id' // String-based value accessors!
  }, {
    Header: 'Page Name',
    accessor: 'name',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    id: 'postId', // Required because our accessor is not a string
    Header: 'Post Id',
    accessor: d => d.published_posts.data.id // Custom value accessors!
  }, {
    id: 'commentCount', // Required because our accessor is not a string
    Header: 'Comments',
    accessor: d => d.published_posts.data.comments.data.comment_count // Custom value accessors!
  }, {
    id: 'likesCount', // Required because our accessor is not a string
    Header: 'Likes Count',
    accessor: d => d.published_posts.data.likes.summary.total_count // Custom value accessors!
  }, {
    id: 'permalinkUrl', // Required because our accessor is not a string
    Header: 'Permalink Url',
    accessor: d => d.published_posts.data.permalink_url // String-based value accessors!
  }, 




  {
    id: 'message', // Required because our accessor is not a string
    Header: 'Message',
    accessor: d => d.published_posts.data.message // String-based value accessors!
  },
  

  {
    id: 'message_tags', // Required because our accessor is not a string
    Header: '',
    accessor: d => d.published_posts.data.permalink_url // String-based value accessors!
  },

  {
    id: 'reactions_angry', // Required because our accessor is not a string
    Header: '',
    accessor: d => d.published_posts.data.permalink_url // String-based value accessors!
  },

  {
    id: 'reactions_haha', // Required because our accessor is not a string
    Header: '',
    accessor: d => d.published_posts.data.permalink_url // String-based value accessors!
  },

  {
    id: 'reactions_love', // Required because our accessor is not a string
    Header: '',
    accessor: d => d.published_posts.data.permalink_url // String-based value accessors!
  },

  {
    id: 'reactions_sad', // Required because our accessor is not a string
    Header: '',
    accessor: d => d.published_posts.data.permalink_url // String-based value accessors!
  },

  {
    id: 'reactions_thankful', // Required because our accessor is not a string
    Header: '',
    accessor: d => d.published_posts.data.permalink_url // String-based value accessors!
  },

  {
    id: 'reactions_wow', // Required because our accessor is not a string
    Header: '',
    accessor: d => d.published_posts.data.permalink_url // String-based value accessors!
  },

  {
    id: 'shares', // Required because our accessor is not a string
    Header: '',
    accessor: d => d.published_posts.data.permalink_url // String-based value accessors!
  },

  {
    id: 'attachments', // Required because our accessor is not a string
    Header: '',
    accessor: d => d.published_posts.data.permalink_url // String-based value accessors!
  },
  {
    id: 'created_time', // Required because our accessor is not a string
    Header: '',
    accessor: d => d.published_posts.data.permalink_url // String-based value accessors!
  },

  {
    id: 'created_time', // Required because our accessor is not a string
    Header: '',
    accessor: d => d.published_posts.data.permalink_url // String-based value accessors!
  },



  
  
  {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
  }
]

    return (
    <div>
      <ReactTable
    data={data}
    columns={columns}
  />
    </div>
  );
}

export default JsonPackage

