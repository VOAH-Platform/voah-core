import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { userAtom } from '@/atom';

import { AppHeader } from './AppHeader';

export function AppLayout() {
  const [user] = useAtom(userAtom);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isLogin) {
      return navigate('/');
    }
  }, [user]);

  return (
    <>
      <AppHeader />
      <div>Login with {user.id}</div>
    </>
  );
}