import React from 'react'

function DisplaySEMessage(result, msg, custom_timeout) {
    if (result != '' && result != 0 && result != undefined && msg != '' && msg != 0 && msg != undefined) {
        // clearTimeout(se_msg_timeout_id);
        console.log(`DisplaySEMessage`);
        
        if (result == "s") {
           console.log(result);
           
        } else if (result == "e") {
            console.log(result);
        }
        // $('.reward_point_redeem_result').html(msg);
        var timeout = 15000;
        if (custom_timeout > 0) {
            timeout = custom_timeout;
        }
        // se_msg_timeout_id = setTimeout(function() {
        //     console.log(`se_msg_timeout_id`);
            
        // }, timeout);
    }
}

export default DisplaySEMessage