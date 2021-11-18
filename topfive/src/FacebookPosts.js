import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Components/Loader';

const page_token = "EAARmuEuuogkBANx7pDPZCDOypY72QDsBxZArrVDlhMvP7SmUiYtbZCwHlfSgaYJ0xE9mFlhnd8aLJxRomO5uZACZCP8Bln2Ki02ZASKAwEKmbZCkxgMsOkAq7HoeQFD29nXSo4DQweudP3DUFmZByresMkfNI3rqAIZB9GgcgWq1CD4DL4tH1yRs2HZBK7AXZCNkbVVjdwctIkpjYZAqVQIQ5IDRmQTOz3W2LPUZD";


function FacebookPosts() {
    const [top, setTop] = useState({});

    useEffect(() => {
        axios
          .get(`https://graph.facebook.com/v12.0/111560247096449?fields=id%2Cname%2Cengagement%2Crating_count%2Clikes%2Cposts.limit(10)%7Bcreated_time%2Cmessage%2Cmessage_tags%2Cshares%2Clikes%2Cpermalink_url%2Creactions%7Btype%7D%2Cattachments%7Bdescription%2Cdescription_tags%2Cmedia%2Cmedia_type%2Ctitle%2Ctype%2Cunshimmed_url%2Curl%7D%2Cid%2Cinsights%7Bvalues%2Cid%2Cname%2Cperiod%2Ctitle%2Cdescription%2Cdescription_from_api_doc%7D%2Ccomments%7Bid%2Cis_hidden%2Cattachment%2Ccomment_count%2Ccreated_time%2Clike_count%2Cmessage%2Cmessage_tags%2Cuser_likes%2Clikes%2Cpermalink_url%2Ccomments%7Bmessage%2Cid%2Ccreated_time%2Cattachment%2Clike_count%2Clikes%2Cmessage_tags%2Cuser_likes%2Cpermalink_url%2Ccomments%7Buser_likes%2Clikes%2Creactions%2Ccomments%7Blikes%7D%7D%2Creactions%7D%2Creactions%7Btype%7D%7D%2Csharedposts%7D%2Cpublished_posts.limit(10)%7Bcreated_time%2Cmessage%2Cmessage_tags%2Cshares%2Clikes%2Cpermalink_url%2Creactions%7Btype%7D%2Cattachments%7Bdescription%2Cdescription_tags%2Cmedia%2Cmedia_type%2Ctitle%2Ctype%2Cunshimmed_url%2Curl%7D%2Cid%2Cinsights%7Bvalues%2Cid%2Cname%2Cperiod%2Ctitle%2Cdescription%2Cdescription_from_api_doc%7D%2Ccomments%7Bid%2Cis_hidden%2Cattachment%2Ccomment_count%2Ccreated_time%2Clike_count%2Cmessage%2Cmessage_tags%2Cuser_likes%2Clikes%2Cpermalink_url%2Ccomments%7Bmessage%2Cid%2Ccreated_time%2Cattachment%2Clike_count%2Clikes%2Cmessage_tags%2Cuser_likes%2Cpermalink_url%2Ccomments%7Buser_likes%2Clikes%2Creactions%2Ccomments%7Blikes%7D%7D%2Creactions%7D%2Creactions%7Btype%7D%7D%2Csharedposts%7D%2Cratings&access_token=${page_token}`)
          .then((response) => {
            setTop(response.data);
            // setCounting(top.posts.data[1].reactions.summary.total_count)
            console.log(response.data)
            // console.log(counting)
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);



      {administrationData.map((row, index) => (
        <Card key={index}>
        <CardText>
            <div>
                 <h4>{row.page} / {row.section}</h4> 
                 <img style={styles.image} src={row.image} alt={row.name} /> 
            </div> 
            <Table>
                <TableBody>
                    {
                        row.rows.map((item, itemIndex)=>{
                           return(
                               <TableRow id={item.rows.id} index={itemIndex}>
                                   <TableRowColumn> {item.type} </TableRowColumn>
                                   <TableRowColumn> {item.name}</TableRowColumn>
                                   ...
                                   <TableRowColumn> {item.characters}</TableRowColumn>
                               </TableRow>
                           );
                        })
                    } 
                </TableBody>
            </Table>
        </CardText>
      </Card>         
    ))}
      
    //   const {name, id} = top;
    //   const {posts: {data: {reactions: {type}}}} = top.posts.data.reactions.type;
    //   console.log(name, id, type);

    return (
        <div>
            <table>
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
            { top.posts ? ( 
               {top.posts.map((data, index) => (
                <tr className={index}>     
                    <td>{top.id}</td>
                    <td>{top.name}</td>
                    {
                        posts.data.map((post, itemIndex)=>{
                            <>
                            <td>{post.id}</td>
                            <td></td>
                            </>
                        })
                    }

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

                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>))}
            ) : <Loader />
            }

            </table>
        </div>
    )
}

export default FacebookPosts
