import React, { useState, useEffect } from 'react';
import axios from 'axios';

const token = "EAARmuEuuogkBAElveCCfjtG8ahql83Xechii5nOBedrxZBFc7sYgMY1Y0ZBzvBD3JSZAXyhZCiktGlvywvWJjeZAT8OfHtvXYfAsKNSeQyWCcxq7VSoGgCMSPdUOjm9AmkSZA8KZBanmb9ypzlKxtk9mkgmQcthEmnq8Sskgsu51m7Xb0UeKChLslZAi5gDSucf1uXSoXxsH3u9LZBsGqfKz7YRPUWmeeUH4ZD";

function FacebookComments() {
    return (
        <div>
            <table>
                <tr>
                    <th>page_id</th>
                    <th>page_name</th>
                    <th>post_id</th>
                    <th>comment_id</th>
                    <th>comment_count</th>
                    <th>parent_id</th>
                    <th>like_count</th>
                    <th>Message</th>
                    <th>Attachment</th>
                    <th>message_tags</th>
                    <th>Polarity</th>
                    <th>post_date</th>
                    <th>post_time</th>
                    <th>log_date</th>
                    <th>log_time</th>
                    <th>db_name</th>
                    <th>db_proj</th>
                </tr>
                <tr>
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
                </tr>

            </table>
            
        </div>
    )
}

export default FacebookComments


