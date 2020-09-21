import React from 'react'
import { Button, notification } from 'antd';

const openNotification = () => {
  notification.open({
    message: '',
    description:
      'Hey no more than 2 of the same card per deck! Get creative!',
    className: 'custom-class-notification list-background',
    style: {
      width: 600,
    },
  });
};

export default openNotification