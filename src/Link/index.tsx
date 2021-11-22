import * as React from 'react';
import { Tooltip, Typography } from 'antd';
import { LinkProps as Props } from 'antd/es/typography/Link';
import { TooltipProps } from 'antd/es/tooltip';
// import AccessContext from '../context/access';

const { Link } = Typography;

interface LinkProps extends Props {
  access?: string;
  tooltip?: string | TooltipProps;
}

const Index: React.FC<LinkProps> = ({
  access,
  tooltip,
  disabled,
  ...props
}) => {
  // const { accesses } = React.useContext(AccessContext);

  // const child = <Link {...props} disabled={disabled || (access && !accesses[access])} />;
  const child = <Link {...props} />;

  if (tooltip) {
    const tooltipProps =
      typeof tooltip === 'string' ? { title: tooltip } : tooltip;
    return <Tooltip {...tooltipProps}>{child}</Tooltip>;
  }
  return child;
};

export default Index;
