import React from 'react';
import { swing } from 'react-animations';
import styled, { keyframes } from 'styled-components';

import { Layout, Game, Auth } from '../../components';

import './MainPage.scss';

const MainPage = () => {
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
              <Game className="col-12 col-lg-8" />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default MainPage;
