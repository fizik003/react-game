import React, { useContext, useEffect, useState } from 'react';
import cn from 'classnames';

import './StatPage.scss';
import { Button, Card, Layout, Spinner } from '../../components';
import { globalStateContext } from '../../context/globalStateContext';
import { CreateStatResponseInterface } from '../../interfaces/stat.interface';
import { getStat } from '../../services/fetchData.services';

interface StatPageInterface {
  classNames: string;
}

const StatPage = ({ classNames }: StatPageInterface) => {
  const { setState, state } = useContext(globalStateContext);
  const [arrStat, setArrStat] = useState<CreateStatResponseInterface[]>();
  // let arrStat: CreateStatResponseInterface[];
  const getStatistic = async () => {
    if (setState) {
      await setState(prevstate => ({ ...prevstate, loading: true }));
      setArrStat((await getStat()) as CreateStatResponseInterface[]);
      await setState(prevstate => ({ ...prevstate, loading: false }));
    }
  };

  const sortArrStart = (sortBy: string) => {
    if (arrStat) {
      setArrStat(prevState => [
        ...arrStat?.sort((a, b) => {
          if (
            a[sortBy as keyof CreateStatResponseInterface] <
            b[sortBy as keyof CreateStatResponseInterface]
          ) {
            return 1;
          }
          if (
            a[sortBy as keyof CreateStatResponseInterface] >
            b[sortBy as keyof CreateStatResponseInterface]
          ) {
            return -1;
          }

          return 0;
        }),
      ]);
    }
  };

  useEffect(() => {
    getStatistic();
  }, []);
  return (
    <React.Fragment>
      <Layout>
        <main className="stat-page">
          <div className="container">
            <div className="row">
              <Card>
                {!state?.loading && (
                  <React.Fragment>
                    <div className="stat-page__sort-btns mb-2">
                      <Button
                        onClick={() => sortArrStart('countWin')}
                        type="btn-outline-primary"
                      >
                        Sort by wins
                      </Button>
                      <Button
                        classNames="ms-2"
                        onClick={() => sortArrStart('countLose')}
                        type="btn-outline-primary"
                      >
                        Sort by lose
                      </Button>
                    </div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Wins</th>
                          <th scope="col">Lose</th>
                          <th scope="col">Draw</th>
                        </tr>
                      </thead>
                      <tbody>
                        {arrStat?.map((stat, idx) => (
                          <tr key={stat._id}>
                            <th scope="row">{idx + 1}</th>
                            <td>{stat.username}</td>
                            <td>{stat.countWin}</td>
                            <td>{stat.countLose}</td>
                            <td>{stat.countDraw}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </React.Fragment>
                )}
                {state?.loading && <Spinner />}
              </Card>
            </div>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

export default StatPage;
