import * as React from 'react';
import { LinkProps as Props } from 'antd/es/typography/Link';
import { TooltipProps } from 'antd/es/tooltip';
interface LinkProps extends Props {
  access?: string;
  tooltip?: string | TooltipProps;
}
declare const Index: React.FC<LinkProps>;
export default Index;
