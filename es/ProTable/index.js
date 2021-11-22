var _excluded = [
    'title',
    'onClick',
    'micro',
    'href',
    'confirmTitle',
    'disabled',
  ],
  _excluded2 = [
    'action',
    'columns',
    'actionWidth',
    'pagination',
    'formRef',
    'search',
    'searchQuery',
    'request',
  ];

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

import * as React from 'react';
import { Divider, Dropdown, Menu, Popconfirm, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import qs from 'query-string';
import ProTable from '@ant-design/pro-table';
import Link from '../Link';

var renderActionItem = function renderActionItem(item, index, row) {
  if (!item) return undefined;
  if (/*#__PURE__*/ React.isValidElement(item))
    return /*#__PURE__*/ React.cloneElement(item, {
      key: index,
    });

  if (item.children) {
    return /*#__PURE__*/ React.createElement(
      Dropdown,
      {
        key: index,
        overlay: /*#__PURE__*/ React.createElement(
          Menu,
          null,
          item.children.map(function (child, childIndex) {
            return /*#__PURE__*/ React.createElement(
              Menu.Item,
              {
                key: childIndex,
              },
              renderActionItem(child, childIndex, row),
            );
          }),
        ),
      },
      /*#__PURE__*/ React.createElement(
        'a',
        {
          className: 'ant-dropdown-link',
          onClick: function onClick(e) {
            e.preventDefault();
          },
        },
        item.title,
        /*#__PURE__*/ React.createElement(DownOutlined, null),
      ),
    );
  }

  var title = item.title,
    _onClick = item.onClick,
    micro = item.micro,
    href = item.href,
    confirmTitle = item.confirmTitle,
    disabled = item.disabled,
    others = _objectWithoutProperties(item, _excluded);

  if (micro && href) {
    return /*#__PURE__*/ React.createElement(
      Link,
      _objectSpread(
        {
          key: index,
          onClick: function onClick() {
            window.history.pushState({}, '', href);
          },
        },
        others,
      ),
      title,
    );
  }

  if (!disabled && confirmTitle) {
    return /*#__PURE__*/ React.createElement(
      Popconfirm,
      {
        key: index,
        title: confirmTitle,
        onConfirm: function onConfirm() {
          return _onClick && _onClick(row);
        },
      },
      /*#__PURE__*/ React.createElement(
        Link,
        _objectSpread(
          {
            disabled: disabled,
          },
          others,
        ),
        title,
      ),
    );
  }

  return /*#__PURE__*/ React.createElement(
    Link,
    {
      key: index,
      href: href,
      disabled: disabled,
      onClick: function onClick() {
        return _onClick === null || _onClick === void 0
          ? void 0
          : _onClick(row);
      },
    },
    title,
  );
};

var Table = function Table(_ref) {
  var action = _ref.action,
    customColumns = _ref.columns,
    actionWidth = _ref.actionWidth,
    pagination = _ref.pagination,
    formRef = _ref.formRef,
    _ref$search = _ref.search,
    search =
      _ref$search === void 0
        ? {
            layout: 'vertical',
          }
        : _ref$search,
    _ref$searchQuery = _ref.searchQuery,
    searchQuery = _ref$searchQuery === void 0 ? true : _ref$searchQuery,
    request = _ref.request,
    props = _objectWithoutProperties(_ref, _excluded2);

  var queryParams = new URLSearchParams(window.location.search);
  var innerFormRef = React.useRef();
  React.useImperativeHandle(formRef, function () {
    return innerFormRef.current;
  });

  var _React$useState = React.useState(customColumns),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    columns = _React$useState2[0],
    setColumns = _React$useState2[1];

  var _React$useState3 = React.useState(+(queryParams.get('page') || 1)),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    current = _React$useState4[0],
    setCurrent = _React$useState4[1];

  var _React$useState5 = React.useState(+(queryParams.get('pageSize') || 10)),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    pageSize = _React$useState6[0],
    setPageSize = _React$useState6[1];

  React.useEffect(
    function () {
      if (searchQuery) {
        var _innerFormRef$current;

        (_innerFormRef$current = innerFormRef.current) === null ||
        _innerFormRef$current === void 0
          ? void 0
          : _innerFormRef$current.setFieldsValue(
              qs.parse(window.location.search),
            );
      }
    },
    [searchQuery],
  );
  React.useEffect(
    function () {
      if (customColumns) {
        var newColumns = _toConsumableArray(customColumns);

        if (action) {
          newColumns.push({
            title: '操作',
            valueType: 'option',
            fixed: 'right',
            width: actionWidth,
            render: function render(_, row, idx) {
              return /*#__PURE__*/ React.createElement(
                Space,
                {
                  split: /*#__PURE__*/ React.createElement(Divider, {
                    type: 'vertical',
                  }),
                  size: 0,
                },
                action(row, idx).map(function (item, index) {
                  return renderActionItem(item, index, row);
                }),
              );
            },
          });
        }

        setColumns(newColumns);
      }
    },
    [customColumns, action, actionWidth],
  );
  var others = {
    pagination: pagination,
  };

  if (searchQuery) {
    others.onSubmit = function (params) {
      var _props$onSubmit;

      var searchParams = new URLSearchParams(window.location.search);
      Object.keys(params).forEach(function (key) {
        searchParams.set(key, ''.concat(params[key]));
      });
      var newRelativePathQuery = ''
        .concat(window.location.pathname, '?')
        .concat(searchParams.toString());
      window.history.pushState(null, '', newRelativePathQuery);
      (_props$onSubmit = props.onSubmit) === null || _props$onSubmit === void 0
        ? void 0
        : _props$onSubmit.call(props, params);
    };

    others.onReset = function () {
      var _innerFormRef$current2, _props$onReset;

      var searchParams = new URLSearchParams(window.location.search);
      Object.keys(
        (_innerFormRef$current2 = innerFormRef.current) === null ||
          _innerFormRef$current2 === void 0
          ? void 0
          : _innerFormRef$current2.getFieldsValue(),
      ).forEach(function (key) {
        searchParams.delete(key);
      });
      var newRelativePathQuery = ''
        .concat(window.location.pathname, '?')
        .concat(searchParams.toString());
      window.history.pushState(null, '', newRelativePathQuery);
      (_props$onReset = props.onReset) === null || _props$onReset === void 0
        ? void 0
        : _props$onReset.call(props);
    };

    if (pagination !== false) {
      others.pagination = _objectSpread(
        _objectSpread(
          {
            current: current,
            pageSize: pageSize,
          },
          pagination,
        ),
        {},
        {
          onChange: function onChange(page, size) {
            var _pagination$onChange;

            var searchParams = new URLSearchParams(window.location.search);
            searchParams.set('page', ''.concat(page));
            searchParams.set('pageSize', ''.concat(size));
            var newRelativePathQuery = ''
              .concat(window.location.pathname, '?')
              .concat(searchParams.toString());
            window.history.pushState(null, '', newRelativePathQuery);
            setCurrent(page);
            setPageSize(size || 10);
            pagination === null || pagination === void 0
              ? void 0
              : (_pagination$onChange = pagination.onChange) === null ||
                _pagination$onChange === void 0
              ? void 0
              : _pagination$onChange.call(pagination, page, size);
          },
        },
      );
    }
  }

  return /*#__PURE__*/ React.createElement(
    ProTable,
    _objectSpread(
      _objectSpread({}, props),
      {},
      {
        request: request
          ? function (params, sort, filter) {
              Object.keys(params).forEach(function (key) {
                if (params[key] && typeof params[key] === 'string') {
                  params[key] = params[key].trim();
                }
              });
              return request(params, sort, filter);
            }
          : undefined,
        search: search,
        formRef: innerFormRef,
        columns: columns,
      },
      others,
    ),
  );
};

export default Table;
