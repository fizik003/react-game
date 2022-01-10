import React from 'react';
import cn from 'classnames';

import './AuthPage.scss';
import { Auth, Layout } from '../../components';

interface AuthPageInterface {
  classNames?: string;
}

const AuthPage = ({ classNames }: AuthPageInterface) => {
  return (
    <React.Fragment>
      <Layout>
        <main className="main">
          <div className="container">
            <div className="row auth__wrapper">
              <Auth classNames="col-12 col-md-8 offset-md-2  col-lg-6 offset-lg-3 mt-auto mb-auto"></Auth>
            </div>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

export default AuthPage;
