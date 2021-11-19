import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

function LodashGet() {
	const page_token =
		"EAARmuEuuogkBAPixs9nZCCR2PFO3HmNcwmayGcVehvmWwIh3YjO41KylWZCYXZBUcOcoFuuBpCdqWlP8O3Um4ZA9rXpA0MWh5MYgoaDLC0yrbFPvZCXM5bsjanajmghS33FzkdosmzDT0HFWUffw2AZCaVWNf4KxL5gjSYqGopjsSiTXsEkdZCGZClDXQupqzZB7lHWZB1CjI1vnEsFFB51ZB4bUBSmo2JgLzAZD";

		const [top, setTop] = useState([]);

		useEffect(() => {
			axios
				.get(
					`https://graph.facebook.com/v12.0/111560247096449?fields=id%2Cname%2Cpublished_posts%7Bid%2Ccomments%2Clikes.summary(total_count)%2Cpermalink_url%2Cmessage%2Cmessage_tags%2Creactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry)%2Creactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha)%2Creactions.type(LOVE).limit(0).summary(total_count).as(reactions_love)%2Creactions.type(SAD).limit(0).summary(total_count).as(reactions_sad)%2Creactions.type(THANKFUL).limit(0).summary(total_count).as(reactions_thankful)%2Creactions.type(WOW).limit(0).summary(total_count).as(reactions_wow)%2Cshares%2Cattachments%7Bunshimmed_url%7D%2Ccreated_time%7D&access_token=${page_token}`
				)
				.then((response) => {
					setTop(response.data);
					// console.log(response.data);
					console.log(top);
				})
				.catch((error) => {
					console.log(error);
				});
		});

    const tester = _.get(window.top, "published_posts.data.id", "default");
	console.log(tester);

	return <div></div>;
}

export default LodashGet;
