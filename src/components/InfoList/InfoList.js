import React from 'react';
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';
import infoItems from '../../utils/infoItems';
import { InfoItems, InfoItem } from './InfoList.styled';

const InfoList = () => {
  const location = useLocation();
  const match = useRouteMatch();

  return (
    <InfoItems>
      {infoItems.length > 0 &&
        infoItems.map(item => (
          <InfoItem key={item}>
            <NavLink
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
            </NavLink>
          </InfoItem>
        ))}
    </InfoItems>
  );
};

export default InfoList;
