import React, { useState, useEffect } from 'react';
import axios from 'axios';

const token = "EAARmuEuuogkBADQi07iQNE3WNsqZBK257aoK4I7Kr36KSdfwK8AUJz3hCqrVbA0demJYABIDuvbVTKswp0RYFWdCYRNXFCSaspIchKJKbF1Q8u6OvnoZApOYQsQgwzZB7YV8ElYALtpmgwJDtVpuY6CQQ16kJWo4Asciia4GEJGGZCWTimJ21n4X3GIXoM7osGC4y5NprPkJp6D9JXlcZBxip2OQm1qsZD";

function JsonTest() {

    const [top, setTop] = useState('');
    // const [counting, setCounting] = useState(0);


    useEffect(() => {
        axios
          .get(
            // `https://graph.facebook.com/v12.0/111560247096449?fields=id%2Cname%2Cpublished_posts%7Bid%2Ccomments%2Clikes.summary(total_count)%2Cpermalink_url%2Cmessage%2Cmessage_tags%2Creactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry)%2Creactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha)%2Creactions.type(LOVE).limit(0).summary(total_count).as(reactions_love)%2Creactions.type(SAD).limit(0).summary(total_count).as(reactions_sad)%2Creactions.type(THANKFUL).limit(0).summary(total_count).as(reactions_thankful)%2Creactions.type(WOW).limit(0).summary(total_count).as(reactions_wow)%2Cshares%2Cattachments%7Bunshimmed_url%7D%2Ccreated_time%7D&access_token=${token}`)
            
            //complete list // 
            `https://graph.facebook.com/v12.0/111560247096449?fields=id%2Cname%2Cengagement%2Crating_count%2Clikes%2Cposts.limit(10)%7Bcreated_time%2Cmessage%2Cmessage_tags%2Cshares%2Clikes%2Cpermalink_url%2Creactions%7Btype%7D%2Cattachments%7Bdescription%2Cdescription_tags%2Cmedia%2Cmedia_type%2Ctitle%2Ctype%2Cunshimmed_url%2Curl%7D%2Cid%2Cinsights%7Bvalues%2Cid%2Cname%2Cperiod%2Ctitle%2Cdescription%2Cdescription_from_api_doc%7D%2Ccomments%7Bid%2Cis_hidden%2Cattachment%2Ccomment_count%2Ccreated_time%2Clike_count%2Cmessage%2Cmessage_tags%2Cuser_likes%2Clikes%2Cpermalink_url%2Ccomments%7Bmessage%2Cid%2Ccreated_time%2Cattachment%2Clike_count%2Clikes%2Cmessage_tags%2Cuser_likes%2Cpermalink_url%2Ccomments%7Buser_likes%2Clikes%2Creactions%2Ccomments%7Blikes%7D%7D%2Creactions%7D%2Creactions%7Btype%7D%7D%2Csharedposts%7D%2Cpublished_posts.limit(10)%7Bcreated_time%2Cmessage%2Cmessage_tags%2Cshares%2Clikes%2Cpermalink_url%2Creactions%7Btype%7D%2Cattachments%7Bdescription%2Cdescription_tags%2Cmedia%2Cmedia_type%2Ctitle%2Ctype%2Cunshimmed_url%2Curl%7D%2Cid%2Cinsights%7Bvalues%2Cid%2Cname%2Cperiod%2Ctitle%2Cdescription%2Cdescription_from_api_doc%7D%2Ccomments%7Bid%2Cis_hidden%2Cattachment%2Ccomment_count%2Ccreated_time%2Clike_count%2Cmessage%2Cmessage_tags%2Cuser_likes%2Clikes%2Cpermalink_url%2Ccomments%7Bmessage%2Cid%2Ccreated_time%2Cattachment%2Clike_count%2Clikes%2Cmessage_tags%2Cuser_likes%2Cpermalink_url%2Ccomments%7Buser_likes%2Clikes%2Creactions%2Ccomments%7Blikes%7D%7D%2Creactions%7D%2Creactions%7Btype%7D%7D%2Csharedposts%7D%2Cratings&access_token=${token}`)
        //   &access_token=${page_token}`)
          .then((response) => {
            setTop(response.data);
            // setCounting(top.posts.data[1].reactions.summary.total_count)
            console.log(top)
            // console.log(counting)
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);


    const iterate = (item) => {
      Object.keys(item).forEach(key => {
  
      console.log(`key: ${key}, value: ${item[key]}`)
  
      if (typeof item[key] === 'object') {
              iterate(item[key])
          }
      })
  }

    const one = iterate(top);
    console.log(one);

    return (
    <div>
        {/* <u>PAGE DETAILS:</u><br></br>
        ID: {top.id}<br></br>
        NAME: {top.name}<br></br>
        ENGAGEMENT COUNT: {top.engagement.count}<br></br>
        ENGAGEMENT SOCIAL SENTENCE: {top.engagement.social_sentence}<br></br>
        RATING COUNT: {top.rating_count}<br></br><br></br>
        <u>POSTS DATA:</u> <br></br>
        EACH CREATED TIME: {top.posts.data[0].created_time}<br></br>
        EACH POSTS MESSAGE: {top.posts.data[0].message}<br></br>
        EACH POSTS MESSAGE TAG: {top.posts.data[0].message_tags}<br></br>

        EACH LIKE ID: {top.posts.data[0].likes.data[0].id}<br></br>
        EACH LIKE AUTHOR: {top.posts.data[0].likes.data[0].name}<br></br><br></br>
        
        <u>POSTS: </u><br></br>
        POST ID: {top.posts.data[0].id}<br></br><br></br>

     

        <u>POST PAGING: </u><br></br>
        EACH POSTS LIKES PAGING BEFORE: {top.posts.data[0].likes.paging.cursors.before}<br></br>
        EACH POSTS LIKES PAGING AFTER: {top.posts.data[0].likes.paging.cursors.after}<br></br>
        EACH POST PERMALINK: {top.posts.data[0].permalink_url}<br></br><br></br>

        <u>POST REACTIONS:</u><br></br>
        POSTS REACTION ID: {top.posts.data[0].reactions.data[0].id}<br></br>
        POSTS REACTION TYPE: {top.posts.data[0].reactions.data[0].type}<br></br>

        POSTS REACTION ID: {top.posts.data[0].reactions.data[1].id}<br></br>
        POSTS REACTION TYPE: {top.posts.data[0].reactions.data[1].type}<br></br>

        EACH POSTS LIKES PAGING BEFORE: {top.posts.data[0].reactions.paging.cursors.before}<br></br>
        EACH POSTS LIKES PAGING BEFORE: {top.posts.data[0].reactions.paging.cursors.after}<br></br><br></br>

        <u>POST ATTACHMENTS: </u><br></br>
        POST ATTACHMENT DESCRIPTION: {top.posts.data[0].attachments.data[0].description}<br></br><br></br>

        <u>MEDIA DETAILS: </u><br></br>
        MEDIA IMAGE HEIGHT: {top.posts.data[0].attachments.data[0].media.image.height}<br></br>
        MEDIA IMAGE SRC: {top.posts.data[0].attachments.data[0].media.image.src}<br></br>
        MEDIA IMAGE WIDTH: {top.posts.data[0].attachments.data[0].media.image.width}<br></br>
        MEDIA SRC: {top.posts.data[0].attachments.data[0].media.source}<br></br>
        MEDIA TYPE: {top.posts.data[0].attachments.data[0].media_type}<br></br>
        ATTACHMENT TITLE: {top.posts.data[0].attachments.data[0].title}<br></br>
        ATTACHMENT TYPE: {top.posts.data[0].attachments.data[0].type}<br></br>
        ATTACHMENT UNSHIMMED URL: {top.posts.data[0].attachments.data[0].unshimmed_url}<br></br>
        ATTACHMENT URL: {top.posts.data[0].attachments.data[0].url}<br></br><br></br>


        <u>TOP POSTS #2</u><br></br>
        CREATED TIME: {top.posts.data[1].created_time}<br></br>
        MESSAGE:{top.posts.data[1].message}<br></br>

        MESSAGE TAG ID: {top.posts.data[1].message_tags[0].id}<br></br>
        MESSAGE TAG NAME: {top.posts.data[1].message_tags[0].name}<br></br>
        MESSAGE TAG TYPE: {top.posts.data[1].message_tags[0].type}<br></br>
        MESSAGE TAG OFFSET: {top.posts.data[1].message_tags[0].offset}<br></br>
        MESSAGE TAG LENGTH: {top.posts.data[1].message_tags[0].length}<br></br><br></br> */}









        {/* POST LIKES COUNT: {top.posts.data[0].likes.summary.total_count} */}
        {/* POST TOTAL REACTIONS COUNT {top.posts.data[0].reactions.summary.total_count} */}
        {/* POST COMMENT COUNT: {top.posts.data[0].comments.data[0].comment_count}     */}

        {/* {top.engagement} */}
        {/* {top.posts.data[0].created_time} */}
        {/* {top.posts.data[0].permalink_url} */}
        {/* {top.posts.data[0].message} */}
        {/* {top.posts.data[0].comments} */}
        {/* {top.posts.data[0].likes.data.length} */}
        {/* {top.posts.data[0].reactions.data.length} */}







        <u>PUBLISHED_POSTS: </u><br></br><br></br>

     </div>
    )
}

export default JsonTest;