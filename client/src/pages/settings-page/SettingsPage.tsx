import React from 'react';
import cn from 'classnames';

import './SettingsPage.scss';
import { Layout, Settings } from '../../components';

interface SettingsPageInterface {
  classNames: string;
}

const SettingsPage = ({ classNames }: SettingsPageInterface) => {
  return (
    <React.Fragment>
      <Layout>
        <main className="settings-page">
          <div className="container">
            <div className="row">
              <Settings classNames="settings-page__settings col-12 col-lg-8 offset-lg-2" />
            </div>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

export default SettingsPage;
