import * as React from 'react';
import { Divider, Dropdown, Menu, Popconfirm, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import qs from 'query-string';
import ProTable, { ProTableProps } from '@ant-design/pro-table';
import { ParamsType } from '@ant-design/pro-provider';
import type { FormInstance } from 'antd/lib/form';
import type { TooltipProps } from 'antd/lib/tooltip';

import Link from '../Link';

export type { ProColumns, ActionType } from '@ant-design/pro-table';

interface ActionInterface {
  title: string;
  href?: string;
  onClick?: (item: any) => void;
  micro?: boolean;
  type?: 'secondary' | 'success' | 'warning' | 'danger' | undefined;
  confirmTitle?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  /**
   * 权限
   */
  access?: string;
  tooltip?: string | TooltipProps;
  children?: Action[];
}

type Action = ActionInterface | React.ReactElement | undefined;

type TableProps = {
  action?: (item: any, index: number) => Action[];
  actionWidth?: number;
  searchQuery?: boolean;
};

const renderActionItem = (item: Action, index: number, row: any) => {
  if (!item) return undefined;

  if (React.isValidElement(item))
    return React.cloneElement(item, { key: index });

  if (item.children) {
    return (
      <Dropdown
        key={index}
        overlay={
          <Menu>
            {item.children.map((child, childIndex) => (
              <Menu.Item key={childIndex}>
                {renderActionItem(child, childIndex, row)}
              </Menu.Item>
            ))}
          </Menu>
        }
      >
        <a
          className="ant-dropdown-link"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {item.title}
          <DownOutlined />
        </a>
      </Dropdown>
    );
  }

  const { title, onClick, micro, href, confirmTitle, disabled, ...others } =
    item;

  if (micro && href) {
    return (
      <Link
        key={index}
        onClick={() => {
          window.history.pushState({}, '', href);
        }}
        {...others}
      >
        {title}
      </Link>
    );
  }

  if (!disabled && confirmTitle) {
    return (
      <Popconfirm
        key={index}
        title={confirmTitle}
        onConfirm={() => onClick && onClick(row)}
      >
        <Link disabled={disabled} {...others}>
          {title}
        </Link>
      </Popconfirm>
    );
  }

  return (
    <Link
      key={index}
      href={href}
      disabled={disabled}
      onClick={() => onClick?.(row)}
    >
      {title}
    </Link>
  );
};

const Table = <T extends Record<string, any>, U extends ParamsType>({
  action,
  columns: customColumns,
  actionWidth,
  pagination,
  formRef,
  search = { layout: 'vertical' },
  searchQuery = true,
  request,
  ...props
}: TableProps & ProTableProps<T, U>) => {
  const queryParams = new URLSearchParams(window.location.search);

  const innerFormRef = React.useRef<FormInstance>();

  React.useImperativeHandle(formRef, () => innerFormRef.current);

  const [columns, setColumns] = React.useState(customColumns);
  const [current, setCurrent] = React.useState(+(queryParams.get('page') || 1));
  const [pageSize, setPageSize] = React.useState(
    +(queryParams.get('pageSize') || 10),
  );

  React.useEffect(() => {
    if (searchQuery) {
      innerFormRef.current?.setFieldsValue(qs.parse(window.location.search));
    }
  }, [searchQuery]);

  React.useEffect(() => {
    if (customColumns) {
      const newColumns = [...customColumns];
      if (action) {
        newColumns.push({
          title: '操作',
          valueType: 'option',
          fixed: 'right',
          width: actionWidth,
          render: (_, row, idx: number) => (
            <Space split={<Divider type="vertical" />} size={0}>
              {action(row, idx).map((item, index) =>
                renderActionItem(item, index, row),
              )}
            </Space>
          ),
        });
      }

      setColumns(newColumns);
    }
  }, [customColumns, action, actionWidth]);

  const others: Pick<TableProps, 'onSubmit' | 'onReset' | 'pagination'> = {
    pagination,
  };

  if (searchQuery) {
    others.onSubmit = (params) => {
      const searchParams = new URLSearchParams(window.location.search);
      Object.keys(params).forEach((key) => {
        searchParams.set(key, `${params[key]}`);
      });
      const newRelativePathQuery = `${
        window.location.pathname
      }?${searchParams.toString()}`;
      window.history.pushState(null, '', newRelativePathQuery);
      props.onSubmit?.(params);
    };

    others.onReset = () => {
      const searchParams = new URLSearchParams(window.location.search);
      Object.keys(innerFormRef.current?.getFieldsValue()).forEach((key) => {
        searchParams.delete(key);
      });
      const newRelativePathQuery = `${
        window.location.pathname
      }?${searchParams.toString()}`;
      window.history.pushState(null, '', newRelativePathQuery);
      props.onReset?.();
    };

    if (pagination !== false) {
      others.pagination = {
        current,
        pageSize,
        ...pagination,
        onChange: (page, size) => {
          const searchParams = new URLSearchParams(window.location.search);
          searchParams.set('page', `${page}`);
          searchParams.set('pageSize', `${size}`);
          const newRelativePathQuery = `${
            window.location.pathname
          }?${searchParams.toString()}`;
          window.history.pushState(null, '', newRelativePathQuery);
          setCurrent(page);
          setPageSize(size || 10);
          pagination?.onChange?.(page, size);
        },
      };
    }
  }

  return (
    <ProTable
      {...props}
      request={
        request
          ? (params, sort, filter) => {
              Object.keys(params).forEach((key) => {
                if (params[key] && typeof params[key] === 'string') {
                  params[key] = params[key].trim();
                }
              });
              return request(params, sort, filter);
            }
          : undefined
      }
      search={search}
      formRef={innerFormRef}
      columns={columns}
      {...others}
    />
  );
};

export default Table;
