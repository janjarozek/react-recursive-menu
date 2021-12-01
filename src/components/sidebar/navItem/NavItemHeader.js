import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import './navItem.scss'
import { ChevronDownIcon } from '@heroicons/react/outline'

const resolveLinkPath = (childTo, parentTo) => `${parentTo}/${childTo}`;

export default function NavItemHeader( props ) {
    const { item } = props;
    const { label, Icon, to: headerToPath, children } = item;
    const location = useLocation();
    // const navigate = useNavigate();

    const [expanded, setExpand] = useState(
        location.pathname.includes(headerToPath)
    );

    const onExpandChange = e => {
        e.preventDefault();
        setExpand(expanded => !expanded);
    };

    // useEffect(() => {
    //     navigate(`${item.to}`)
    // }, [])

    return (
        <>
      <button
        className={`navItem navItemHeaderButton`}
        onClick={onExpandChange}
      >
        <Icon className="navIcon" />
        <span className="navLabel">{label}</span>
        <ChevronDownIcon
          className={`navItemHeaderChevron ${expanded?"chevronExpanded":""}`}
        />
      </button>

      {expanded && (
        <div className="navChildrenBlock">
          {children.map((item, index) => {
            const key = `${item.label}-${index}`;

            const { label, Icon, children } = item;

            if (children) {
              return (
                <div key={key}>
                  <NavItemHeader
                    item={{
                      ...item,
                      to: resolveLinkPath(item.to, props.item.to),
                    }}
                  />
                </div>
              );
            }

            return (
              <NavLink
                key={key}
                to={resolveLinkPath(item.to, props.item.to)}
                className="navItem"
                activeClassName="activeNavItem"
              >
                <Icon className="navIcon" />
                <span className="navLabel">{label}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </>
    )
}
