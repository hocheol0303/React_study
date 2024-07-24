import React from "react";
import Notification from './Notification';

const reservedNotifications = [
    {message: "안녕하세요, 오늘 일정을 알려드립니다.",id:1,},
    {message: '점심 식사 시간입니다.',id:2,},
    {message: '이제 곧 미팅이 시작됩니다.',id:3,},
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state={
            notifications:[],
        };
    }

    componentDidMount(){
        const {notifications} = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else{
                this.setState({
                    notifications:[]
                })
                clearInterval(timer);
            }
        }, 1500);
    }

    /////////이거 없으면 처음에 두 개 추가됨
    componentWillUnmount(){
        if (timer){
            clearInterval(timer);
        }
    }

    render(){
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification message={notification.message} key={notification.id} id={notification.id}/>;
                })}
            </div>
        );
    }
}

export default NotificationList;