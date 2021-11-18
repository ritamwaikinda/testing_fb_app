import React, { useState, useEffect } from 'react';
import ReactTable from "react-table";
import axios from 'axios';
// import 'react-table/react-table.css'

// import "./styles.css";

const page_token = "EAARmuEuuogkBAKZBDKDy4qTh1pfZCA35Qg4piuoyJbhmQpKvSUeN17xvlDCAQvHMaEsLTp5Be1OcPx2O9CAi0Xmj7CA3Kq2xvVTlLorCN1dar7w4D900jyfBaQX0PNMbb81XqAkniEZB16Ms71Ca8EyYZA5V68V9nraizJCXKSq7JH18leuJDOaOFMoboMWAwzU5ijqpwtBrpMgSSVHM";

function JsonPackageTwo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://graph.facebook.com/v12.0/111560247096449?fields=id%2Cname%2Cpublished_posts%7Bid%2Ccomments%2Clikes.summary(total_count)%2Cpermalink_url%2Cmessage%2Cmessage_tags%2Creactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry)%2Creactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha)%2Creactions.type(LOVE).limit(0).summary(total_count).as(reactions_love)%2Creactions.type(SAD).limit(0).summary(total_count).as(reactions_sad)%2Creactions.type(THANKFUL).limit(0).summary(total_count).as(reactions_thankful)%2Creactions.type(WOW).limit(0).summary(total_count).as(reactions_wow)%2Cshares%2Cattachments%7Bunshimmed_url%7D%2Ccreated_time%7D&access_token=${page_token}`)
      .then((response) => {
        setData(response.data);
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
  }, {
    id: 'message', // Required because our accessor is not a string
    Header: 'Message',
    accessor: d => d.published_posts.data.message // String-based value accessors!
  }, {
    id: 'messageTags', // Required because our accessor is not a string
    Header: 'Message Tags',
    accessor: d => d.published_posts.data.message_tags // String-based value accessors!
  }, {
    id: 'reactionsAngry', // Required because our accessor is not a string
    Header: 'Reactions Angry',
    accessor: d => d.published_posts.data.reactions_angry.summary.total_count // String-based value accessors!
  }, {
    id: 'reactionsHaha', // Required because our accessor is not a string
    Header: 'Reactions Haha',
    accessor: d => d.published_posts.data.reactions_haha.summary.total_count // String-based value accessors!
  }, {
    id: 'reactionsLove', // Required because our accessor is not a string
    Header: 'Reactions Love',
    accessor: d => d.published_posts.data.reactions_love.summary.total_count // String-based value accessors!
  }, {
    id: 'reactionsSad', // Required because our accessor is not a string
    Header: 'Reactions Sad',
    accessor: d => d.published_posts.data.reactions_sad.summary.total_count // String-based value accessors!
  }, {
    id: 'reactionsThankful', // Required because our accessor is not a string
    Header: 'Reactions Thankful',
    accessor: d => d.published_posts.data.reactions_thankful.summary.total_count // String-based value accessors!
  }, {
    id: 'reactionsWow', // Required because our accessor is not a string
    Header: 'Reactions Wow',
    accessor: d => d.published_posts.data.reactions_wow.summary.total_count // String-based value accessors!
  }, {
    id: 'shares', // Required because our accessor is not a string
    Header: 'Shares',
    accessor: d => d.published_posts.data.shares.summary.total_count // String-based value accessors!
  }, {
    id: 'attachments', // Required because our accessor is not a string
    Header: 'Attachments',
    accessor: d => d.published_posts.data.attachments.data.unshimmed_url // String-based value accessors!
  }, {
    id: 'createdDate', // Required because our accessor is not a string
    Header: 'Post Date',
    accessor: d => d.published_posts.data.created_time // String-based value accessors!
  }, {
    id: 'createdTime', // Required because our accessor is not a string
    Header: 'Post Time',
    accessor: d => d.published_posts.data.created_time // String-based value accessors!
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

export default JsonPackageTwo

