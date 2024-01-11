import { Spin } from 'antd';
import { FC } from 'react';

interface SpinnerProps {
  visible: boolean;
}

const Spinner: FC<SpinnerProps> = ({ visible }) =>
  visible ? (
    <div className="absolute left-0 top-0 grid h-screen w-screen place-items-center bg-black bg-opacity-30">
      <Spin size="large" />
    </div>
  ) : null;

export default Spinner;
