import React from 'react'
import { useRef } from 'react';

const useAuth = () => {
    const reqId = useRef("");
  const status = useAppSelector((state) => state.auth.status);
    const loading = status[reqId.current] === working;
  return (
    <div>useAuth</div>
  )
}

export default useAuth