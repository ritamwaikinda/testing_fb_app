import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from "lodash";
// import { top } from "./Components/JsonItems";
// import Loader from "react-loader-spinner";

// import './FacebookPosts.css';

const page_token =
	"EAARmuEuuogkBAOr43JAm55AQgRYZCN4PuOKCsUceL9dtaQMwf4kMunjtsjglxZAFLYmBuJsGKPVCGKRGJeZCQ51tv5NNn36eTzRZADVpRkU3IARPW0PwFivhlxw3xGvwOPz70BNi82ZCTcfjeaIK5HjeVVoLfcLkAYn8MVjaALhf0DJxAW1iOX6f0KJglDZABNZAiMgZA6v8GnachKpJXzVyXhNTPpt1Wy0ZD";

function FacebookPosts() {
	const [flattop, setFlattop] = useState({});
	const [top, setTop] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://graph.facebook.com/v12.0/111560247096449?fields=id%2Cname%2Cpublished_posts%7Bid%2Ccomments%2Clikes.summary(total_count)%2Cpermalink_url%2Cmessage%2Cmessage_tags%2Creactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry)%2Creactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha)%2Creactions.type(LOVE).limit(0).summary(total_count).as(reactions_love)%2Creactions.type(SAD).limit(0).summary(total_count).as(reactions_sad)%2Creactions.type(THANKFUL).limit(0).summary(total_count).as(reactions_thankful)%2Creactions.type(WOW).limit(0).summary(total_count).as(reactions_wow)%2Cshares%2Cattachments%7Bunshimmed_url%7D%2Ccreated_time%7D&access_token=${page_token}`
			)
			.then((response) => {
				setFlattop(response.data);
				const flat = _.fromPairs(flattop);
				setTop(flat);
				// console.log(response.data);
				// console.log(top.id);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	// console.log(top);

	// return (
	//   <div>
	//       {top.id}
	//       {top.published_posts.data[0].id}
	//   </div>

	// )

	//   const topfive = (obj, fn) => {
	//     const values = Object.entries(obj)

	//     values.forEach(val =>
	//         val && typeof val === "object" ? topfive(val, fn) : fn(val))
	//   }

	// Quick test
	// const print = (val) => console.log(val)

	// const answer = topfive(top, print)
	// console.log(answer)
	// return(
	//     <div>
	//         {answer}
	//         </div>
	// )

	/* Output
    John
    Doe
    15
    I ate your cookie
    */
	
	 function findObjectByLabel(obj, label) {
        for(var elements in obj){
            if (elements === label){
                 console.log(obj, obj[elements]);
            }
             if(typeof obj[elements] === 'object'){
             findObjectByLabel(obj[elements], label);
            }

        }

 const answerss = findObjectByLabel(top, 'id');
 console.log(answerss);

 return(
   <div>
     {answerss}
   </div>
		 
		 
	// return (
		<div>

			{/* <table>
				<tr>
					<th>page_id</th>
					<th>page_name</th>
					<th>post_id</th>
					<th>comments</th>
					<th>likes</th>
					<th>permalink_url</th>
					<th>message</th>
					<th>message_tags</th>
					<th>reactions_angry</th>
					<th>reactions_haha</th>
					<th>reactions_love</th>
					<th>reactions_sad</th>
					<th>reactions_thankful</th>
					<th>reactions_wow</th>
					<th>shares</th>
					<th>attachment</th>
					<th>polarity</th>
					<th>post_date</th>
					<th>post_time</th>
					<th>log_date</th>
					<th>log_time</th>
					<th>db_name</th>
					<th>db_proj</th>
				</tr>

				{/* {top.forEach((top) => {
					<tr>
						<td>{top.id}</td>
						<td>{top.name}</td>
						<td>{top.published_posts.data.id}</td>
						<td>comments</td>
						<td>likes</td>
						<td>permalink_url</td>
						<td>message</td>
						<td>message_tags</td>
						<td>reactions_angry</td>
						<td>reactions_haha</td>
						<td>reactions_love</td>
						<td>reactions_sad</td>
						<td>reactions_tdankful</td>
						<td>reactions_wow</td>
						<td>shares</td>
						<td>attachment</td>
						<td>polarity</td>
						<td>post_date</td>
						<td>post_time</td>
						<td>log_date</td>
						<td>log_time</td>
						<td>db_name</td>
						<td>db_proj</td>
					</tr>;
				})} */}
			{/* </table> */}
		</div>
	); */}
}

export default FacebookPosts
