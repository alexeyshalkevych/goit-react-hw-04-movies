import React from 'react';

import { Link, useLocation, useRouteMatch } from 'react-router-dom';

const infoItems = ['cast', 'reviews'];

const InfoList = () => {
  const location = useLocation();
  const match = useRouteMatch();

  return (
    <ul>
      {infoItems.length > 0 &&
        infoItems.map(item => (
          <li key={item}>
            <Link
              to={{
                pathname: `${match.url}/${item}`,
                state: {
                  from: location.state
                    ? {
                        ...location.state.from,
                      }
                    : location,
                },
              }}
            >
              {item}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default InfoList;
