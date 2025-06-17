'use client';

import { CST } from '@workspace/constant';
import { stringUtil } from '@workspace/util';

const Footer = () => {
  const string = stringUtil.escape('&');
  console.log(string);
  return <footer>{CST.FOOTER.title}</footer>;
};

export { Footer };
