import * as React from 'react';
import { ProTableProps } from '@ant-design/pro-table';
import type { TooltipProps } from 'antd/lib/tooltip';
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
declare type Action = ActionInterface | React.ReactElement | undefined;
interface TableProps extends ProTableProps<any, any> {
  action?: (item: any, index: number) => Action[];
  actionWidth?: number;
  searchQuery?: boolean;
}
declare const Table: ({
  action,
  columns: customColumns,
  actionWidth,
  pagination,
  formRef,
  search,
  searchQuery,
  request,
  ...props
}: TableProps) => JSX.Element;
export default Table;
