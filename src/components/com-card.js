import React from "react";
import Card1 from "./card";

export default function Combine(){
    return(
        <div className="card-com">
            <Card1 image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnIaCnVjIC1vnzO3y7DH_TRLRPFZ2e9d42g&usqp=CAU'
                  alt='img1'
                  title='Learn more'
                  body = 'learn how this platform works' />

            <Card1 image='https://contenthub-static.grammarly.com/blog/wp-content/uploads/2018/05/how-to-ask-for-help-437x230.jpg'
                   alt='img2'
                   title='Need HELP!!'
                   body='Click Here' />
            <Card1 image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_1_aF991Xzb62MQDDFCYwLFavmtCmBVr2w&usqp=CAU'
                   alt='img3'
                   title='CONTRIBUTE'
                   body='Ur contribution will be very helpful' />
        </div>
    )
}