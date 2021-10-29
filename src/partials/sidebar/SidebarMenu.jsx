import { Link } from 'react-router-dom';

import styled from 'styled-components';

import {
  FaChartPie,
  FaTicketAlt,
  FaMedapps,
  FaUsers,
  FaUserTie,
  FaRegNewspaper,
  FaRegSun,
  FaRegThumbsUp,
} from 'react-icons/fa';

const SidebarNav = styled.nav``;
const SidebarMenuList = styled.ul``;
const Separator = styled.hr`
  margin: 18px 0 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export function SidebarMenu({ url }) {
  return (
    <SidebarNav>
      <SidebarMenuList>
        <li className="interface">
          <Link to="/overview" className={url === '/overview' ? 'active' : ''}>
            <FaChartPie />
            Overview
          </Link>
        </li>
        <li className="interface">
          <Link to="/tickets" className={url === '/tickets' ? 'active' : ''}>
            <FaTicketAlt />
            Tickets
          </Link>
        </li>
        <li className="interface">
          <Link to="/ideas" className={url === '/ideas' ? 'active' : ''}>
            <FaMedapps />
            Ideas
          </Link>
        </li>
        <li className="interface">
          <Link to="/contacts" className={url === '/contacts' ? 'active' : ''}>
            <FaUsers />
            Contacts
          </Link>
        </li>
        <li className="interface">
          <Link to="/agents" className={url === '/agents' ? 'active' : ''}>
            <FaUserTie />
            Agents
          </Link>
        </li>
        <li className="interface">
          <Link to="/articles" className={url === '/articles' ? 'active' : ''}>
            <FaRegNewspaper />
            Articles
          </Link>
        </li>
        <li>
          <Separator />
        </li>
        <li className="interface">
          <Link to="/settings" className={url === '/settings' ? 'active' : ''}>
            <FaRegSun />
            Settings
          </Link>
        </li>
        <li className="interface">
          <Link
            to="/subscription"
            className={url === '/subscription' ? 'active' : ''}
          >
            <FaRegThumbsUp />
            Subscription
          </Link>
        </li>
      </SidebarMenuList>
    </SidebarNav>
  );
}
