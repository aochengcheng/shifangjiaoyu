import * as React from 'react';

import { Button, ButtonProps, Drawer, DrawerProps, Spin } from 'antd';

interface SfDrawerProps extends DrawerProps {
  onOk?: () => Promise<unknown>;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  spinning?: boolean;
  okText?: string;
  cancelText?: string;
}

const SfDrawer: React.FC<SfDrawerProps> = ({
  onOk,
  onClose,
  okButtonProps,
  children,
  cancelButtonProps,
  spinning = false,
  okText = '保存',
  cancelText = '取消',
  width = 720,
  ...restProps
}) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <Drawer
      closable={false}
      onClose={onClose}
      width={width}
      maskClosable={!loading}
      footer={
        <Spin spinning={spinning}>
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button
              disabled={loading}
              onClick={(e: any) => onClose && onClose(e)}
              style={{ marginRight: 8 }}
              {...cancelButtonProps}
            >
              {cancelText}
            </Button>
            <Button
              type="primary"
              loading={loading}
              onClick={() => {
                if (onOk) {
                  setLoading(true);
                  onOk().finally(() => setLoading(false));
                }
              }}
              {...okButtonProps}
            >
              {okText}
            </Button>
          </div>
        </Spin>
      }
    >
      <Spin spinning={spinning}>{children}</Spin>
    </Drawer>
  );
};

export default SfDrawer;
