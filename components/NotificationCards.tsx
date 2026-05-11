import React from 'react';
import styled from 'styled-components';

const NotificationCard = styled.div<{ index: number }>`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8px;
  min-width: 180px;
    transform: rotate(-13deg) skew(11deg, -1deg); 
  position: absolute;
  top: ${props => props.index * 120}px;
  left: ${props => props.index * 55}px;
  z-index: ${props => 10 - props.index};
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

const ServiceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ServiceName = styled.span`
  color: #8e8e93;
  font-size: 8px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Time = styled.span`
  color: #8e8e93;
  font-size: 13px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Title = styled.h3`
  color: #ff3b30;
  font-size: 11px;
  font-weight: 600;
  margin: 0 0 4px 0;
  text-transform: uppercase;
`;

const Message = styled.p`
  color: #000;
  font-size: 8px;
  margin: 0;
  line-height: 1.4;
`;

const NotificationStack = () => {
  const notifications = [
    {
      service: 'MESSAGES',
      icon: 'path/to/messages-icon.png', // Replace with actual path
      time: 'now',
      title: 'RECIPE ALERT',
      message: 'The 280 TR chiller has tripped and alarm code is 1. Check the plant room conditions and res...',
    },
    {
      service: 'WHATSAPP',
      icon: 'path/to/whatsapp-icon.png', // Replace with actual path
      time: '2m ago',
      title: '4F NW CORRIDOR AHU AREA OVERCOOLED',
      message: 'Hello Rahul,\n4F NW Corridor area is overcooled where the area is...',
    },
    {
      service: 'MAIL',
      icon: 'path/to/mail-icon.png', // Replace with actual path
      time: '1m ago',
      title: 'CHILLER 2 250TR TRIPPED (ALERT ID:3657)',
      message: 'Hello Rahul,\nChiller dripped due to high discharge pressure caused...',
    },
  ];

  return (
    <div className='z-100' style={{ position: 'absolute', left:"450px", top:"255px", height: '500px', margin: '50px' }}>
      {notifications.map((notification, index) => (
        <NotificationCard key={index} index={index}>
          <Header>
            <ServiceInfo>
              <Icon src={notification.icon} alt={`${notification.service} icon`} />
              <ServiceName>{notification.service}</ServiceName>
            </ServiceInfo>
            <Time>{notification.time}</Time>
          </Header>
          <Title>{notification.title}</Title>
          <Message>{notification.message}</Message>
        </NotificationCard>
      ))}
    </div>
  );
};

export default NotificationStack;