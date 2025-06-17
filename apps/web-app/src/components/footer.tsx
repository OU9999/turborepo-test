'use client';

import { CST } from '@workspace/constant';
import { stringUtil } from '@workspace/util';

const Footer = () => {
  const escaped = stringUtil.escape('&<>"');
  console.log(escaped);

  return <footer>{CST.FOOTER.title}</footer>;
};

export { Footer };
