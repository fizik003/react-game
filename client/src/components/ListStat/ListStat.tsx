import React, { useContext, useState } from 'react';
import cn from 'classnames';

import './ListStat.scss';
import Card from '../Card';
import { globalStateContext } from '../../context/globalStateContext';
import Spinner from '../Spinner';
import { LastGameInterface } from '../../interfaces/stat.interface';

interface ListStatInterface {
  size?: number;
  classNames?: string;
}

const ListStat = ({ size, classNames }: ListStatInterface) => {
  const { setState, state } = useContext(globalStateContext);

  if (state?.loading) {
    return (
      <Card>
        <Spinner />
      </Card>
    );
  }

  return (
    <React.Fragment>
      <Card className={cn('list__card h-100')}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Result</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {state?.lastGame.slice(0, 10).map((item, idx) => (
              <tr key={item.dateGame}>
                <th scope="row">{idx + 1}</th>
                <td>{item.resultGame}</td>
                <td>
                  {new Date(item.dateGame).toLocaleString('en', {
                    weekday: 'short',
                    month: 'short',
                    year: '2-digit',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                  })}
                </td>
              </tr>
            ))}
            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </table>
      </Card>
    </React.Fragment>
  );
};

export default ListStat;
