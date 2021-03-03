import React, { useContext, useState } from 'react';
import cn from 'classnames';

import './ListStat.scss';
import Card from '../Card';
import { globalStateContext } from '../../context/globalStateContext';
import Spinner from '../Spinner';

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
      <Card className={cn('list__card')}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Win</th>
              <th scope="col">Lose</th>
              <th scope="col">Draw</th>
            </tr>
          </thead>
          <tbody>
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
