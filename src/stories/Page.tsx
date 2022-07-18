import React from 'react';

import { Radio, RadioGroup } from '@chakra-ui/react';
import './page.css';

type User = {
  name: string;
};

export const Page: React.VFC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <RadioGroup>
      <Radio value="1">First</Radio>
      <Radio value="2">Second</Radio>
      <Radio value="3">Third</Radio>
    </RadioGroup>
  );
};
