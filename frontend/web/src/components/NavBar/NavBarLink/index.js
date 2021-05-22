import { Link } from 'react-router-dom';

import './style.css';

export default function HeaderLink({ page,children }){
  
  return <Link className="menuItem" to={`/${page}`}>{children}</Link>;
};

