import React, { useContext, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import './Settings.scss';
import { Card } from '..';
import { globalStateContext } from '../../context/globalStateContext';

interface SettingsInterface {
  classNames?: string;
}

const Settings = ({ classNames }: SettingsInterface) => {
  const { setState, state } = useContext(globalStateContext);
  const [volume, setVolume] = useState(0.5);
  const volumeRef = useRef<HTMLInputElement>(null);

  const changeVolumeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.currentTarget.value));
  };

  const toggleBodyColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    document.body.classList.toggle('other');
  };

  const toggleBackSound = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setState) {
      setState(prevState => ({
        ...prevState,
        backGroundMusic: e.target.checked,
      }));
    }
  };

  const toggleOtherSounds = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setState) {
      setState(prevState => ({
        ...prevState,
        otherSounds: e.target.checked,
      }));
    }
  };

  useEffect(() => {
    if (setState && volumeRef) {
      setState(prevState => ({
        ...prevState,
        volume: Number(volumeRef.current?.value),
      }));
    }
  }, [volumeRef.current?.value]);
  return (
    <div className={cn('settings', classNames)}>
      <Card className="settings__card">
        <label htmlFor="customRange3" className="form-label">
          Volume
        </label>
        <input
          type="range"
          defaultValue={state?.volume}
          ref={volumeRef}
          className="form-range"
          min="0"
          max="1"
          step="0.1"
          id="customRange3"
          onChange={changeVolumeHandler}
        />
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            defaultChecked={state?.backGroundMusic}
            onChange={toggleBackSound}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            Background music
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            defaultChecked={state?.otherSounds}
            onChange={toggleOtherSounds}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            Other sounds
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            defaultChecked={document.body.classList.contains('other')}
            onChange={toggleBodyColor}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            change color
          </label>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
