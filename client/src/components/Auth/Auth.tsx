import React, { useContext, useRef, useState } from 'react';
import cn from 'classnames';

import { Button, Card } from '../';

import './Auth.scss';
import { globalStateContext } from '../../context/globalStateContext';
import { creatStat, getStat } from '../../services/fetchData.services';
import { CreateStatResponseInterface } from '../../interfaces/stat.interface';

interface AuthInterface {
  classNames?: string;
}

const Auth = ({ classNames }: AuthInterface) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const { setState, state } = useContext(globalStateContext);
  const [userName, setUsername] = useState('');

  const changeUserName = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  const startGameHandler = async () => {
    if (setState) {
      const newStat = (await creatStat(
        userName,
      )) as CreateStatResponseInterface;
      setState(prevState => ({
        ...prevState,
        userName: userName,
        userStatId: newStat._id,
      }));
    }
  };
  return (
    <div className={cn('auth', classNames)}>
      <Card className="auth__card">
        <div className="mb-3 auth__content-name">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Your name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Petrovich)"
            onChange={changeUserName}
            value={userName}
          />
        </div>
        <div className="auth__btns d-flex flex-column ">
          <Button
            classNames="auth__btn w-100"
            disabled={!userName}
            onClick={startGameHandler}
          >
            Start game
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Auth;
