'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LinkedinSelector = undefined;

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _icons = require('../../helpers/icons');

var _icons2 = _interopRequireDefault(_icons);

var _LinkedinSelectorEmoji = require('./LinkedinSelectorEmoji');

var _LinkedinSelectorEmoji2 = _interopRequireDefault(_LinkedinSelectorEmoji);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkedinSelector = exports.LinkedinSelector = function LinkedinSelector(_ref) {
    var iconSize = _ref.iconSize,
        reactions = _ref.reactions,
        variant = _ref.variant,
        onSelect = _ref.onSelect;

    var styles = (0, _reactcss2.default)({
        'default': {
            selector: {
                backgroundColor: '#fff',
                borderRadius: '50px',
                padding: '2px',
                boxShadow: '0 0 0 1px rgba(0, 0, 0, .05), 0 1px 2px rgba(0, 0, 0, .15)',
                display: 'flex'
            },
            icon: {
                width: iconSize + 10 + 'px'
            }
        }
    });

    return _react2.default.createElement(
        'div',
        { style: styles.selector },
        (0, _map3.default)(reactions, function (reaction) {
            return _react2.default.createElement(
                'div',
                { style: styles.icon, key: reaction },
                _react2.default.createElement(_LinkedinSelectorEmoji2.default, {
                    icon: _icons2.default.find(variant, reaction),
                    label: reaction,
                    onSelect: onSelect
                })
            );
        })
    );
};

LinkedinSelector.defaultProps = {
    reactions: ['like', 'celebrate', 'support', 'love', 'insightful', 'curious'],
    iconSize: 38,
    variant: 'linkedin'
};

exports.default = LinkedinSelector;