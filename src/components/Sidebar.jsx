import React, { useState } from 'react';
import { 
  IoMailOutline, 
  IoPhonePortraitOutline, 
  IoCalendarOutline, 
  IoLocationOutline, 
  IoChevronDown, 
  IoLogoGithub, 
  IoLogoLinkedin 
} from 'react-icons/io5';
import { SiX } from 'react-icons/si';

const userData = {
  name: "Bishal Tiwari",
  role: "Teacher",
  avatar: "./images/bishal.png",
  contacts: [
    {
      icon: <IoMailOutline />,
      title: "Email",
      value: "bishaltwr@gmail.com",
      link: "mailto:bishaltwr@gmail.com"
    },
    {
      icon: <IoPhonePortraitOutline />,
      title: "Phone",
      value: "+977 9808076305",
    },
    {
      icon: <IoCalendarOutline />,
      title: "Birthday",
      value: "August 27, 1999"
    },
    {
      icon: <IoLocationOutline />,
      title: "Location",
      value: "Mid-Baneshwor, Kathmandu, Nepal"
    }
  ],
  socials: [
    { icon: <IoLogoGithub />, url: "https://github.com/bishaltwr" },
    { icon: <IoLogoLinkedin />, url: "https://www.linkedin.com/in/bishaltwr/" },
    { icon: <SiX />, url: "https://x.com/bishaltwr" }
  ]
};

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
      <div className={`sidebar ${isExpanded ? 'active' : ''}`}>

      <div className="sidebar-info">
        <figure className="avatar-box" style={{ background: 'none' }}>
          <img src={userData.avatar} alt={userData.name} width="80" style={{borderRadius: '50%'}} />
        </figure>

        <div className="info-content">
          <h1 className="name">{userData.name}</h1>
          <p className="title">{userData.role}</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn onClick={() => setIsExpanded(!isExpanded)}>
          <span>Show Contacts</span>
          <IoChevronDown />
        </button>
        </div>

        <div className={`sidebar-info_more `}>
          <div className="separator"></div>

          <ul className="contacts-list">
            {userData.contacts.map((contact, index) => (
              <li key={index} className="contact-item">
                <div className="icon-box">
                  {contact.icon}
                </div>
                <div className="contact-info">
                  <p className="contact-title">{contact.title}</p>
                  {contact.link ? (
                    <a href={contact.link} className="contact-link">{contact.value}</a>
                  ) : (
                    <span className="contact-link">{contact.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            {userData.socials.map((social, index) => (
              <li key={index} className="social-item">
                <a href={social.url} className="social-link" target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
            </div>
  );
};

export default Sidebar;