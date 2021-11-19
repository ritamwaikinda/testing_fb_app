import React, { useState, useEffect } from 'react';
import axios from 'axios';


const page_token = "EAARmuEuuogkBAFnwcAWgZCLI4vuUfB4K5m3mme91TBM2ZAdEm0wIW5Ge7GOErBMkr56pLxi0g0H78kZANQ9w1qJdQWszgaZAfDfTZBXl8Ef5cAiZC6PvZCrnxZAxOSwqBnjVV0R4Hs7UAp27AEKqZA270t2ODdHT88gF6VEqVwLI1oaKGf4TVOy00RloPq0EEM1HzZAak81xlMZBwOKykecazcJefceWdPPkJQZD";


function JsonItems() {

    const [top, setTop] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
          .get(`https://graph.facebook.com/v12.0/111560247096449?fields=id%2Cname%2Cpublished_posts%7Bid%2Ccomments%2Clikes.summary(total_count)%2Cpermalink_url%2Cmessage%2Cmessage_tags%2Creactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry)%2Creactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha)%2Creactions.type(LOVE).limit(0).summary(total_count).as(reactions_love)%2Creactions.type(SAD).limit(0).summary(total_count).as(reactions_sad)%2Creactions.type(THANKFUL).limit(0).summary(total_count).as(reactions_thankful)%2Creactions.type(WOW).limit(0).summary(total_count).as(reactions_wow)%2Cshares%2Cattachments%7Bunshimmed_url%7D%2Ccreated_time%7D&access_token=${page_token}`)
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
      });
        console.log(top) 


        const topfive = (obj, fn) => {
            const values = Object.values(obj)
        
            values.forEach(val => 
                val && typeof val === "object" ? topfive(val, fn) : fn(val))
        }

        
        let alldata= []
            topfive(top, (val) => {
                alldata.push(<p>{val}</p>)  // wraps any non-object type inside <p>
        })

return  (
    <div>
        <JsonItems> {alldata} </JsonItems> </div>
    )

}

export default JsonItems
