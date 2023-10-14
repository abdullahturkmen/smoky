import React, { useState } from 'react'
import moment from 'moment';

const NotificationPage = () => {
    const [notificationList, setNotificationList] = useState([
        { title: "Black Friday Strategy: 11 Ideas & Tips 🏷️", read: false, description: "lorem text lorem text lorem text lorem text", createDate: new Date() },
        { title: "Notification 2", read: true, description: "lorem text lorem text lorem text lorem text", createDate: new Date() },
        { title: "Black Friday Strategy: 11 Ideas & Tips 🏷️", read: false, description: "lorem text lorem text lorem text lorem text", createDate: new Date() },
        { title: "Notification 2", read: true, description: "lorem text lorem text lorem text lorem text", createDate: new Date() },
        { title: "Black Friday Strategy: 11 Ideas & Tips 🏷️", read: false, description: "lorem text lorem text lorem text lorem text", createDate: new Date() },
        { title: "Notification 2", read: true, description: "lorem text lorem text lorem text lorem text", createDate: new Date() },
    ]);
    return (
        <>
            {/* begin::Row */}
            <div className='row g-5 g-xl-8'>
                <div className='col-12'>
                {notificationList?.length > 0 ? (
                      <>
                    {notificationList?.map((notification, index) => (<>
                        <div className="card mb-3" key={index}>
                            <div className="card-body p-5">
                                <h5 className="card-title">
                                    {notification.title} - <i className='text-secondary'><small>({moment(notification.createDate).format('DD.MM.YYYY, HH:mm')})</small></i>
                                </h5>
                                {notification.description}
                            </div>
                        </div>
                    </>))}
                    </>
                    ) : (
                      <>
                        <div className="card">
                          <div className="card-body p-5 text-center">No Notifications</div>
                        </div>
                      </>
                    )}
                </div>

            </div>
            {/* end::Row */}


        </>
    )
}

export { NotificationPage }
