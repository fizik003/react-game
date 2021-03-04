import React, { useContext } from 'react';
import { swing } from 'react-animations';
import styled, { keyframes } from 'styled-components';

import { Layout, Game, Auth, ListStat } from '../../components';
import { globalStateContext } from '../../context/globalStateContext';

import './MainPage.scss';
const MainPage = () => {
  const { state } = useContext(globalStateContext);
  const Swing = styled.div`
    animation: 10s ${keyframes`${swing}`} infinite;
    margin-bottom: 20px;
  `;
  return (
    <div>
      <Layout>
        <main className="main-page">
          <div className="container">
            <div className="row">
              <Swing>
                <h1 className="main-page__title text-center">
                  Rock Paper Scissors
                </h1>
              </Swing>
            </div>
            <div className="row">
              <div className="main-page__game col-12 col-lg-7 mb-3 mb-lg-0">
                <Game />
              </div>
              <div className="main-page__list-stat col-12 col-lg-5">
                <ListStat />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default MainPage;
